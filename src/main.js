import { createApp } from 'vue'
import Vant from 'vant'
import App from './App.vue'
import store from './store'
import router from './router'
import 'lib-flexible/flexible'
import '@/common/style/mixin.less'
// import 'default-passive-events';
import 'vant/lib/index.css' // 全局引入样式

import VideoPlayer from 'vue-video-player/src'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

const app = createApp(App) // 创建实例

// 全局过滤器
app.config.globalProperties.$filters = {
  prefix(url) {
    if (url && url.startsWith('http')) {
      return url
    } else {
      url = `http://backend-api-01.newbee.ltd${url}`
      return url
    }
  },

  // 数字转化
  sellValueFilter(value) {
    let result = value
    if (value > 10000) {
      result = (result / 10000).toFixed(1) + 'w'
    }

    return result
  },
}
app.use(router)
app.use(store)
app.use(Vant)
app.use(VideoPlayer)
app.mount('#app')
