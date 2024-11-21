<template lang="pug">
.terms
    .title.terms__title Terms & Conditions
    .terms__text(v-html="text")
</template>

<script>

export default {
    name: 'terms',
    data() {
        return {
            text: '<p>Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus inceptos scelerisque cras sollicitudin nullam.</p><p>Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus inceptos scelerisque <a href="/" target="_blank">cras</a> sollicitudin nullam.</p>'
        }
    },
}

</script>

<style lang="scss" scoped>
.terms {
    &__title {
        font-size: mobile-vw(14);
        margin-bottom: mobile-vw(15);
    }

    &__text {
        font-size: mobile-vw(14);

        &::v-deep() {
            p {
                margin-bottom: mobile-vw(24);
            }

            a {
                color: #fff;
                font-weight: 500;
            }
        }
    }
}

</style>