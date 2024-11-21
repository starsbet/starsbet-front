<template lang="pug">
.task(
    :class="{'task_done' : content?.done }"
)
    img.task__img(
        v-if="content?.done"
        :src="content?.imageDone"
    )
    img.task__img(
        :src="content?.image"
        v-else
    )
    .task__title 
        | {{ content?.text }}
        .task__text(
            v-if="content?.done"
        ) {{ $t('tasks.done') }}
    .task__reward {{ content?.reward.toLocaleString() + ' FUN'}}
    img.task__completed(
        v-if="content?.done"
        src="~/assets/img/tasks/completed.png"
    )
    .loading(v-if="content?.loading && !content?.done")
        include ../../assets/svg/loader.svg
</template>

<script>

export default {
    name: 'taskBlock',
    props: ['content']
}

</script>

<style lang="scss" scoped>
.task {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    gap: mobile-vw(7);
    padding: mobile-vw(7);
    background: #1D262F;
    border-radius: mobile-vw(2);
    margin-bottom: mobile-vw(8);

    &__img {
        width: mobile-vw(50);
        height: mobile-vw(40);
        object-fit: cover;
    }

    &__title {
        font-size: mobile-vw(14);
        color: #9B9B9B;
    }

    &__text {
        font-size: mobile-vw(10);
        color: #fff;
        margin-top: mobile-vw(3);
    }

    &__reward {
        font-size: mobile-vw(16);
        font-weight: 700;
        color: #fff;
        margin-left: auto;
    }

    &__completed {
        position: absolute;
        top: mobile-vw(-6);
        right: mobile-vw(-1);
        width: mobile-vw(24);
        height: mobile-vw(24);
        object-fit: cover;
    }
}

.task_done {
    pointer-events: none;
    .task__title, .task__reward {
        color: #5B5B5B;
    }
}

.loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    z-index: 2;
    background: rgba($color: #151E27, $alpha: .6);
    backdrop-filter: blur(1px);
    border-radius: mobile-vw(2);

    svg {
        width: mobile-vw(24);
        margin: unset !important;
    }
}
</style>