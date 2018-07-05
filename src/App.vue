<template>
  <Layout>
    <Header title="Lesen" />
    <List />
  </Layout>
</template>

<script>
import Header from '@/components/Header'
import List from '@/components/List'
import Layout from '@/components/layouts/default'

export default {
  name: 'App',
  components: {
    Header,
    List,
    Layout
  }
}
</script>

<style lang="scss">
  :root {
    --dark: #212529;
    --black: #343a40;
    --white: #f4f4f4;
    --green: #82c91e;
    --red: #fa5252;
    --size-1: 2.074rem;
    --size-2: 1.728rem;
    --size-3: 1.44rem;
    --size-4: 1.2rem;
    --size-5: 1rem;
    --size-6: 0.833rem;
    --size-7: 0.694rem;
    --size-8: 0.579rem;
    --spacing: var(--size-5);
    --list-item-width: 50vw;
    --header-height: calc(var(--size-1) * 2);
    --input-color: var(--white);
    --input-background: var(--dark);
    --disabled-color: darken(#{var(--white)}, 50);
    --font-family: 'Roboto', sans-serif;
    --font-size: 2vh;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-family);
    font-size: var(--font-size);
    background: var(--white);
    color: var(--black);

    @media (orientation: landscape) {
      --font-size: 1.2vw;
    }
  }

  .visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }
</style>
