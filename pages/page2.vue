<template>
  <div class="body">
    <h1>Page 2</h1>
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
      return { defaultId: "1roy4o4tqQM"}
    },
    mounted() {
      if (!this.$store.state.PlayerStore.isPlaying) {
        this.mutatePlayerId({id: "1roy4o4tqQM"});
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