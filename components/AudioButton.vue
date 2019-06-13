<template>
    <button @click="changePlayerUrl(id)">
      {{text}}
    </button>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    props: ["text", "id"],
    methods: {
      ...mapMutations({mutatePlayerId: "PlayerStore/mutatePlayerId"}),
      changePlayerUrl(id) {
        const currentId = this.$store.state.PlayerStore.id;
        this.mutatePlayerId({currentId, id});
      }
    }
  }
</script>

<style>
  button {
    margin-right: .5rem;
    padding: .5rem 1.5rem;
    background-color: #49a4a2;
    color: #ffeadb;
    font-family: ProximaNovaBold, sans-serif;
    border: none;
    border-radius: unset;
    border-right: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0 -2px 0 0 rgba(0,0,0,0.2) inset;
    line-height: 1.2;
    font-size: 1rem;
    cursor: pointer;
  }
</style>