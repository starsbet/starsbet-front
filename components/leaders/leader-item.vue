<template lang="pug">
.item
    .item__place
        img.item__icon(
            v-if="place <= 3"
            :src="require(`~/assets/svg/${place}place.svg`)"
        )
        span(v-else) {{ place }}
    .item__name {{ content?.name }}
    .item__wager 
        | {{ content?.wager }}
        span(v-if="currency")
            include ../../assets/svg/star.svg
        span.bigIcon(v-else)
            include ../../assets/svg/fstar.svg
</template>

<script>
import leaderItem from "~/components/leaders/leader-item.vue";

export default {
    props: ['content', 'place', 'currency'],

    components: {
        leaderItem
    },

    data() {
        return {
            activeTab: 0
        }
    },

    methods: {
    }

}

</script>

<style lang="scss" scoped>
.item {
    width: 100%;
    padding-bottom: mobile-vw(12);
    padding-right: mobile-vw(8);
    // margin-bottom: mobile-vw(8);
    display: flex;
    align-items: center;
    border-bottom: mobile-vw(1) solid #2A333C;

    &__place {
        display: flex;
        align-items: center;
        justify-content: center;
        // width: mobile-vw(38);
        min-width: mobile-vw(38);

        img {
            min-width: mobile-vw(18);
            height: mobile-vw(18);
        }

        span {
            color: #FFC200;
            position: relative;
            font-size: mobile-vw(10);
            font-weight: 700;

            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 0;
                width: mobile-vw(14);
                height: mobile-vw(14);
                background: rgba($color: #fff, $alpha: .22);
                border-radius: 50%;
            }
        }
    }

    &__name {
        font-size: mobile-vw(14);
        font-weight: 500;
        color: #9B9B9B;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-right: mobile-vw(12);
    }

    &__wager {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: mobile-vw(4);
        font-size: mobile-vw(14);
        font-weight: 500;

        span {
            min-width: mobile-vw(8);
            min-height: mobile-vw(8);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .bigIcon {
            min-width: mobile-vw(12);
            width: mobile-vw(12);
            min-height: mobile-vw(12);
            height: mobile-vw(12);
        }

        svg {
            width: 100%;
            height: 100%;
        }

    }
}

</style>