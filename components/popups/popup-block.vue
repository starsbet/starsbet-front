<template lang="pug">
.wrapper(
	:class="{'wrapper_active' : active}"
)
	.wrapper__main
		.wrapper__close(
			@click="close()"
		)
			include ../../assets/svg/close.svg
		registration-block(
			v-if="message === 1"
			@accept="valid = $event, close()"
			:valid="valid"
		)
		congratulation-block(
			v-if="message === 2"
			@accept="close()"
		)
		dice-attention-block(
			v-if="message === 3"
		)
		attention-block(
			v-if="message === 4"
		)
</template>

<script>
import { mapGetters } from "vuex";

import registrationBlock from "~/components/popups/registration-popup.vue";
import congratulationBlock from "~/components/popups/congratulation-popup.vue";
import diceAttentionBlock from "~/components/popups/dice-attention-popup.vue";
import attentionBlock from "~/components/popups/attention-popup.vue";

export default {
	components: {
		registrationBlock,
		congratulationBlock,
		diceAttentionBlock,
		attentionBlock
	},

	computed: {
		...mapGetters({
			token: "userData/token",
			initData: "userData/initData",
			active: "popup/active",
			message: "popup/message",
		})
	},
	
	data() {
		return {
			valid: null
		}
	},

	methods: {

		close() {
			if(this.message === 1) {
				if (this.valid) {
					this.$store.commit("popup/deactivate")
					setTimeout(() => {
						this.$store.commit("popup/activate", 2)
					}, 250);
				}
				else {
					this.valid = false
				}
			} 
			else {
				this.$store.commit("popup/deactivate")
			}
		}
	}
}

</script>

<style lang="scss" scoped>
.wrapper {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 3;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba($color: #151E27, $alpha: .72);
	backdrop-filter: blur(1px);
	visibility: hidden;
	opacity: 0;
	transition: .35s ease;
	pointer-events: none;
	padding: mobile-vw(16);

	&_active {
		pointer-events: unset;
		visibility: visible;
		opacity: 1;
		transition: .35s ease;
	}

	&__main {
		width: 100%;
		position: relative;
		background: #1D262F;
		padding: mobile-vw(24);
	}

	&__close {
		position: absolute;
		top: mobile-vw(15);
		right: mobile-vw(15);

		svg {
			width: mobile-vw(15);
			height: mobile-vw(15);
		}
	}
}
</style>