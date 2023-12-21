import fSessions from '~/components/sessions/fData.js'

export const state = () => ({
  sessions: []
})

export const getters = {
  sessions (state) {
    return state.sessions
  }
}

export const mutations = {
  SET_SESSIONS (state, val) {
    state.sessions = val
  }
}

export const actions = {
  fetchSessions({ commit }, day) {
    const sessions = fSessions.filter((i) => i.day === day).length===0 ? [] : fSessions.filter((i) => i.day === day)[0].sessions
    commit('SET_SESSIONS', sessions)
  }
}
