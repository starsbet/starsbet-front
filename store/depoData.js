export const state = () => ({
    amount: 0,
    type: null,
    currency: null,
    bank: null,
    cardOwner: null
});

export const mutations = {
    setData(state, payload) {
        Object.keys(payload).forEach((item) => {
            state[item] = payload[item]
        })
    },
};

export const getters = {
    amount: (state) => state.amount,
    type: (state) => state.type,
    currency: (state) => state.currency,
    bank: (state) => state.bank,
    cardOwner: (state) => state.cardOwner
};
