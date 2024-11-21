<template lang="pug">
.popup
	.title {{ $t('popups.attentionTitle') }}
	.popup__text(v-html="$t('popups.attentionText')") 
	input-block.popup__input(
		:text="false"
	)
	.default-button.popup__button(@click="withdraw()") {{ $t('popups.attentionButton') }}
</template>

<script>
import inputBlock from "~/components/input-block.vue";

export default {
	props: ['valid'],

	components: {
		inputBlock
	},

	data() {
		return {
			read: false,
			agree: false,
		}
	},

	methods: {
		withdraw() {
			this.$store.commit("popup/deactivate")

			this.$store.commit("tooltip/activate", this.$t('popups.attentionSuccess'))

            setTimeout(() => {
                this.$store.commit("tooltip/deactivate")
            }, 2000);
		},
	}
}

</script>

<style lang="scss" scoped>
.popup {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: mobile-vw(0) mobile-vw(20);

	&__text {
		color: #9B9B9B;
		font-size: mobile-vw(14);
		line-height: mobile-vw(16.7);
		margin-top: mobile-vw(9);
		margin-bottom: mobile-vw(19);
		text-align: center;
		width: 80%;

		&::v-deep() {
			a {
				color: #FECD0C;
			}
		}
	}

	&__input {
		width: 100%;
	}

	&__button {
		width: 100%;
		margin-top: mobile-vw(8);
	}
}

</style>