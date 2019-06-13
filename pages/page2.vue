<template>
  <div class="body">
    <h1>Page 2</h1>
    <a v-on:click="forceIdChange">
      Change video to: {{defaultId}}
    </a>
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
        this.mutatePlayerId({id: "1roy4o4tqQM", force: false});
      }
    },
    methods: {
      ...mapMutations({
        mutatePlayerId: "PlayerStore/mutatePlayerId",
      }),
      forceIdChange() {
        this.mutatePlayerId({id: "1roy4o4tqQM", force: true})
      }
    }
  }
</script>