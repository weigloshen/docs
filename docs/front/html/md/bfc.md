# BFC(Block Formatting Context)
BFC 翻译为"块级格式化上下文"。它是一个独立的渲染区域,这个区域拥有一套渲染规则,它确定了其子元素将如何定位,以及和其他元素的关系和相互作用。
## BFC 的作用主要有: 
1. 同一个 BFC 内的两个块级盒在垂直方向上边沿相接,margin 不会重叠。 
2. BFC 区域不会与外边的浮动盒子重叠。
3. BFC 是一个独立的渲染区域,外边的元素不会影响其内部的布局,反之亦然。 
4. BFC 的高度会包含其内的浮动元素。 
## 具有 BFC 特性的元素有:
- 根元素 html 
- 浮动元素(float 不为 none)   
- 定位元素(position 为 absolute 或 fixed) 
- display 为 inline-block、flex、inline-flex、table-cells、table-caption 的元素 
- overflow 不为 visible 的元素
## 可以通过以下方式触发 BFC:
1. float 的值不为none。
2. position 的值不为static或relative。 
3. display 的值为flex、table-cells、inline-block 等。  
4. overflow 的值不为 visible。
## 例子
一个常见的例子是使用 BFC 解决 margin 重叠问题。例如:
```css 
css
.container {
  overflow: hidden; /* 触发 BFC */  
}  

.container > div {
  float: left;  
  width: 100px;  
  height: 100px;  
  margin: 20px;   
}
```
.container 元素触发了 BFC,所以其内部的 div float 浮动并不会影响外部元素,而且两个 div 的 margin 也不会重叠,能够正常生效。
这就是 BFC 的概念以及作用,希望对您有所帮助。如有任何疑问,欢迎在任何时间提出。 (edited) 