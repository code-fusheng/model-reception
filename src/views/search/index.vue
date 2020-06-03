<template>
  <div class="search-container">
    <div class="search-icon">
      <p class="font-icon">MODEL</p>
    </div>
    <a-input-search v-model="keyword" class="search-box" placeholder="周报/日报/问答/文章/通知" enter-button />
    <!-- 条件列 -->
    <div class="scree-menu">
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="report">报告</a-menu-item>
        <a-menu-item key="answer">问答</a-menu-item>
        <a-menu-item key="article">文章</a-menu-item>
        <a-menu-item key="notic">通知</a-menu-item>
        <a-menu-item key="othor">其他</a-menu-item>
      </a-menu>
    </div>

  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      cardBodyStyle: {
        padding: '18px'
      },
      searchLoading: false,
      loading: false,
      current: ['article'],
      keyword: this.$route.query.keyword,
      searchPage: {
        keyword: '测试',
        pageNo: 1,
        pageSize: 1,
        params: 'articleTitle',
        // params: 'questionDescription',
        index: 'clms_article_index',
        // index: 'clms_question_index',
        list: []
      }
    }
  },
  created() {
    console.log('关键字：' + this.keyword)
  },
  methods: {
  }
}
</script>

<style scoped>
  /* 滚动条的宽度 */
  ::-webkit-scrollbar {
    width: 0px;
  }
  /* 滚动条滑块样式 */
  ::-webkit-scrollbar-thumb {
    background-color: rgb(226, 243, 247) !important;
  }
  .search-container{
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    /* 1.居中对齐 以(水平)中轴为参照对齐 【子元素垂直居中】 */
    align-items: center;
    /* 线性渐变 */
    background-image: linear-gradient(to right,#e8f1f1,#d2dde7);
  }
  .search-icon {
    width: 300px;
    height: 100px;
    text-align: center; /*元素内容水平居中*/
  }
  .font-icon {
    line-height: 100px;
    font-size: 52px;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    background-image: -webkit-linear-gradient(left,blue,#66ffff 10%,#cc00ff 20%,#CC00CC 30%, #CCCCFF 40%, #00FFFF 50%,#CCCCFF 60%,#CC00CC 70%,#CC00FF 80%,#66FFFF 90%,blue 100%);
    -webkit-text-fill-color: transparent;/* 将字体设置成透明色 */
    -webkit-background-clip: text;/* 裁剪背景图，使文字作为裁剪区域向外裁剪 */
    -webkit-background-size: 200% 100%;
    -webkit-animation: masked-animation 4s linear infinite;
  }
  @keyframes masked-animation {
    0% {
        background-position: 0  0;
    }
    100% {
        background-position: -100%  0;
    }
  }
  .search-box {
    width: 300px;
    height: 50px;
  }
  .scree-menu {
    text-align: center; /*元素内容水平居中*/
    width: 80%;
    border-radius: 3px;
  }
  .search-content {
    display: flex;
    width: 80%;
    min-height: 690px;
    max-height: 900px;
    overflow: auto;
    justify-content: center;
    margin-bottom: 10px;
  }
  .span-content {
    height: 100%;
    width: 100%;
    background-color: white;
    min-height: 600px;
  }
  .card-list {
    width: 100%;
    height: 100%;
  }
</style>
