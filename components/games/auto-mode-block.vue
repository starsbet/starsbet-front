<template lang="pug">
.auto-mode
    .auto-mode__wrapper
        input-block.auto-mode__input(
            :text="$t('games.onWin')"
            :button="$t('games.reset')"
            @button=""
        )
        input-block.auto-mode__input(
            :text="$t('games.onLoss')"
            :button="$t('games.reset')"
            @button=""
        )
    .auto-mode__wrapper
        input-block.auto-mode__input(
            :text="$t('games.stopOnProfit')"
        )
        input-block.auto-mode__input(
            :text="$t('games.stopOnLoss')"
        )
</template>

<script>
import inputBlock from "~/components/input-block.vue";

export default {
    components: {
        inputBlock
    },

    data() {
        return {
        }
    },

}

</script>

<style lang="scss" scoped>
.auto-mode {

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

    &__input {
        width: 100%;
    }

}

</style>