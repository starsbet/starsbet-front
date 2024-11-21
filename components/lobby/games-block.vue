<template lang="pug">
.games-block
    .tabs
        .tabs__item(
            @click="activeTab = 0"
        )
            include ../../assets/svg/casino.svg
            | {{ $t('lobby.casino') }}
        .tabs__item(
        )
            include ../../assets/svg/sport.svg
            | {{ $t('lobby.sport') }}
        .tabs__selector(
            :class="{'tabs__selector_2' : activeTab}"
        )
    .cards
        game-card(
            v-for="(game, index) in games"
            :key="index"
            :content="game"
        )
</template>

<script>
import gameCard from "~/components/lobby/game-card.vue";

export default {

    components: {
        gameCard
    },

    data() {
        return {
            activeTab: 0,
            games: [
                {
                    title: 'Dice',
                    text: 'Originals',
                    image: require('~/assets/img/games/dice.png'),
                    link: "/dice",
                    active: true,
                    label: 'Hot'
                },
                {
                    title: 'Plinko',
                    text: 'Originals',
                    image: require('~/assets/img/games/plinko.png'),
                    active: false
                },
                {
                    title: 'Crash',
                    text: 'Originals',
                    image: require('~/assets/img/games/crash.png'),
                    active: false
                },
                {
                    title: 'Mines',
                    text: 'Originals',
                    image: require('~/assets/img/games/mines.png'),
                    active: false
                },
            ]
        }
    },
}

</script>

<style lang="scss" scoped>
.games-block {
    width: 100%;
    margin-top: mobile-vw(25);
}

.cards {
    display: flex;
    flex-wrap: wrap;
    gap: mobile-vw(8);
    width: 100%;
    position: relative;
    padding: mobile-vw(16);
    background: #1D262F;
    border-radius: mobile-vw(4);
    margin: mobile-vw(12) 0;
}
</style>