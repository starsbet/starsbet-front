<template lang="pug">
.loader(
    :class="{'loader_active' : loaderActive}"
)
    .loader__text(
        v-if="info?.text"
    ) {{ info.text }}
    include ../assets/svg/loader.svg
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
		...mapGetters({
            loaderActive: "loader/active",
            info: "loader/info"
		})
	},
}

</script>

<style lang="scss" scoped>
.loader {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    background: rgba($color: #151E27, $alpha: .6);
    backdrop-filter: blur(2px);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    opacity: 0;
    transition: .35s ease;
    
    &_active {
        visibility: visible;
        opacity: 1;
    }

    &__text {
        text-align: center;
        font-size: mobile-vw(18);
        margin-bottom: mobile-vw(20);
    }

    svg {
        margin: unset !important;
    }
}
</style>