<template>
  <div class="body">
    <h1>Home</h1>
    <a :click="this.mutateForcePlayerIdChange" :if="this.defaultId !== this.$store.state.PlayerStore.id">Change video to: {{defaultId}}</a>
  </div>
</template>

<script>
 import { mapMutations } from 'vuex';

  export default {
    head: {
      title: 'Home page 🚀',
      meta: [
        { hid: 'description', name: 'description', content: 'Home page description' }
      ]
    },
    data() {
      return { defaultId: "dxq-7RcC0Tc"}
    },
    mounted() {
      if (!this.$store.state.PlayerStore.isPlaying) {
        this.mutatePlayerId({id: this.defaultId});
      }
    },
    methods: {
      ...mapMutations({
        mutatePlayerId: "PlayerStore/mutatePlayerId",
        mutateForcePlayerIdChange: "PlayerStore/mutateForcePlayerIdChange"
      })
    }
  }
</script>