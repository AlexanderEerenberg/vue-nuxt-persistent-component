export const state = () => ({
  id: "dxq-7RcC0Tc",
  isPlaying: false
})

export const mutations = {
  mutatePlayerId(state, id) {
   if (!state.isPlaying) state.id = id.id;
  },
  mutateForcePlayerIdChange(state, id) {
    state.id = id;
   },
  setIsPlaying(state) {
    state.isPlaying = true;
    console.log(state.isPlaying)
  },
  setIsPaused(state) {
    state.isPlaying = false;
    console.log(state.isPlaying)
  }
}