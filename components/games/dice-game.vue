<template lang="pug">
.dice
    .tabs
        .tabs__item(
            @click="activeTab = 0"
        ) {{ $t('games.diceManual') }}
        .tabs__item(
            @click="popup()"
        ) {{ $t('games.diceAuto') }}
        .tabs__selector(
            :class="{'tabs__selector_2' : activeTab}"
        )
    .dice__main
        .dice__cube(
            :class="{'dice__cube_animation' : betAnimationFinish && betAnimation}"
        )
            img(
                src="~/assets/img/games/cube.png" 
                alt="dice game cube"
            )
            .dice__points(
                v-if="!betAnimation"
            ) {{ points }}
            client-only(
                v-if="betFrom !== null && betTo !== null"
            )
                number.dice__points.dice__points_animated(
                    tag="span"
                    ref="number"
                    :class="{'dice__points_finished-animation' : betAnimationFinish && betAnimation}"
                    :to="betTo"
                    :from="betFrom"
                    :format="theFormat"
                    :duration="2"
                    easing="power0.in"
                )
        .dice__marks
            .mark(
                v-for="i in [0, 25, 50, 75, 100]"
                :key="i"
                @click="setSlider(i)"
            ) {{ i }}
        .dice__slider
            .slider(ref="slider")  
    .dice__wrapper
        input-block.roll(
            :text="roll ? 'Roll over' : 'Roll under'"
            :disable="false"
            :content="points"
            :game="true"
            @roll="roll = $event, setChance(points)"
            @input="points = $event < 2 ? 2 : $event, setSlider($event)"
        )
        input-block.win(
            :text="$t('games.diceWinChance')"
            :type="'text'"
            :content="winChance"
            :disable="true"
        )
    auto-mode(v-if="activeTab")
    .dice__main(v-if="activeTab")
        input-block.bet(
            :text="$t('games.diceNumbersOfBets')"
        )
        input-block.bet(
            :text="$t('games.diceBetAmount')"
            @input="amount = $event"
        )
        .default-button.dice__button(@click="startAuto()") {{ $t('games.diceStartAutoBet') }}
        .default-button.default-button_border.dice__button.dice__button_border(@click="stopAuto()") {{ $t('games.diceStopAutoBet') }}
    .dice__main(v-else)
        input-block.bet(
            :text="$t('games.diceBetAmount')"
            :disable="false"
            @input="amount = $event"
        )
        .default-button.dice__button(@click="bet()") {{ $t('games.diceBet') }}
    .dice__error(
        :class="{'dice__error_active' : balanceError}"
    ) {{ amount === 0 ? 'Error! Bet Amount must be more than 0' : $t('games.diceError') }}
</template>

<script>
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';


import { mapGetters } from "vuex";

import inputBlock from "~/components/input-block.vue";
import autoMode from "~/components/games/auto-mode-block.vue";

