## 作用域插槽

----------

让插槽内容能够访问子组件中才有的数据是很有用的
- 我们可以将在父组件中访问的组件数据作为一个 <slot> 元素的特性绑定上去
```html
//组件
<span>
    <slot :name="name"></slot>
</span>
<script>
new Vue({
    name:'my-component',
    data(){
        return{
            name:'hello'
        }
    }
})
</script>
```
```html
<my-component>
    <template v-slot:default="slotProps">
        {{slotProps.name}}
    </template>
</my-component>
```
- 在这个例子中，我们选择将包含所有插槽 prop 的对象命名为 slotProps，但你也可以使用任意你喜欢的名字。
