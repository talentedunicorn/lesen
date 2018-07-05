<style lang="scss" scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: var(--header-height) var(--spacing) 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    li {
      padding: calc(var(--spacing) * 2) 0;
      flex: 100%;
      border-bottom: 1px solid rgba(#{var(--black)}, 0.3);

      &:last-child {
        border: none;
      }

      @media (orientation: landscape) {
        flex: 0 var(--list-item-width);
      }

      h2 {
        font-size: var(--size-4);
        color: var(--black);
        margin: 0;

        .status {
          color: rgba(#{var(--black)}, 0.5);
          font-size: 0.8em;
        }
      }
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  .status {
    &.active {
      color: var(--green);
    }

    &.retired {
      color: var(--red);
    }
  }
</style>

<template>
  <ul class="license-list">
    <li class="license-item" v-for="license in licenses" :key="license.id">
      <h2>
        <a v-if="license.url" target="blank" :href="license.url">{{ license.title }}</a>
        <span v-else>{{ license.title }}</span>
        <span class="status" :class="license.status">{{ license.status }}</span>
      </h2>
    </li>
  </ul>
</template>

<script>
  export default {
    computed: {
      licenses () {
        return this.$store.getters.filteredLicences
      }
    },
    mounted () {
      this.$store.dispatch('fetchLicences')
    }
  }
</script>
