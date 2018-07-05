<style lang="scss" scoped>
  header {
    display: flex;
    align-items: center;
    background: var(--black);
    color: var(--white);
    position: fixed;
    left: 0;
    right: 0;
    height: var(--header-height);
    padding: 0 calc(var(--spacing) / 2);

    & > * {
      padding: 0 calc(var(--spacing) / 2);
    }

    h1 {
      color: inherit;
      text-decoration: none;
      text-transform: uppercase;
      font-size: var(--size-5);
      letter-spacing: 0.125em;
      font-weight: bold;
    }

    form {
      flex: auto;
    }

    input {
      width: 100%;
      border-radius: 4px;
      border: none;
      background: var(--input-background);
      color: var(--input-color);
      padding: calc(var(--spacing) / 2);
    }

    button {
      background: none;
      border: none;
      color: inherit;

      &:disabled {
        color: var(--disabled-color);
      }
    }
  }
</style>

<template>
  <header>
    <h1 v-text="title" />
    <form @submit.prevent>
      <label class="visually-hidden" for="filter">Search</label>
      <input @keyup="handleQuery" :value="query" type="text" id="filter" placeholder="Find licences"/>
    </form>

    <button :disabled="this.query.length < 1" @click="clearFilter">Clear</button>
  </header>
</template>

<script>
  export default {
    props: ['title'],
    computed: {
      query () {
        return this.$store.state.query
      }
    },
    methods: {
      clearFilter () {
        this.$store.commit('query', '')
      },
      handleQuery (e) {
        let { value } = e.target
        this.$store.commit('query', value)
      }
    }
  }
</script>
