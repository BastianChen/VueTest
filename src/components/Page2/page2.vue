<template>
  <div id="app-1">
    <div style="margin-left: 35%;margin-top: 10px">
      <ol>
        <li v-for="todo in newsList">
          {{ todo.title }}
        </li>
      </ol>
    </div>
    <div class="text-align-center" style="margin-top: 10px">
      <el-button type="primary" icon="el-icon-download" circle @click="getMore"></el-button>
      <el-button type="success" icon="el-icon-upload2" circle @click="goTop"></el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'domestic',
  // components: {news},
  data () {
    return {
      type: null,
      start: 0, //从第几条开始 一次返回20条
      newsList: []
    }
  },
  created () {
    this.start = 0
    this.type = 7
    this.$axios.get({
      url: `http://localhost:8080/Article/getArticleByType?typeNumber=${this.type}&start=${this.start}`
    }).then(res => {
      this.newsList.push(...res.data.articleJSONArray)

      console.log(this.newsList)
    })
  },
  methods: {
    goDetail (item) {
      localStorage.setItem('newsIdTemp', item.id)
      localStorage.setItem('newsImgTemp', item.imageUrl)
      this.$router.push({
        name: 'news_detail',
        params: {
          news: item
        }
      })
    },
    getMore () {
      this.start += 20
      this.$axios.get({
        url: `http://localhost:8080/Article/getArticleByType?typeNumber=${this.type}&start=${this.start}`
      }).then(res => {
        this.newsList.push(...res.data.articleJSONArray)
        console.log(`加载更多 ===> `, this.newsList)
      })
    },
    goTop() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style scoped>
</style>
