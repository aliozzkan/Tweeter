export const setItem = ({commit}, payload) => {
    commit('setItem', payload)
}

export const setTweet = ({commit}, payload) => {
    commit('setTweet', payload)
}

export const setTweets = ({commit}, payload) => {
    commit('setTweets', payload)
}

export const doLogin = ({commit}, payload) => {
    commit('login', payload)
}