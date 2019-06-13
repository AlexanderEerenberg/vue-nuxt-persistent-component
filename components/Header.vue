<template>
  <div>
    <p>This is an example project showcasing the use of <a rel="noopener" href="https://nuxtjs.org/" target="_blank">Nuxt.JS</a> to create a persistant player which survives navigation.</p>
    <p>Try it out by playing the video and then using the buttons to navigate to another page. The video should keep playing without interruptions.</p>
    <p>If the video is not started or is paused again you can navigate to another page then the video url is updated with the one corresponding to that page.</p>
    <p>The player state is being maintained using <a rel="noopener" href="https://vuex.vuejs.org/" target="_blank">Vuex</a>.</p>
    <div>
      <nuxt-link to="/">
        <audiobutton text="Home" id="dxq-7RcC0Tc"/>
      </nuxt-link>
      <nuxt-link to="/page1">
        <audiobutton text="Page 1" id="MfD67KCFxqI"/>
      </nuxt-link>
      <nuxt-link to="/page2">
        <audiobutton text="Page 2" id="1roy4o4tqQM"/>
      </nuxt-link>
    </div>
  </div>
</template>

<style>
  nav {
    text-align: center;
    border-bottom: 1px solid grey;
    padding-bottom: 5px;
  }
</style>