## 插值

------------

- 文本
    - 数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：
    ```html
    <span>message:{{msg}}</span>
    ```
    - 通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定
    ```html
    <span v-once>msg:{{msg}}</span>
    ```

- 原始html
    - 双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 v-html 指令：
    ```html
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: 
        <span v-html="rawHtml"></span>
    </p>
    ```

- js表达式
    ```html
    {{ number + 1 }}
    {{ ok ? 'YES' : 'NO' }}
    {{ message.split('').reverse().join('') }}
    <div v-bind:id="'list-' + id"></div>
    ```