export default {
    name: 'diceGame',

    components: {
        noUiSlider,
        inputBlock,
        autoMode
    },

    computed: {
		...mapGetters({
			returnInfo: "popup/returnInfo",
			balance: "userData/balance"
		})
	},

    data() {
        return {
            activeTab: 0,
            points: 50,
            roll: true,
            balanceError: false,
            winChance: '50%',
            betStart: false,
            betFrom: null,
            betTo: null,
            betAnimation: false,
            betAnimationFinish: false,
            amount: 0,
        }
    },
    
    mounted(){
        noUiSlider.create(this.$refs.slider, {
            range: {
                min: 0,
                max: 100
            },
            connect: 'lower',
            start: [this.points],
            
        })
        this.$refs.slider.noUiSlider.on('update', (values, handle) => {
            this.points = values[handle];
            if (this.points < 2) {
                this.$refs.slider.noUiSlider.set(2);
            } else if (this.points > 98) {
                this.$refs.slider.noUiSlider.set(98);
            }
        });

    },

    methods: {
        setSlider(e) {
            this.$refs.slider.noUiSlider.set(e)
        },

        popup() {
            if(!this.activeTab) {
                this.$store.commit("popup/activate", 3)
            }
        },

        bet() {
            if (this.amount <= 0) {
                this.balanceError = true

                setTimeout(() => {
                    this.balanceError = false
                }, 2000);
            }
            else if(this.balance[0] < this.amount) {
                this.balanceError = true

                setTimeout(() => {
                    this.balanceError = false
                }, 2000);
            }
            else {
                this.animation()
            }
        },

        startAuto() {
            this.$store.commit("tooltip/activate", 'Autobet started')

            setTimeout(() => {
                this.$store.commit("tooltip/deactivate")
            }, 1500);
        },

        stopAuto() {
            this.$store.commit("tooltip/activate", 'Autobet finished')

            setTimeout(() => {
                this.$store.commit("tooltip/deactivate")
            }, 1500);
        },

        animation() {
            this.betAnimation = true
            this.betAnimationFinish = false
            this.betTo = Number(this.points) >= 50 ? 0 : 100
            this.betFrom = Number(this.points)
            this.$nextTick(() => {
                if(this.$refs.number) {
                    this.$refs.number.restart()
                }
            })

            setTimeout(() => {
                clearInterval(interval)
                clearTimeout(time1)
                clearTimeout(time2)
                clearTimeout(time3)
                this.betTo = this.betFrom = null
                this.betTo = 20.34
                this.betFrom = Number(this.$refs.number.$el.innerText)
                this.$nextTick(() => {
                if(this.$refs.number) {
                    this.$refs.number.restart()
                }
                setTimeout(() => {
                    this.betAnimationFinish = true
                    // this.betTo = this.betFrom = null
                    // this.betAnimation = false
                }, 2000);
            })
            }, 1250);
            let time1, time2, time3 
            time1 = setTimeout(() => {
                this.betTo = this.betFrom = null
                if(Number(this.points) >= 50) {
                    this.animationTo100()
                }
                else {
                    this.animationFrom100()
                }
                time2 = setTimeout(() => {
                    if(Number(this.points) >= 50) {
                        this.animationFrom100()
                    }
                    else {
                        this.animationTo100()
                    }
                }, 2000);
            }, 2000);

            let interval = setInterval(() => {
                this.betTo = this.betFrom = null
                if(Number(this.points) >= 50) {
                    this.animationFrom100()
                }
                else {
                    this.animationTo100()
                }
                time3 = setTimeout(() => {
                    if(Number(this.points) >= 50) {
                        this.animationTo100()
                    }
                    else {
                        this.animationFrom100()
                    }
                }, 2000);
            }, 4000);
        },

        animationTo100() {
            this.betTo = 100
            this.betFrom = 0
            this.$nextTick(() => {
                if(this.$refs.number) {
                    this.$refs.number.restart()
                }
            })
        },

        animationFrom100() {
            this.betTo = 0
            this.betFrom = 100
            this.$nextTick(() => {
                if(this.$refs.number) {
                    this.$refs.number.restart()
                }
            })
        },

        theFormat(number) {
            return number.toFixed(2);
        },

        setChance(val) {
            this.winChance = !this.roll ? val + '%' : (100 - Number(val)).toFixed(2) + '%'
            this.betTo = this.betFrom = null
            this.betAnimation = false
        }
    },

    watch: {
        returnInfo(val) {
            if(val !== null) {
                this.activeTab = val
            }

        },

        points(val) {
            this.setChance(val)
        },
    }
}

</script>

<style lang="scss" scoped>
@keyframes pulse {
    0% {
        opacity: 0.5;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0.5;
    }
}

@keyframes tilt-n-move-shaking {
  0% { transform: translate(-54%,-45%) rotate(0deg); }
  25% { transform: translate(-55%,-46%) rotate(2deg); }
  50% { transform: translate(-54%,-45%) rotate(0deg); }
  75% { transform: translate(-53%,-46%) rotate(-2deg); }
  100% { transform: translate(-54%,-45%) rotate(0deg); }
}

