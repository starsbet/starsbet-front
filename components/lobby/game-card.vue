<template lang="pug">
nuxt-link.card(
    v-if="content?.title"
    :to="content?.link || ''"
)
    img.card__bg(:src="content?.image" :alt="content?.title")
    .label(
        v-if="content?.label"
    )
        .label__icon.label__icon_hot(v-if="content?.label?.includes('Hot')")
            include ../../assets/svg/hot.svg
        .label__text {{ content?.label }}
    .card__info
        .card__title {{ content?.title }}
        .card__text(v-if="content?.text") {{ content?.text }}
    .card__blur(
        v-if="!content?.active"
    )
        .label {{ $t('lobby.comingSoon') }}
</template>

<script>

export default {
    props: ['content']
}

</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: mobile-vw(6) mobile-vw(4);
    width: mobile-vw(103);
    height: mobile-vw(146);
    position: relative;
    border-radius: mobile-vw(2.5);
    overflow: hidden;
    text-decoration: none;

    &__bg {
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__info {
        z-index: 1;
        color: #fff;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        margin-top: auto;
    }

    &__title {
        font-weight: 900;
        letter-spacing: mobile-vw(0.8);
        font-size: mobile-vw(12);
    }

    &__text {
        font-weight: 300;
        font-size: mobile-vw(9);
        letter-spacing: mobile-vw(0.5);
    }

    &__blur {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(1px);
    }
}

.label {
    display: flex;
    align-items: center;
    gap: mobile-vw(2.4);
    padding: mobile-vw(3.5) mobile-vw(9);
    font-size: mobile-vw(9);
    background: #151E27;
    color: #fff;
    width: max-content;
    border-radius: mobile-vw(15);
    z-index: 1;

    &__icon {
        width: mobile-vw(9);
        height: mobile-vw(9);
    }
}
</style>