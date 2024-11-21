<template lang="pug">
.leaders
	.title.title_small {{ $t('leaderboard.title') }}
	.tabs.leaders__tabs
		.tabs__item(
			@click="activeTab = 0"
		) {{ $t('leaderboard.daily') }}
		.tabs__item(
			@click="activeTab = 1"
		) {{ $t('leaderboard.weekly') }}
		.tabs__item(
			@click="activeTab = 2"
		) {{ $t('leaderboard.monthly') }}
		.tabs__selector.tabs__selector_three(
			:class="[`tabs__selector_three-${activeTab}`]"
		)
	.leaders__wrapper
		.leaders__header
			.title.title_small.leaders__title TOP 100
			.leaders__mark {{ $t('leaderboard.wager') }}
		.scroller(
			ref="wrapper"
		)
			leader-item.leader__button(
				ref="items"
				v-for="(item, index) in itemsList"
				:key="index"
				:content="item"
				:place="index + 1"
				:currency="currency"
			)
		.user(
			v-if="userInfo"
			:class="{'user_active' : userShow}"
		)
			leader-item.user__item(
				key="index"
				:content="userInfo"
				:place="14"
				:currency="currency"
			)
		.loader(
			:class="{'loader_active' : loaderActive}"
		)
			include ../../assets/svg/loader.svg
	
</template>

<script>
import leaderItem from "~/components/leaders/leader-item.vue";

import { mapGetters } from "vuex";

export default {

	components: {
		leaderItem
	},

	computed: {
		...mapGetters({
            currency: "userData/currency",
		}),
    },

	data() {
		return {
			activeTab: 0,
			itemsList: [
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
				{
					name: "Username 1",
					wager: 1200
				},
			],
			userInfo: {
				name: "Username 1",
				wager: 1200,
				place: 14,
			},
			userShow: false,
			loaderActive: false,
		}
	},

	mounted() {
		this.$refs.wrapper.addEventListener("scroll", () => {
			this.checkPlace()
		})
		let scrollerHeight = this.$refs.wrapper.offsetHeight
		let scrollerY = this.$refs.wrapper.getBoundingClientRect().y

		let itemTop = this.$refs.items[Number(this.userInfo?.place)]?.$el?.getBoundingClientRect().top
		if(((itemTop >= scrollerY - this.$refs.items[6]?.$el?.offsetHeight) && itemTop <= scrollerHeight + scrollerY) || (this.$refs.wrapper.scrollHeight <= (this.$refs.wrapper.scrollTop + this.$refs.wrapper.clientHeight))) {
			this.userShow = false
		}
		else {
			this.userShow = true
		}
	},

	methods: {
		checkPlace() {
			if(Number(this.userInfo?.place) ) {
				let scrollerHeight = this.$refs.wrapper.offsetHeight
				let scrollerY = this.$refs.wrapper.getBoundingClientRect().y

				let itemTop = this.$refs.items[Number(this.userInfo?.place)]?.$el?.getBoundingClientRect().top
				if(((itemTop >= scrollerY - this.$refs.items[6]?.$el?.offsetHeight) && itemTop <= scrollerHeight + scrollerY) || (this.$refs.wrapper.scrollHeight <= (this.$refs.wrapper.scrollTop + this.$refs.wrapper.clientHeight))) {
					this.userShow = false
				}
				else {
					this.userShow = true
				}
			}
		},
	}

}

</script>

<style lang="scss" scoped>
.leaders {
	&__tabs {
		margin: mobile-vw(14) 0;
	}

	&__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding-bottom: mobile-vw(16);
	}

	&__mark {
		font-size: mobile-vw(10);
		padding: mobile-vw(4) mobile-vw(4);
		background: #151E27;
		border: mobile-vw(1) solid #2A333C;
		border-radius: mobile-vw(4);
	}

	&__wrapper {
		display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
		height: calc(100vh - mobile-vw(310));
        position: relative;
        padding: mobile-vw(8) mobile-vw(16);
        background: #1D262F;
        border-radius: mobile-vw(4);
	}
}

.scroller {
	width: 100%;
	position: relative;
	height: 100%;
	overflow: scroll;
	display: flex;
	flex-direction: column;
	gap: mobile-vw(8);
}

.user {
	position: absolute;
	bottom: mobile-vw(16);
	left: 0;
	width: 100%;
	padding: 0 mobile-vw(16);
	z-index: 0;
	opacity: 0;
	visibility: hidden;	
	transition: .35s ease;

	&_active {
		opacity: 1;
		visibility: visible;
		transition: .35s ease;
	}

	&__item {
		padding: mobile-vw(14) 0;
		padding-right: mobile-vw(8);
		border: mobile-vw(1) solid #2A333C;
		background: #171F27;
		border-radius: mobile-wv(2);
		box-shadow: 0px 4px 4px 0px #00060F3D;

	}
}
.loader {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    background: rgba($color: #151E27, $alpha: .6);
    backdrop-filter: blur(2px);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    opacity: 0;
    transition: .35s ease;
    
    &_active {
        visibility: visible;
        opacity: 1;
    }

    &__text {
        text-align: center;
        font-size: mobile-vw(18);
        margin-bottom: mobile-vw(20);
    }

    svg {
        margin: unset !important;
    }
}
</style>