.dice {

    &__main, &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        position: relative;
        padding: mobile-vw(16);
        background: #1D262F;
        border-radius: mobile-vw(4);
        margin: mobile-vw(12) 0;
    }

    &__wrapper {
        flex-direction: row;
        gap: mobile-vw(8);
    }

    &__cube {
        position: relative;
        margin-bottom: mobile-vw(12);

        &::before {
            content: '';
            position: absolute;
            top: 46%;
            left: 50%;
            z-index: 0;
            width: 60%;
            height: 60%;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 20px 10px #9B9B9B;
            visibility: hidden;
            opacity: 0;
            transition: .5s ease;
        }

        &_animation {
            &::before {
                visibility: visible;
                opacity: 1;
                transition: .5s ease;
            }
        }
    }

    img {
        width: mobile-vw(94);
        height: mobile-vw(94);
        object-fit: cover;
        margin: 0 auto;
        position: relative;
        z-index: 1;
    }

    &__points {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-54%,-45%);
        font-size: mobile-vw(14);
        color: #11152C;
        font-weight: 900;
        line-height: mobile-vw(16.7);
        transition: .5s ease;

        &_animated {
            animation: tilt-n-move-shaking .3s linear infinite;
            transition: .5s ease;
        }

        &_finished-animation {
            transition: .5s ease;
            animation: pulse 1.5s linear infinite;
        }
    }

    &__marks {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 mobile-vw(16);
        margin-bottom: mobile-vw(5);
    }

    &__slider {
        width: 100%;
        padding: mobile-vw(18) mobile-vw(14);
        background: #151E27;
        border-radius: mobile-vw(34);
    }

    &__button {
        width: 100%;

        &_border {
            margin-top: mobile-vw(8);
        }
    }

    &__error {
        position: fixed;
        bottom: mobile-vw(99);
        left: 0;
        width: 100%;
        background: #1D262F;
        border: mobile-vw(1) solid #2A333C;
        border-bottom: none;
        border-radius: mobile-vw(20) mobile-vw(20) 0 0;
        padding: mobile-vw(16);
        text-align: center;
        font-size: mobile-vw(20);
        font-weight: 500;
        color: #D6354D;
        box-shadow: 0px -4px 16px 0px #00000069;
        visibility: hidden;
        opacity: 0;
        transition: .35s ease;

        &_active {
            visibility: visible;
            opacity: 1;
            transition: .35s ease;
        }
    }

    .roll {
        width: 44%;
    }

    .win {
        width: 56%;
    }

    .bet {
        width: 100%;
        margin-bottom: mobile-vw(8);
    }
}

.mark {
    width: mobile-vw(26);
    font-size: mobil-vw(20);
    font-weight: 900;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: mobile-vw(3);
        height: mobile-vw(6);
        background: #757990;
    }

    &:first-child {
        width: mobile-vw(21);

        &::before {
            left: 24%;
        }
    }
    &:nth-child(2) {
        width: mobile-vw(34);
        &::before {
            left: 27%;
        }
    }
    &:nth-child(3) {
        width: mobile-vw(35);
        &::before {
            left: 28%;
        }
    }
    &:nth-child(4) {
        width: mobile-vw(17);
    }

    &:last-child {
        &::before {
            left: 56%;
        }
    }
}

.slider {
    width: 100%;
    border: unset;
    box-shadow: unset;
    border-radius: mobile-vw(9);
    height: mobile-vw(10);

    &::v-deep() {
        .noUi-connects {
            background: #44A02C;
            border-radius: mobile-vw(9);
        }

        .noUi-connect {
            background: #EA6276;
        }

        .noUi-handle {
            width: mobile-vw(23);
            height: mobile-vw(23);
            border-radius: 50%;
            box-shadow: 0 0 5px 1px #fff;
            right: mobile-vw(-10);

            &::before, &::after {
                display: none;
            }
        }
    }
}
</style>