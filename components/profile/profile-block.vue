<template lang="pug">
.profile
    .title.title_small {{ $t('profile.title') }}
    .profile__wrapper
        input-block.profile__input(
            :text="$t('profile.username')"
            :content="'StarsBet'"
            :button="$t('profile.usernameButton')"
            :type="'text'"
            :valid="nameValid"
            @input="nameValid = true"
            @button="editUsername($event)"
        )

        input-block.profile__input(
            :text="$t('profile.registrationDate')"
            :content="'28.09.2024'"
            :type="'text'"
            :disable="true"
        )
    .profile__wrapper.profile__wrapper_flex
        input-block.profile__input.profile__input_half-width(
            :text="$t('profile.count')"
            :disable="true"
        )

        input-block.profile__input.profile__input_half-width(
            :text="$t('profile.wager')"
            :disable="true"
        )
    .profile__wrapper
        .profile__header
            .title.profile__title {{ $t('profile.statistic') }}
            .profile__mark {{ $t('profile.wager') }}
        .profile__item(
            v-for="(item, index) in statisticList"
            :key="index"
        )
            .profile__date {{ item?.date }}
            .profile__sum {{ item?.sum }}
    
</template>

<script>
import inputBlock from "~/components/input-block.vue";

export default {
    name: 'profileBlock',

    components: {
        inputBlock
    },

    data() {
        return {
            statisticList: [
                {
                    date: '22.10.2024',
                    sum: '$12'
                },
                {
                    date: '22.10.2024',
                    sum: '$12'
                },
                {
                    date: '22.10.2024',
                    sum: '$12'
                },
                {
                    date: '22.10.2024',
                    sum: '$12'
                },
                {
                    date: '22.10.2024',
                    sum: '$12'
                },
            ],
            nameValid: true,
        }
    },

    methods: {
        editUsername(name) {
            if(name.length <= 1) {
                this.nameValid = false

                this.$store.commit("tooltip/activate", this.$t('profile.error'))

                setTimeout(() => {
                    this.$store.commit("tooltip/deactivate")
                }, 1500);
            }
        }
    }

}

</script>

<style lang="scss" scoped>
.profile {

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: mobile-vw(8);
        padding: mobile-vw(16);
        background: #1D262F;
        border-radius: mobile-vw(4);
        margin: mobile-vw(12) 0;
        align-items: center;

        &_flex {
            flex-direction: row;
        } 
    }

    &__input {
        width: 100%;

        &_half-width {
            width: 50%;
        }
    }

    &__header, &__item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: mobile-vw(12);
    }

    &__title {
        font-size: mobile-vw(14);
    }

    &__mark {
        padding: mobile-vw(4) mobile-vw(8);
        font-size: mobile-vw(10);
        background: #151E27;
        border: mobile-vw(1) solid #2A333C;
        border-radius: mobile-vw(2);
    }

    &__item {
        margin-bottom: 0;
        padding-bottom: mobile-vw(12);

        &:not(:last-of-type) {
            margin-bottom: mobile-vw(16);
            border-bottom: mobile-vw(1) solid #2A333C;
        }
    }

    &__date {
        font-size: mobile-vw(14);
        font-weight: 500;
        color: #9B9B9B;
    }

    &__sum {
        font-size: mobile-vw(14);
        font-weight: 500;
        color: #1EE100;
    }
}

</style>