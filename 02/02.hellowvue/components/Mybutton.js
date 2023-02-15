// 封装一个组件

export default {
    data() {
        return {
            count: 0
        }
    },
    template: `
    <div>
    <h2>子组件</h2>
    <h1>{{message}}</h1> <button @click="count++">点我一下</button>  <span>{{count}}</span>

    </div>
    
    `
}