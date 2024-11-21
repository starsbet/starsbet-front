<template lang="pug">
.more
    .title.more__title documents
    nuxt-link.more__item(
        v-for="item in items"
        :key="item.link"
        :to="item.link"
    ) {{ item.text }}
</template>

<script>

export default {
    name: 'more',
    data() {
        return {
            items: [
                {
                    text: 'Terms & Conditions',
                    link: '/terms'
                },
                {
                    text: 'Document',
                    link: '/document'
                },
            ]
        }
    },
}

</script>

<style lang="scss" scoped>
.more {
    &__title {
        font-size: mobile-vw(14);
        margin-bottom: mobile-vw(15);
    }

    &__item {
        display: block;
        background: #1D262F;
        border-radius: mobile-vw(4);
        padding: mobile-vw(18) mobile-vw(14);
        margin-bottom: mobile-vw(12);
        color: #fff;
        text-decoration: none;
    }
}

</style>