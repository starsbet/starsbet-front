<template lang="pug">
.input-block(
    :class="{'input-block_disable' : disable, 'input-block_invalid' : valid === false}"
)
    .input-block__title(v-if="text") {{ text }}
    .input-block__area(
        :class="{'input-block__area_small-padding' : button}"
    )
        input(
            v-model="input"
			:type="type ? type : 'number'"
			@input="$emit('input', input)"
        )
        span(
            v-if="text && text?.includes('Roll')"
            :class="{'rotate' : !roll}"
            @click="roll = !roll, $emit('roll', roll)"
        )
            include ../assets/svg/longArrow.svg
        span(v-if="text && (text?.includes('Win chance') || text?.includes('On '))")
            include ../assets/svg/percent.svg
        .input-block__button(
            v-if="button"
            :class="{ 'input-block__button_orange' : button?.includes('Edit')}"
            @click="$emit('button', input)"
        ) {{ button }}
</template>

<script>

export default {
    name: 'inputBlock',
    props: ['text', 'disable', 'button', 'content', 'type', 'valid'],

    data() {
        return {
            input: '',
            roll: true
        }
    },

    created() {
        this.input = this.content ? this.content : 0 
    }
}

</script>

<style lang="scss" scoped>
.input-block {

    &_disable {
        input {
            pointer-events: none;
        }
    }

    &_invalid {
        .input-block__title {
            color: #D6354D;
            transition: .5s ease;
        }

        .input-block__area {
            border-color: #D6354D;
            transition: .5s ease;
        }
    }

    &__title {
        color: #9B9B9B;
        font-size: mobile-vw(12);
        font-weight: 500;
        margin-bottom: mobile-vw(4);
        transition: .5s ease;
    }

    &__area {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #151E27;
        border: mobile-vw(1) solid #2A333C;
        border-radius: mobile-vw(2);
        padding: mobile-vw(11) mobile-vw(8);
        transition: .5s ease;

        &_small-padding {
            padding: mobile-vw(4);
            padding-left: mobile-vw(8);
        }

        input {
            outline: none;
            background: transparent;
            border: none;
            font-family: "SF Compact Display";
            font-size: mobile-vw(14);
            color: #fff;
            font-weight: 500;
            line-height: mobile-vw(16);
            width: 100%;

            &::placeholder {
                color: #fff;
            }
        }

        span {
            min-width: mobile-vw(14);
            height: mobile-vw(14);
        }

        .rotate {
            rotate: 180deg;
        }

        svg {
            width: 100%;
            height: 100%;
        }
    }

    &__button {
        color: #fff;
        font-size: mobile-vw(12);
        font-weight: 400;
        padding: mobile-vw(8) mobile-vw(19);
        margin-left: mobile-vw(12);
        border-radius: mobile-vw(2);
        background: #2A333C;

        &_orange {
            background: linear-gradient(103.65deg, #FECD0C 8.31%, #E8AB05 77.26%);
            padding: mobile-vw(8) mobile-vw(24);
            color: #151E27;
        }
    }
}
</style>