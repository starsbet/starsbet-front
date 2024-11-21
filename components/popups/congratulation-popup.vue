<template lang="pug">
.popup
	img.popup__image(src="~/assets/img/congratulation.png")
	.title {{ $t('popups.congratulationsTitle') }}
	.title.title_small 1 000 FUN
	.popup__text(v-html="$t('popups.congratulationsText')") 
	.default-button.popup__button(@click="$emit('accept')") {{ $t('popups.congratulationsButton') }}
</template>

<script>

export default {
}

</script>

<style lang="scss" scoped>
.popup {
	display: flex;
	flex-direction: column;
	align-items: center;

	&__image {
		width: mobile-vw(72);
		height: mobile-vw(72);
		object-fit: cover;
		margin-bottom: mobile-vw(19);
	}

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

	&__button {
		width: mobile-vw(278);
	}
}

</style>