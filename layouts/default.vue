<template>
  <div>
    <Header />
    <nuxt />
    <no-ssr>
      <div class="container">
        <YoutubeEmbed />
      </div>
    </no-ssr>
  </div>
</template>

<script>
  import YoutubeEmbed from '~/components/YoutubeEmbed.vue'
  import Header from '~/components/Header.vue'

  export default {
    head: {
      script: [
        { src: 'https://www.youtube.com/iframe_api' },
      ]
    },
    components: {
      YoutubeEmbed,
      Header
    }
  }
</script>

<style>
  html, body {
      padding: 0;
      margin: 0;
  }
  .body a {
      cursor: pointer;
      display: block;
      text-decoration: underline;
      padding: 1rem 0;
  }
</style>
