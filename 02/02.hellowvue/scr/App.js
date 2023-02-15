//引入组件
import Mybutton from "../components/Mybutton"
export default {
    data() {
        return {
            message: "我爱vue",
            count: 0
        }
    },
    //在组件中注册子组件
    components:{
        Mybutton
    },
    template: `
    <h1>{{message}}</h1>
    <Mybutton></Mybutton>
    <Mybutton></Mybutton>
    <Mybutton></Mybutton>
    <Mybutton></Mybutton>
    `
}