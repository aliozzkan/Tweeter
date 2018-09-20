export const setItem = (state, payload) => {
    state.name = payload
}

export const setTweet = (state, payload) => {
    state.homeTweets.splice(0,0,payload)
}

export const setTweets = (state, payload) => {
    state.homeTweets = payload
}

export const login = (state, payload) => {
    if(payload) {
        state.isLogged = true
        state.token = payload.token
        state.user = payload.user
        localStorage.setItem('user', JSON.stringify(payload.user))
        localStorage.setItem('token', payload.token)
    } else {
        state.isLogged = false
        state.token = null
        state.user = null
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }
}