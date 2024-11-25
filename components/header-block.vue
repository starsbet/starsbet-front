<template lang="pug">
.header-block
    nuxt-link.header-block__logo(
        to="/"
    )
        include ../assets/svg/logo.svg
    .header-block__wrapper
        .balance 
            .balance__text(
                @click="dropdown = !dropdown"
            ) {{ balance[currency ? 0 : 1] }}
            .balance__star(v-if="currency")
                include ../assets/svg/star.svg
            .balance__star(v-else)
                include ../assets/svg/fstar.svg
            .balance__arrow(
                :class="{'balance__arrow_active' : dropdown}"
                @click="dropdown = !dropdown"
            )
                include ../assets/svg/arrow.svg
            nuxt-link.balance__wallet(
                to="/wallet"
            )
                include ../assets/svg/wallet.svg
            slide-up-down.balance__item-list(
                :active="dropdown"
                :duration="500"
            )
                .balance.balance_dropdown 
                    .balance__item
                        .balance__text(
                            @click="dropdown = false, changeCurrency(true)"
                        ) {{ balance[0] }}
                        .balance__star(
                            @click="dropdown = false, changeCurrency(true)"
                        )
                            include ../assets/svg/star.svg
                    .balance__item
                        .balance__text(
                            @click="dropdown = false, changeCurrency(false)"
                        ) {{ balance[1] }}
                        .balance__star(
                            @click="dropdown = false, changeCurrency(false)"
                        )
                            include ../assets/svg/fstar.svg
        nuxt-link.profile(
            to="/profile"
        )
            include ../assets/svg/profile.svg
</template>

<script>
import SlideUpDown from "vue-slide-up-down";

import { mapGetters } from "vuex";

export default {
    components: {
        SlideUpDown,
    },

    computed: {
		...mapGetters({
			currency: "userData/currency",
			balance: "userData/balance",
		})
	},

    data() {
        return {
            dropdown: false
        }
    },

    methods: {
        changeCurrency(val) {
            this.$store.commit("userData/setUserData", {
				currency: val
			})
        }
    }
}

</script>

<style lang="scss" scoped>
.header-block {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #1D262F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: mobile-vw(12) mobile-vw(16);
    z-index: 2;

    &__logo {
        svg {
            width: mobile-vw(120);
            height: mobile-vw(40);
        }
    }

    &__wrapper {
        display: flex;
        align-items: center;
    }
}

.balance {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #151E27;
    border: mobile-vw(1) solid #2A333C;
    border-radius: mobile-vw(6);
    padding-left: mobile-vw(8);
    cursor: pointer;

    &_dropdown {
        flex-wrap: wrap;
        width: 80%;
        padding: mobile-vw(4)  mobile-vw(6);
    }

    &__item {
        display: flex;
    }

    &__text {
        max-width: mobile-vw(90);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: mobile-vw(14);
    }

    &__star {
        margin-left: mobile-vw(4);
        svg {
            width: mobile-vw(9);
            height: mobile-vw(10);
        }
    }

    &__arrow {
        margin-left: mobile-vw(8);
        margin-right: mobile-vw(6);

        svg {
            width: mobile-vw(5);
            height: mobile-vw(11);
            transition: .5s ease;
        }

        &_active {
            svg {
                rotate: 180deg;
                transition: .5s ease;
            }
        }
    }

    &__wallet {
        width: mobile-vw(32);
        height: mobile-vw(32);

        svg {
            width: 100%;
            height: 100%;
        }
    }

    &__item-list {
        position: absolute;
        top: 110%;
        left: 0;
    }
}

.profile {
    padding: mobile-vw(4);
    background: #151E27;
    border: mobile-vw(1) solid #2A333C;
    border-radius: mobile-vw(6);
    margin-left: mobile-vw(9);
    width: mobile-vw(32.5);
    height: mobile-vw(32.5);

    svg {
        width: 100%;
        height: 100%;
    }
}
</style>