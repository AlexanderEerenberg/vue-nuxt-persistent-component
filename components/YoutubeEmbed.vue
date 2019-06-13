<template>
  <div id="player"></div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    props: ["youtubeId"],
    data() {
      return {
        state: {
          player: null
        }
      }
    },
    watch: {
      youtubeId: function(newId, oldId) {
         // When no Youtube player exist we try to initialize it first.
        if (!this.state.player) {
            this.initPlayer();
        }
        // When the Youtube player is ready and youtubeId has changed.
        if (newId !== oldId && this.state.player) {
            // If youtubeId is not empty we cue the new video. Otherwise we stop the player.
            if (newId) {
                this.state.player.cueVideoById({videoId: newId});
            } else {
                this.state.player.stopVideo();
            }
        }
      }
    },
    mounted() {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => {
          this.loadPlayer();
      };
    },
    methods: {
      ...mapMutations({
        setIsPlaying: "PlayerStore/setIsPlaying",
        setIsPaused: "PlayerStore/setIsPaused"
      }),
      initPlayer() {
        /**
         * Initialize the Youtube player if conditions are met.
         * - onYouTubeIframeAPIReady must be true
         */
        if(YT.Player){
          this.loadPlayer();
        }
      },
      loadPlayer() {
        /**
         * Render the Youtube player if conditions are met.
         * - youtubeId must not be empty
         */
        if (!this.youtubeId) { return; }
        const player = new YT.Player('player', {
            videoId: this.youtubeId,
            width: 640,
            height: 390,
            events: {
                onReady: () => {
                    console.log('player ready');
                },
                onStateChange: (event) => {
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
        });
        this.state.player = player;
      }
    }
  }
</script>

<style>
  .iframe-container {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
  }

  .iframe-container iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
</style>