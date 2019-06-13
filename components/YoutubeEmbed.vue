<template>
  <iframe 
    id="youtubeEmbedPlayer"
    width="560" 
    height="315" 
    :src="`https://www.youtube.com/embed/${$store.state.PlayerStore.id}?enablejsapi=1`"
    frameborder="0" 
    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    mounted() {
      this.player = new YT.Player('youtubeEmbedPlayer', {
          events: {
              "onReady": () => console.log('player ready'),
              "onStateChange": this.onPlayerStateChange
          }
      });
    },
    methods: {
      ...mapMutations({
        setIsPlaying: "PlayerStore/setIsPlaying",
        setIsPaused: "PlayerStore/setIsPaused"
      }),
      onPlayerStateChange(event) {
        console.log('player state change', event.data)
        switch (event.data) {
          case YT.PlayerState.PLAYING:
              this.setIsPlaying();
              break;
          case YT.PlayerState.PAUSED:
          case YT.PlayerState.ENDED:
              this.setIsPaused();
              break;
          default:
        }
      }
    }
  }
</script>