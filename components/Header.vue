<template>
  <div>
    <p>This is an example project showcasing the use of <a rel="noopener" href="https://nuxtjs.org/" target="_blank">Nuxt.JS</a> to create a persistant player which survives navigation.</p>
    <p>Try it out by playing the video and then using the buttons to navigate to another page. The video should keep playing without interruptions.</p>
    <p>If the video is not started or is paused again you can navigate to another page then the video url is updated with the one corresponding to that page.</p>
    <p>The player state is being maintained using <a rel="noopener" href="https://vuex.vuejs.org/" target="_blank">Vuex</a>.</p>
    <div class="button-container">
      <nuxt-link to="/">
        <button>Home</button>
      </nuxt-link>
      <nuxt-link to="/page1">
        <button>Page 1</button>
      </nuxt-link>
      <nuxt-link to="/page2">
        <button>Page 2</button>
      </nuxt-link>
    </div>
  </div>
</template>

<style>
  .button-container {
    display: flex;
    justify-content: space-between;
  }
  button {
    outline: none;
    position: relative;
    min-height: 2rem;
    display: inline-block;
    align-items: center;
    vertical-align: middle;
    font-size: 1rem;
    line-height: 1;
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
    padding: 0 1rem;
    border: none;
    text-align: center;
    background-color: #677381;
    box-shadow: rgba(0, 0, 0, 0.2) 0px -2px 0px 0px inset;
    border-radius: 2px;
    transition: background-color .1s;
    font-family: 'ProximaNovaBold', sans-serif;
    font-weight: normal;
  }
  button:hover {
    background-color: #2e3843;
  }
  button.m {
    min-height: 2.5rem;
  }
  button.l {
    font-size: 1.25rem;
    padding: 0 1.5rem;
    min-height: 3.5rem;
  }
  button:active {
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2) inset;
  }
</style>