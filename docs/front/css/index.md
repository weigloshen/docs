# CSS基础面试题

## 用css实现多行文本溢出省略效果
`单行`  
```css
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
```
`多行` 
```css
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3; //行数
overflow: hidden;
```

## 分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景

- display: none (不占空间，不能点击)（场景，显示出原来这里不存在的结构）
- visibility: hidden（占据空间，不能点击）（场景：显示不会导致页面结构发生变动，不会撑开）
- opacity: 0（占据空间，可以点击）（场景：可以跟transition搭配）

## 重绘与重排的区别

在浏览器中，重绘（repaint）和重排（reflow）都是指对页面布局和样式进行更新的过程，它们之间的区别如下：

- 重排：重排指当页面中的元素的布局和位置发生变化时，浏览器需要重新计算每个元素的几何属性（如位置、大小等），并重新布局整个页面。重排会影响到整个页面的渲染，因为它会导致页面中其他元素的尺寸、位置等属性都需要重新计算和更新。

- 重绘：重绘指当页面元素的样式（如背景颜色、字体颜色等）发生变化时，浏览器需要重新绘制整个元素的外观。重绘不会影响到页面布局，因为元素的几何属性并没有发生变化，只是样式发生了变化。

`由于重排和重绘都需要消耗大量的计算资源，因此它们对网页性能的影响非常大。在实际开发中，可以通过以下几种方式来尽可能地减少页面的重排和重绘：`

- 使用 CSS3 动画代替 JavaScript 实现的动画效果，因为 CSS3 动画使用 GPU 加速，性能更高。

- 使用 CSS3 的 transform 和 opacity 属性代替会引起页面重排的 top、left、width、height 等属性。

- 避免频繁地对页面元素的样式和布局进行修改，可以通过批量操作和使用文档碎片等方式来减少重排和重绘的次数。

- 避免在布局发生变化的情况下获取元素的几何属性（如 offsetTop、offsetLeft 等），因为这会强制浏览器进行重排。如果需要获取元素的几何属性，可以先将元素的布局固定，然后再获取属性值。

总之，减少页面的重排和重绘可以提高页面的性能和用户体验，对于需要频繁更新页面内容的应用尤为重要。


## BEM `(Block Element Modifier)`
BEM 是一种 CSS 命名方法论,它可以帮助你创建清晰、可扩展和维护性良好的代码。
BEM 是"块(Block)、元素(Element)、修饰符(Modifier)"的简写,它们之间的关系为:
- 块(Block):独立的结构单位,如页面、组件、模块等。块以 .block 命名。 
- 元素(Element):块的组成部分,它依赖于块来存在,以 .block__element 命名。 
- 修饰符(Modifier):用于修饰块或元素,以 .block--modifier 或 .block__element--modifier 命名。 
### 例子 
```html
<div class="person">
  <div class="person__head"></div>
  <div class="person__body"></div>  
</div>
```
这里 person 是块,person__head 和 person__body 是元素,它们依赖于 person 块。 
我们也可以添加修饰符:
```html
<div class="person">
  <div class="person__head"></div>
  <div class="person__body person__body--thin"></div>  
</div>
```
这里 person__body--thin 是 person__body 元素的修饰符,用于修饰这个元素。 
### BEM 的好处 
1. 可复用性:BEM 创建独立封装的组件,可以在任何地方重复使用。 
2. 可扩展性:可以通过添加新元素和修饰符来扩展 BEM 组件。 
3. 可维护性:BEM 的命名规则很简单,易于阅读和理解。 
4. 模块化:每个块都是独立的模块,有自己的作用域,不会影响外部。 
5. 灵活性:可以使用修饰符为组件添加不同的外表和行为。 
所以 BEM 是一个很好的 CSS 命名方法论,可以帮助我们编写可复用、灵活和可维护的代码。我强烈推荐在项目中使用 BEM 规范来命名 CSS。
请让我知道如果您对 BEM 还有任何其他疑问,我很乐意帮助您理解和掌握。 (edited) 

## Flexbox 
1. Flexbox 布局的主要作用是为盒模型提供弹性布局,使其子元素可以灵活地进行排列、对齐和分配空间。
2. Flex 容器的主要属性有:
- `flex-direction`:主轴的方向,`row` | `row-reverse` | `column` | `column-reverse `
- `flex-wrap`:是否换行,`nowrap` | `wrap` | `wrap-reverse `
- `flex-flow:flex-direction` 和 `flex-wrap` 的简写形式 
- `justify-content`:主轴的对齐方式,`flex-start` | `flex-end` | `center` | `space-between` | `space-around `
- `align-items`:交叉轴的对齐方式,`flex-start` | `flex-end` | `center` | `baseline` | `stretch` 
- `align-content`:多根轴线的对齐方式,`flex-start` | `flex-end` | `center` | `space-between` | `space-around` | `stretch `
3. Flex 项目的主要属性有:
- `order`:项目的排列顺序
- `flex-grow`:项目的放大比例
- `flex-shrink`:项目的缩小比例
- `flex-basis`:在分配多余空间之前,项目占据的主轴空间
- `flex:flex-grow`, `flex-shrink` 和 `flex-basis`的简写,默认值为0 1 auto。 
- `align-self`:单个项目的对齐方式,`auto` | `flex-start` | `flex-end` | `center` | `baseline` | `stretch`   
4. flex: 1 相当于:
```css
flex-grow: 1; 
flex-shrink: 1;
flex-basis: 0%;
``` 
这意味着:
1. flex-grow: 1 表示该项目将占据剩余空间的一部分,放大比例为1,若有多个子元素的 flex-grow 值为1,则它们将等分剩余空间。
2. flex-shrink: 1 表示该项目将缩小,缩小比例为1,若有多个子元素的 flex-shrink 值为1,当空间不足时,它们将等比例缩小。
3. flex-basis: 0% 表示在分配多余空间之前,该项目占据的主轴空间是0%(与内容大小一致)。
所以总结来说,flex: 1 允许该 flex 项目在容器有多余空间时放大,而在空间不足时缩小,它使得该项目能够自动填补容器的可用空间,非常适合用来做自适应布局。