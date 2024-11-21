<template lang="pug">
.wallet
    .title.title_small {{ $t('wallet.title') }}
    .wallet__wrapper
        .wallet__balance
            | {{ balance[0] }}
            include ../assets/svg/star.svg
        nuxt-link.default-button.wallet__button(to="/deposit/amount") {{ $t('wallet.depo') }}
        nuxt-link.default-button.default-button_border.wallet__button(to="/withdraw") {{ $t('wallet.withdraw') }}
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'wallet',

    computed: {
		...mapGetters({
			balance: "userData/balance",
		})
	},
}

</script>

<style lang="scss" scoped>
.wallet {

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: mobile-vw(8);
        padding: mobile-vw(16);
        background: #1D262F;
        border-radius: mobile-vw(4);
        margin-top: mobile-vw(12);
    }

    &__balance {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: mobile-vw(16);
        font-size: mobile-vw(30);
        font-weight: 700;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: mobile-vw(2);

        svg {
            min-width: mobile-vw(20);
            width: mobile-vw(20);
            height: mobile-vw(20);
        }
    }

    &__button {
        width: 100%;
    }
}
</style>