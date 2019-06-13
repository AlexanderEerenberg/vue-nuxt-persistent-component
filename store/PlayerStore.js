export const state = () => ({
  id: "dxq-7RcC0Tc",
  isPlaying: false
})

export const mutations = {
  mutatePlayerId(state, data) {
    if (data.force) state.id = data.id;
    if (!state.isPlaying) state.id = data.id;
  },
  setIsPlaying(state) {
    state.isPlaying = true;
  },
  setIsPaused(state) {
    state.isPlaying = false;
  }
}