<template lang="pug">
.popup
	.title {{ $t('popups.registrationTitle') }}
	.checkbox
		.checkbox__frame(@click="read = !read")
			span(
				:class="{'active' : read}"
			)
			.checkbox__text(v-html="$t('popups.registrationText1')") 
		.checkbox__frame(@click="agree = !agree")
			span(	
				:class="{'active' : agree}"
			)
			.checkbox__text(v-html="$t('popups.registrationText2')") 
	.default-button.popup__button(@click="$emit('accept', read && agree ? true : false)") {{ this.$t('popups.registrationButton') }}
	.popup__logo
		include ../../assets/svg/logo.svg
	.popup__validation(
		v-if="valid === false"
	) {{ this.$t('popups.registrationValidation') }}

</template>

<script>

export default {
	props: ['valid'],
	data() {
		return {
			read: false,
			agree: false,
		}
	}
}

</script>

<style lang="scss" scoped>
.popup {
	display: flex;
	flex-direction: column;
	align-items: center;

	&__button {
		width: mobile-vw(278);
	}

	&__logo {
		margin-top: mobile-vw(19);

		svg {
			width: mobile-vw(110);
			height: mobile-vw(37);
		}
	}

	&__validation {
		font-size: mobile-vw(14);
		color: #D6354D;
		margin-top: mobile-vw(4);
	}
}
.checkbox {
	margin-top: mobile-vw(8);
	margin-bottom: mobile-vw(10);

	&__frame {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: mobile-vw(8);
		margin-bottom: mobile-vw(9);

		span {
			min-width: mobile-vw(16);
			min-height: mobile-vw(16);
			border: mobile-vw(1) solid #9B9B9B;
			border-radius: mobile-vw(2);
			position: relative;
		}

		.active {
			background: linear-gradient(103.65deg, #FECD0C 8.31%, #E8AB05 77.26%);
			border: mobile-vw(1) solid transparent;

			&::before {
				content: '✓';
				position: absolute;
				top: 50%;
				left: 50%;
				color: #1D262F;
				transform: translate(-50%, -53%);
				font-size: mobile-vw(14);
			}
		}
	}

	&__text {
		color: #9B9B9B;
		font-size: mobile-vw(14);
		line-height: mobile-vw(16.7);

		&::v-deep() {
			a {
				color: #FECD0C;
			}
		}
	}
}

</style>