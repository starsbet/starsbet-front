<template lang="pug">
.affilate
    .title.title_small {{ $t("affilate.title") }}
    .affilate__wrapper
        input-block.affilate__input(
            :text="$t('affilate.title')"
            :content="'https://www.starsbet/sharer/'"
            :disable="true"
            :button="$t('affilate.copy')"
            :type="'text'"
            @button="copy('https://www.starsbet/sharer/')"
        )
    .affilate__wrapper
        input-block.affilate__input(
            :text="$t('affilate.registered')"
            :disable="true"
        )
        input-block.affilate__input(
            :text="$t('affilate.firstTimeDep')"
            :disable="true"
        )
        input-block.affilate__input(
            :text="$t('affilate.wager')"
            :disable="true"
        )
        input-block.affilate__input(
            :text="$t('affilate.commissionE')"
            :disable="true"
        )
        input-block.affilate__input(
            :text="$t('affilate.commissionP')"
            :disable="true"
        )
        input-block.affilate__input(
            :text="$t('affilate.commissionA')"
            :disable="true"
        )
        .default-button.affilate__button(@click="withdrawal()") {{ $t('affilate.withdrawal') }}
</template>

<script>
import inputBlock from "~/components/input-block.vue";

export default {
    name: 'affilateBlock',

    components: {
        inputBlock
    },

    data() {
        return {
        }
    },

    methods: {
        withdrawal() {
            this.$store.commit("popup/activate", 4)
        },

        copy(e) {
            navigator.clipboard.writeText(e);

            this.$store.commit("tooltip/activate", this.$t('affilate.copied'))

            setTimeout(() => {
                this.$store.commit("tooltip/deactivate")
            }, 1500);
        }
    }

}

</script>

<style lang="scss" scoped>
.affilate {

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: mobile-vw(8);
        width: 100%;
        position: relative;
        padding: mobile-vw(16);
        background: #1D262F;
        border-radius: mobile-vw(4);
        margin: mobile-vw(12) 0;
        align-items: center;
    }

    &__input, &__button {
        width: 100%;
    }

}

</style>