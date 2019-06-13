<template>
  <div class="body">
    <h1>Home</h1>
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
      return { defaultId: "dxq-7RcC0Tc"}
    },
    mounted() {
      if (!this.$store.state.PlayerStore.isPlaying) {
        this.mutatePlayerId({id: "dxq-7RcC0Tc", force: false});
      }
    },
    methods: {
      ...mapMutations({
        mutatePlayerId: "PlayerStore/mutatePlayerId"
      }),
      forceIdChange() {
        this.mutatePlayerId({id: "dxq-7RcC0Tc", force: true})
      }
    }
  }
</script>