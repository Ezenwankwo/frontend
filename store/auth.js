export const state = () => ({
  authenticated: false,
  user: {},
  profile: {},
  location: {}
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
  },
  updateLocation (state, newLocation) {
    state.location = newLocation
  }
}
