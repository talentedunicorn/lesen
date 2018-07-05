<template>
  <article class="license">
    <h1 class="license-title title">{{ title }}</h1>
    <p class="license-status">Status &nbsp;<span class="status" :class="status">{{ status }}</span></p>
    <p class="license-link"><a target="blank" :href="link">{{ link }}</a></p>
    <p v-if="description">{{ description }}</p>
    <button>Copy to clipboard</button>
  </article>
</template>

<script>
export default {
  props: [ 'title', 'status', 'link', 'description' ]
}
</script>

<style lang="scss" scoped>
  .license {
    padding: $global-padding;

    &-link {
      word-break: break-all;
    }

    &-status {
      display: flex;
      align-items: center;
    }

    .status {
      font-size: 0.8em;
      background: $oc-gray-4;
      padding: 0.25em 0.5em;
      border-radius: 4px;

      &.active {
        background: $oc-green-4;
        color: map-get($colors, white);
      }

      &.retired {
        background: $oc-yellow-4;
      }

      &.superseded {
        background: $oc-red-4;
      }
    }
  }
</style>
