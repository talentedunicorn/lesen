<style lang="scss" scoped>
  footer {
    padding: calc(var(--spacing) * 3) var(--spacing) var(--spacing);
    text-align: center;
    font-size: var(--size-6);

    a {
      text-decoration: none;
    }
  }
</style>

<template>
  <main>
    <slot></slot>
    <footer>
      <p>This page was built by <a href="//talentedunicorn.com">TalentedUnicorn 🦄</a>
      </p>
    </footer>
  </main>
</template>
