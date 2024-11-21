<template lang="pug">
.page
    dice-game
</template>

<script>
import diceGame from "~/components/games/dice-game.vue";

export default {
    name: 'dice',
    components: {
        diceGame
    }
}

</script>

<style lang="scss" scoped>

</style>