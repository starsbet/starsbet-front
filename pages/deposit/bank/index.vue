<template lang="pug">
.bank
    input-block.bank__input(
        :text="$t('depo.bankInput1')"
        :type="'text'"
        :content="'$' + amount"
        :disable="true"
    )
    input-block.bank__input(
        :text="$t('depo.bankInput2')"
        :type="'text'"
        :content="'Mastercard'"
    )
    .default-button.amount__button(@click="next('details')") {{ $t('depo.detailsButton') }} 
</template>

<script>
import { mapGetters } from "vuex";

import inputBlock from "~/components/input-block.vue";

export default {
    name: 'bank',

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
            bank: null,
        }
    },

    methods: {
        next(link) {
            if(this.amount) {
                this.$store.commit("depoData/setData", {
                    bank: this.bank,
                })
                this.$router.push(`/deposit/bank/${link}`)
            }
            else {
            }
        }
    }
}

</script>

<style lang="scss" scoped>
.bank {
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