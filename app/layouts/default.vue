<template>
  <div class="layout">
      <LayoutNavbar />

      <main class="layout__main">
          <slot />
      </main>

      <LayoutFooter />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  color: var(--color-text);
}

.layout__main {
  flex: 1;
  padding-top: 64px; /* compensa el navbar fixed */
}
</style>