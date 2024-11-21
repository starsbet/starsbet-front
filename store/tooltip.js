export const state = () => ({
    active: false,
    message: null,
    returnInfo: null
});

export const mutations = {
    activate(state, payload) {
        state.active = true;
        state.returnInfo = null
        if(payload) {
            state.message = payload
        }
    },

    deactivate(state, payload) {
        state.active = false;
        if(payload) {
            state.message = null
            state.returnInfo = payload
        }
    },
};

export const getters = {
    active: (state) => state.active,
    message: (state) => state.message,
    returnInfo: (state) => state.returnInfo,
};
