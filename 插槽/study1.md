## 插槽

-----

- Vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 Web Components 规范草案，将 <slot> 元素作为承载分发内容的出口。
  
  my-component
```html
<template>
    <a href="./main"><slot></slot></a>
</template>
```
  
  use 
```html
<template>
    <my-component>hello</my-component>
</template>
```
  当组件渲染的时候，<slot></slot> 将会被替换为“Your Profile”
  
- 作用域，插槽不能访问定义插槽的作用域(子作用域)
- 后备内容，有时为一个插槽设置具体的后备 (也就是默认的) 内容是很有用的，它只会在没有提供内容的时候被渲染。
```html
<button type="submit">
  <slot>Submit</slot>       //默认渲染出<slot>里面的元素
</button>


<submit-button></submit-button>     
//渲染出
<button type="submit">
  Submit
</button>
```
```html
<submit-button>
  Save
</submit-button>
//渲染出
<button type="submit">
  Save
</button>
```