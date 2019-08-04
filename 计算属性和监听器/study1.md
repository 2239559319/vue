## 计算属性和监听器

- 计算属性基本用法
```javascript
//computed与msg绑定,msg变化computed也变化
new Vue({
    el:'#app',
    data(){
        return{
            msg:'hello world'
        }
    },
    computed:{
        log(){
            //this对象指向vm实例
            console.log(this.msg)
        }
    }
})
```
- 与methods的区别,computed是惰性求值，只有当data改变时才进行下一次求值，computed有缓存

- 监听器，需要在数据变化时执行异步或开销较大的操作时，
```javascript
new Vue({
    el:'#app',
    data(){
        return{
            msg:'hello',
            answer:''
        }
    },
    watch:{
        msg:function(newValue,oldValue) {   //当msg改变时执行
            //do somethings if msg change
        }
    }
})
```