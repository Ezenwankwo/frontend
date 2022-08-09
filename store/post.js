export const state = () => ({
  feed: []
})

export const mutations = {
  updateFeed (state, newPosts) {
    state.feed = newPosts
  }
}
