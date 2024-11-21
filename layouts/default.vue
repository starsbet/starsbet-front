<template lang="pug">
.layout(
	ref="layout"
)
	header-block
	navigation-block
	popup-block
	tooltip-block
	loader
	vue-page-transition.transition(name="fade")
		router-view.viewBox
</template>

<script>

import { mapGetters } from "vuex";
import headerBlock from "~/components/header-block.vue";
import navigationBlock from "~/components/navigation.vue";
import popupBlock from "~/components/popups/popup-block.vue";
import tooltipBlock from "~/components/popups/tooltip-block.vue";
import loader from "~/components/loader.vue";

export default {
	components: {
		headerBlock,
		navigationBlock,
		popupBlock,
		tooltipBlock,
		loader
	},

	computed: {
		...mapGetters({
			token: "userData/token",
			initData: "userData/initData",
		})
	},

	created() {
		// this.$store.commit("loader/activate", {text: this.$t('start.connecting')})
		// this.$store.commit("popup/activate", 1)
	},

	async beforeMount() {
		window.Telegram.WebApp.BackButton.isVisible = true
		window.Telegram.WebApp.expand()
		window.Telegram.WebApp.disableVerticalSwipes()

		
		if(window?.Telegram?.WebApp?.initDataUnsafe?.user?.id) {
			// this.getUserInfo()
		}

		window?.Telegram.WebApp.onEvent('backButtonClicked', (() => {
			this.$router.go(-1)
		}))
	},

	methods: {
		
		async initWallet() {
			
			window.tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
				// manifestUrl: 'https://notmeme-app-front-dev-o5oet.ondigitalocean.app/tonconnect-manifest.json',
				buttonRootId: 'tonConnectUIButton'
			});
			window.tonConnector = new TonConnectSDK.TonConnect({
				// manifestUrl: 'https://notmeme-app-front-dev-o5oet.ondigitalocean.app/tonconnect-manifest.json'
			});
			
			window.tonConnectUI.uiOptions = {
				// twaReturnUrl: 'https://notmeme-app-front-dev-o5oet.ondigitalocean.app/'
			};

			try {
				window.tonConnectUI.onStatusChange(
					walletAndwalletInfo => {
						this.checkConnect()
					} 
				);
			} catch (error) {
				
			}
		},

		async checkConnect() {
			this.$store.commit("userData/setUserData", {
				walletAddress: window?.tonConnectUI?.wallet?.account?.address || null
			})

			setTimeout(async () => {
				if(window?.tonConnectUI?.wallet?.account?.address !== this.backendWallet) {
					await window.tonConnectUI.disconnect()
					this.$store.commit("userData/setUserData", {
						walletAddress: null,
						backendWallet: null,
					})
					try {
						await this.$axios(`/users/updateWallet`, {
							method: "post",
							data: {
								"walletAddress": null
							},
							headers: {
								'Content-Type': 'application/json',
								'Authorization': 'Bearer ' + this.token,
								'RBNlNEv': this.initData,
								'maxBodyLength': 'Infinity'
							},
						});
					} catch (error) {
						console.log(error)
					}
				}
			}, 4000);
		},

		async setLang() {
			await window.Telegram.WebApp.CloudStorage.getItem('selectedLang', (async(error, val) => {
				this.$store.commit("start/activate")
				if(val) {
					this.selectedLang = (val === 'ua' ? 'uk' : val)
					this.$i18n.setLocale(val)
				}
				else {
					this.$i18n.setLocale(window?.Telegram?.WebApp?.initDataUnsafe?.user?.language_code === 'uk' ? 'ua' : window?.Telegram?.WebApp?.initDataUnsafe?.user?.language_code)
					this.selectedLang = window?.Telegram?.WebApp?.initDataUnsafe?.user?.language_code
				}
			}))
		}
	},

	watch: {
		$route() {
			setTimeout(() => {
				this.$refs.layout.scrollTo(0, 0);
			}, 250);
		}
	}
}
</script>

<style lang="scss" scoped>
.layout {
	height: 100vh;
	overflow-y: auto;
	background: #151E27;
	border-radius: mobile-vw(24) mobile-vw(24) 0 0;
	border: mobile-vw(1) solid #2A333C;
	padding: mobile-vw(24) mobile-vw(16);
	margin-top: mobile-vw(70);
}
.connector {
	display: none;
}
</style>