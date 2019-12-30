<template>
  <div>
      <h1>{{ $route.meta.title || 'User List' }}</h1>
      <el-button type="primary">Primary Button</el-button>
      <base-test></base-test>
      <base-input></base-input>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
// @import "@/assets/styles/_vars.scss";
// @import "~element-ui/packages/theme-chalk/src/common/var";
h1{
  // color: $--color-primary
  color: $--color-success;
}
</style>
