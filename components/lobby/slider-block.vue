<template lang="pug">
.slider
    client-only
        swiper.slider-block(
            :options="swiperOptions"
            @slideChange="onSlideChange"
            ref="slider"
        )
            swiper-slide.slider-block__slide(
                v-for="(card, index) in 4"
                :key="index"
            )
                img(src="~/assets/img/slider_item.png" alt="slide")
    .bar
        .bar__item(
            v-for="(i, index) in 4"
            :key="i"
            :class="{'bar__item_active' : index == activeSlide }"
            @click="scroll(index)"
        )
</template>

<script>
import { Swiper, SwiperSlide, directive,  } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    components: {
        Swiper,
        SwiperSlide
    },

    directives: {
        swiper: directive
    },

    data() {
        return {
            swiperOptions: {
                slidesPerView: 1,
                spaceBetween: 18,
                // effect: 'fade',
                autoplay: {
                    delay: 6000,
                    disableOnInteraction: true
                },
                // autoHeight: true,
                // centeredAuto: true,
                // Some Swiper option/callback...
            },
            activeSlide: 0,
        }
    },

    methods: {
        scroll(val) {
            this.$refs.slider.$swiper.slideTo(val)
            this.activeSlide = this.$refs.slider.$swiper.activeIndex
        },

        onSlideChange () {
            this.activeSlide = this.$refs.slider.$swiper.activeIndex
        },
    }
}

</script>

<style lang="scss" scoped>
img {
    width: 100%;
    height: mobile-vw(200);
    object-fit: cover;
    border-radius: mobile-vw(12);
}

.bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: mobile-vw(12);
    width: 100%;
    margin-top: mobile-vw(12);

    &__item {
        width: mobile-vw(8);
        height: mobile-vw(8);
        border-radius: 50%;
        background: #2A333C;  
        cursor: pointer;
        transition: .5s ease;
        
        &_active {
            background: #FDCB0C;
            transition: .5s ease;
        }
    }
}
</style>