export const state = () => ({
    name: '',
    lastName: '',
    username: '',
    imageUrl: null,
    token: null,
    initData: null,
    currency: true,
    balance: [1000, 0],
    friends: 0,
    lang: null,
});

export const mutations = {
    setUserData(state, payload) {
        Object.keys(payload).forEach((item) => {
            state[item] = payload[item]
        })
    },
};

export const getters = {
    name: (state) => state.name,
    lastName: (state) => state.lastName,
    username: (state) => state.username,
    imageUrl: (state) => state.imageUrl,
    token: (state) => state.token,
    initData: (state) => state.initData,
    currency: (state) => state.currency,
    balance: (state) => state.balance,
    friends: (state) => state.friends,
    lang: (state) => state.lang
};
