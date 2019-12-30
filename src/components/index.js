import Vue from 'vue'

const requireContext = require.context(
  './global',
  true, // 是否递归查找
  /\.vue$/
)
requireContext.keys().forEach(__filename => {
  const componentCofig = requireContext(__filename)
  Vue.component(
    componentCofig.default.name || componentCofig.name,
    componentCofig.default || componentCofig
  )
})
