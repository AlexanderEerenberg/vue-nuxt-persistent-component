<template>
  <div class="body">
    <h1>Page 1</h1>
    <a v-on:click="forceIdChange">
      Change video to: {{defaultId}}
    </a>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    head: {
      title: 'Page 2',
      meta: [
        { hid: 'description', name: 'description', content: 'Home page description' }
      ]
    },
    data() {
      return {
        defaultId: "MfD67KCFxqI"
        }
    },
    mounted() {
      if (!this.$store.state.PlayerStore.isPlaying) {
        this.mutatePlayerId({id: "MfD67KCFxqI", force: false});
      }
    },
    methods: {
      ...mapMutations({
        mutatePlayerId: "PlayerStore/mutatePlayerId",
      }),
      forceIdChange() {
        this.mutatePlayerId({id: "MfD67KCFxqI", force: true})
      }
    }
  }
</script>