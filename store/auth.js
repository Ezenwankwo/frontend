export const state = () => ({
  authenticated: false,
  user: {},
  profile: {}
})

export const mutations = {
  toggleAuthenticated (state, value) {
    state.authenticated = value
  },
  updateUser (state, newUser) {
    state.user = newUser
  },
  updateProfile (state, newProfile) {
    state.profile = newProfile
  }
}
