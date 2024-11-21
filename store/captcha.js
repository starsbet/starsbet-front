export const state = () => ({
    active: false,
    closable: true
});

export const mutations = {
    activate(state, payload) {
        state.active = true;
        if(payload) {
            state.closable = false
        }
    },

    deactivate(state) {
        state.active = false;
        setTimeout(() => {
            state.closable = true
        }, 350);
    },
};

export const getters = {
    active: (state) => state.active,
    closable: (state) => state.closable
};
