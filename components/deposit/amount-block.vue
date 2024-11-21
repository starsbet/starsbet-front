<template lang="pug">
.amount
    .title.amount__title {{ $t('depo.amountTitle') }}
    .amount__input(
        :class="{'amount__input_invalid' : !valid}"
    )
        input(
            ref="input"
            v-model="amount"
            type="text"
            :placeholder="'$0'"
            @input="amount = (`$${$event.target.value.replace(/[^0-9]/g, '')}`), valid = true"
        )
    .amount__wrapper
        .amount__item(
            v-for="item in itemsList"
            :key="item"
            @click="amount = `$${item}`, valid = true"
        ) {{ `$${item}` }}
    .default-button.amount__button(@click="next('stars')") 
        span 
            include ../../assets/svg/starBlack.svg
        | {{ $t('depo.amountStars') }}
    .default-button.amount__button(@click="next('crypto')") 
        span 
            include ../../assets/svg/crypto.svg
        | {{ $t('depo.amountCrypto') }}
    .default-button.amount__button(@click="next('bank')") 
        span 
            include ../../assets/svg/card.svg
        | {{ $t('depo.amountBank') }}
</template>

<script>

export default {
    name: 'amountBlock',

    data() {
        return {
            amount: '',
            itemsList: [5, 10, 20, 50, 100, 500],
            valid: true,
        }
    },
    methods: {
        next(link) {
            if(this.amount.substr(1, this.amount.length).length) {
                this.$store.commit("depoData/setData", {
                    amount: this.amount.substr(1, this.amount.length),
                    type: link
                })
                this.$router.push(`/deposit/${link}`)
            }
            else {
                this.valid = false

                this.$store.commit("tooltip/activate", this.$t('depo.amountError'))

                setTimeout(() => {
                    this.$store.commit("tooltip/deactivate")
                }, 1500);
            }
        }
    }
}

</script>

<style lang="scss" scoped>
.amount {
    text-align: center;

    &__title {
        font-size: mobile-vw(14);
    }

    &__input {
        position: relative;
        width: 45%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background: #1D262F;
        border: mobile-vw(1) solid #2A333C;
        border-radius: mobile-vw(4);
        padding: mobile-vw(8);
        transition: .5s ease;
        font-size: mobile-vw(32);
        font-weight: 700;
        margin: mobile-vw(24) auto;
        transition: .5s ease;

        &_invalid {
            border: mobile-vw(1) solid #D6354D;
            transition: .5s ease;
        }

        input {
            width: 100%;
            text-align: center;
            background: unset;
            border: unset;
            outline: none;
            font-family: "SF Compact Display";
            color: #fff;
            font-size: mobile-vw(32);
            font-weight: 700;

            &::placeholder {
                color: #fff;
            }
        }
    }

    &__wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: mobile-vw(12);
        margin-bottom: mobile-vw(24);
    }

    &__item {
        width: calc(33% - mobile-vw(7));
        padding: mobile-vw(11) 0;
        text-align: center;
        background: #1D262F;
        border: mobile-vw(1) solid #2A333C;
        border-radius: mobile-vw(4);
        font-size: mobile-vw(14);
        font-weight: 500;
    }

    &__button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: mobile-vw(8);
        margin-bottom: mobile-vw(12);

        span {
            width: mobile-vw(21);
            min-width: mobile-vw(21);
            height: mobile-vw(21);
        }

        svg {
            width: 100%;
            height: 100%;
        }
    }
}
</style>