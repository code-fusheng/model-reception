<template>
  <div>
    <Layout />
    <a-back-top />
  </div>
</template>

<script>
import Layout from './layout/Layout'
export default {
  // 组件页面刷新变量
  provide() {
    return {
      reload: this.reload
    }
  },
  components: {
    Layout
  },
  mounted() {
    this.initLive2d()
  },
  methods: {
    initLive2d() {
      setTimeout(() => {
        window.L2Dwidget.init({
          pluginRootPath: 'live2dw/',
          pluginJsPath: 'lib/',
          pluginModelPath: 'live2d-widget-model-shizuku/assets/',
          tagMode: false,
          debug: false,
          model: { jsonPath: '../live2dw/live2d-widget-model-shizuku/assets/shizuku.model.json' },
          // tororo 猫咪
          // shizuku 推荐
          display: { position: 'left', width: 240, height: 480 },
          mobile: { show: true },
          log: false
        })
      }, 1000)
    }
  }
}
</script>

<style>
img {
    margin: auto;
    width: 100%;
}
/* 滚动条的宽度 */
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  /* 滚动条滑块样式 */
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #001529;
  }
</style>
