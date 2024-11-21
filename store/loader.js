export const state = () => ({
    active: false,
    info: null
});

export const mutations = {
    activate(state, payload) {
        state.active = true;

        if(payload) {
            state.info = payload
        }
    },

    deactivate(state, payload) {
        state.active = false;

        if(payload) {
            state.info = payload
        }
    },
};

export const getters = {
    active: (state) => state.active,
    info: (state) => state.info
};
