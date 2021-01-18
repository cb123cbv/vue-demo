import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: 'First',
      meta: {
        // 页面标题title
        title: '最亮的仔'
      },
      component: () => import("@/views/first/index")
    }
  ]
})
