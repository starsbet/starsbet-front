<template lang="pug">
.wrapper(
	:class="{'wrapper_active' : active}"
)
	| {{ message }}
	span(v-if="message?.includes('started')")
		include ../../assets/svg/started.svg
	span(v-if="message?.includes('finished')")
		include ../../assets/svg/finished.svg
	span(v-if="message?.includes('successfully submitted')")
		include ../../assets/svg/done.svg


</template>

<script>
import { mapGetters } from "vuex";

export default {

	computed: {
		...mapGetters({
			active: "tooltip/active",
			message: "tooltip/message",
		})
	},

	methods: {
		
	}
}

</script>

<style lang="scss" scoped>
.wrapper {
	position: absolute;
	top: mobile-vw(62);
	left: mobile-vw(14);
	z-index: 3;
	display: flex;
	align-items: center;
	gap: mobile-vw(4);
	visibility: hidden;
	opacity: 0;
	transition: .35s ease;
	pointer-events: none;
	padding: mobile-vw(16) mobile-vw(26);
	background: #151E27;
	border: mobile-vw(1) solid #2A333C;
	border-radius: mobile-vw(2);
	font-weight: 700;
	font-size: mobile-vw(13);
	text-transform: uppercase;
	box-shadow: 0px 4px 16px 0px #00000069;
	max-width: mobile-vw(264);

	&_active {
		pointer-events: unset;
		visibility: visible;
		opacity: 1;
		transition: .35s ease;
	}

	span {
		min-width: mobile-vw(18);
		min-height: mobile-vw(18);
		height: mobile-vw(18);

		svg {
			width: 100%;
			height: 100%;
		}
	}

}
</style>