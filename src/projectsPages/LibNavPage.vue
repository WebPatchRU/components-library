<template>
  <div>
    <h1 class="heading">Components Library</h1>
    <div class="navigation-panel">
      <router-link v-for="item in items" :to="item.path" :key="item.path" class="navigation-panel__link">
        {{item.name}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  created () {
    this.$router.options.routes.forEach(route => {
      this.items.push({
        name: route.name,
        path: route.path
      })
    })
  }
}
</script>

<style scoped>
  .heading {
    font-size: 20px;
    line-height: 20px;
    color: gray;
    text-align: center;
  }
  .navigation-panel {
    display: flex;
    flex-direction: column;
  }
  .navigation-panel__link {
    display: block;
    padding: 5px;
    font-family: Helvetica;
    color: gray;
  }
</style>
