import {createApp} from 'vue/dist/vue.esm-bundler.js'

const app={
    data() {
        return {
            message:"我爱vue"
        }
    },
    template:"<h1>{{message}}</h1>"
}
createApp(app).mount("#app")