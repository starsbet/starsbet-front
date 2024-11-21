<template lang="pug">
.details
    .title.details__title {{ $t('depo.detailsTitle') }}
    .details__text {{ $t('depo.detailsText') }}
    input-block.details__input(
        :text="$t('depo.detailsOwner')"
        :type="'text'"
        :placeholder="'Ivan Ivanov'"
        :content="cardOwner"
        :valid="valid"
        @input="cardOwner = $event, valid = true"
    )
    .default-button.details__button(@click="next()") {{ $t('depo.detailsButton') }} 
</template>

<script>
import { mapGetters } from "vuex";

import inputBlock from "~/components/input-block.vue";

export default {
    name: 'details',

    components: {
        inputBlock
    },

    computed: {
		...mapGetters({
			amount: "depoData/amount",
		})
	},

    data() {
        return {    
            cardOwner: 'Ivan Ivanov',
            valid: true,
        }
    },

    methods: {
        next() {
            if(this.cardOwner.lemgth > 0) {
                this.$store.commit("depoData/setData", {
                    cardOwner: this.cardOwner,
                })
            }
            else {
                this.valid = false

                this.$store.commit("tooltip/activate", this.$t('depo.detailsError'))

                setTimeout(() => {
                    this.$store.commit("tooltip/deactivate")
                }, 1500);
            }
        }
    }
}

</script>

<style lang="scss" scoped>
.details {
    &__title {
        font-size: mobile-vw(14);
        margin-bottom: mobile-vw(15);
    }

    &__text {
        font-size: mobile-vw(12);
        color: #9B9B9B;
        margin-bottom: mobile-vw(18);
    }

    &__input {
        margin-bottom: mobile-vw(21);

        &::v-deep() {
            .input-block__area {
                background: #1D262F;
            }
        }
    }
}

</style>