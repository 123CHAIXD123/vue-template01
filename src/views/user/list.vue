<template>
  <div>
      <h1>{{ $route.meta.title || 'User List' }}</h1>
      <el-button type="primary">Primary Button</el-button>
      <base-test></base-test>
      <base-input></base-input>
      <ul v-for="(value, index, key) in list" :key="key">
        {{ value }}
        <li v-for="(values, indexs, keys) in value" :key="keys">
          {{ values }}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: {
        '哦哦1': {
          'a1': '玉玉1',
          'a2': '玉玉2',
          'a3': '玉玉3',
          'a4': '玉玉4'
        },
        '哦哦2': {
          'a1': '玉玉1',
          'a2': '玉玉2',
          'a3': '玉玉3',
          'a4': '玉玉4'
        }
      }
    }
  }
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
