<template lang="pug">
.popup
	.title {{ $t('popups.attentionTitle') }}
	.popup__text(v-html="$t('popups.diceAttentionText')") 
	.popup__buttons
		.default-button.default-button_border.popup__button(@click="back()") {{ $t('popups.diceAttentionBack') }}
		.default-button.popup__button(@click="ok()") OK
</template>

<script>
export default {
	props: ['valid'],
	data() {
		return {
			read: false,
			agree: false,
		}
	},
	methods: {
		ok() {
			this.$store.commit("popup/deactivate", 1)
		},
		back() {
			this.$store.commit("popup/deactivate", 0)
		},
	}
}

</script>

<style lang="scss" scoped>
.popup {
	display: flex;
	flex-direction: column;
	align-items: center;

	&__text {
		color: #9B9B9B;
		font-size: mobile-vw(14);
		line-height: mobile-vw(16.7);
		margin-top: mobile-vw(9);
		margin-bottom: mobile-vw(19);

		&::v-deep() {
			a {
				color: #FECD0C;
			}
		}
	}

	&__buttons {
		display: flex;
		justify-content: center;
		gap: mobile-vw(8);
		width: 100%;
	}

	&__button {
		width: 42%;
	}
}

</style>