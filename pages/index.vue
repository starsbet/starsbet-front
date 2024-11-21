<template lang="pug">
.page
    slider-block
    games-block
</template>

<script>
import sliderBlock from "~/components/lobby/slider-block.vue";
import gamesBlock from "~/components/lobby/games-block.vue";

export default {
    name: 'lobby',
    components: {
        sliderBlock,
        gamesBlock
    }
}

</script>

<style lang="scss" scoped>

</style>