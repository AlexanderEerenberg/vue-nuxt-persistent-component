<template>
  <div>
    <Header />
    <nuxt />
    <no-ssr>
      <div class="container">
        <YoutubeEmbed :youtubeId="this.$store.state.PlayerStore.id" />
      </div>
    </no-ssr>
  </div>
</template>

<script>
  import YoutubeEmbed from '~/components/YoutubeEmbed.vue'
  import Header from '~/components/Header.vue'

  export default {
    components: {
      YoutubeEmbed,
      Header
    }
  }
</script>

<style>
  html, body {
    display: flex;
    justify-content: space-around;
  }
  @media only screen and (min-width: 861px) {
    body {
      margin: 0;
      max-width: 800px;
    }
  }
  @media only screen and (min-width: 1280px) {
    body {
      max-width: 1024px;
    }
  }
  .body a {
    cursor: pointer;
    display: block;
    text-decoration: underline;
    padding: 1rem 0;
  }
</style>
