<template lang="pug">
.crypto
    .title.crypto__title {{ $t('depo.crypto') }}
    .crypto__item(
        v-for="item in currencies"
        :key="item.ticker"
        @click="selectCurrency(item.ticker)"
    )
        img.crypto__icon(:src="item?.image")
        .crypto__text
            | {{ item.ticker }}
            .crypto__text.crypto__text_small {{ item.currency }}
</template>

<script>

export default {
    name: 'crypto',
    data() {
        return {
            currencies: [
                {
                    ticker: 'BTC',
                    currency: 'Bitcoin',
                    image: require('~/assets/img/currencies/btc.png')
                },
                // {
                //     ticker: 'BTC',
                //     currency: 'Bitcoin',
                //     image: require('~/assets/img/currencies/btc.png')
                // },
            ]
        }
    },

    methods: {
        selectCurrency(ticker) {
            this.$store.commit("depoData/setData", {
                currency: ticker
            })
        }
    }
}

</script>

<style lang="scss" scoped>
.crypto {
    &__title {
        font-size: mobile-vw(14);
        margin-bottom: mobile-vw(15);
    }

    &__item {
        display: flex;
        align-items: center;
        gap: mobile-vw(12);
        background: #1D262F;
        border-radius: mobile-vw(4);
        padding: mobile-vw(11) mobile-vw(14);
        margin-bottom: mobile-vw(12);
    }

    &__icon {
        width: mobile-vw(32);
        min-width: mobile-vw(32);
        height: mobile-vw(32);
    }

    &__text {
        font-size: mobile-vw(14);

        &_small {
            color: #9B9B9B;
        }
    }
}

</style>