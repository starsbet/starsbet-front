export const state = () => ({
    allTasks: [
        {
            image: require('~/assets/img/tasks/daily.png'),
            imageDone: require('~/assets/img/tasks/dailyDisable.png'),
            text: 'Daily Bonus',
            reward: 100,
            done: false,
            loading: false
        },
        {
            image: require('~/assets/img/tasks/bonus.png'),
            imageDone: require('~/assets/img/tasks/bonusDisable.png'),
            text: 'Registration Bonus',
            reward: 1000,
            done: false,
            loading: false
        },
        {
            image: require('~/assets/img/tasks/subscribe.png'),
            imageDone: require('~/assets/img/tasks/subscribeDisable.png'),
            text: 'Subscribe Channel',
            reward: 1000,
            done: false,
            loading: false
        },
        {
            image: require('~/assets/img/tasks/chat.png'),
            imageDone: require('~/assets/img/tasks/chatDisable.png'),
            text: 'Join Chat',
            reward: 1000,
            done: false,
            loading: false
        },
        {
            image: require('~/assets/img/tasks/invite1.png'),
            imageDone: require('~/assets/img/tasks/invite1Disable.png'),
            text: 'Invite 1 Friend',
            reward: 1000,
            done: true,
            loading: false
        },
        {
            image: require('~/assets/img/tasks/invite5.png'),
            imageDone: require('~/assets/img/tasks/invite5Disable.png'),
            text: 'Invite 5 Friend',
            reward: 5000,
            done: true,
            loading: false
        },
        {
            image: require('~/assets/img/tasks/invite10.png'),
            imageDone: require('~/assets/img/tasks/invite10Disable.png'),
            text: 'Invite 10 Friend',
            reward: 10000,
            done: true,
            loading: false
        },
    ]
});

export const mutations = {
    setData(state, payload) {
        Object.keys(payload).forEach((item) => {
            state[item] = payload[item]
        })
    },

    loading(state, payload) {
        state.allTasks[payload[0]].loading = payload[1]
    }
};

export const getters = {
    allTasks: (state) => state.allTasks,
    
};
