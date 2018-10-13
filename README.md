# keep-rolling
 **This is an infinite slide animation plug-in, which inherits the basic css style, you just need a direct reference just fine.（这是一个无限滑动的动画插件，其中继承了基础的css样式，您只需要直接引用就好了。）**


demo查看：![查看](https://github.com/lvleihere/keep-rolling/blob/master/demo/kep-rolling.gif)
你可以直接clone到本地进行查看！

##### 使用方法

- 直接引入js文件

``` javascript
<script src="test.js"></script>
```
- 通过cdn引入（暂时未上传‘_’）
- 通过npm/yarn进行安装
```javascript
npm i keep-rolling
yarn add keep-rolling
```
然后再传入参数。

##### 参数解释

params   | type   |                 explanation               | required
--------:|:------:|:-----------------------------------------:|:------:
imgs     | Array  | 图片的绝对or相对地址                        |   √
imgWidth | number | 图片的宽度（绝对宽度）                      |   √
speed    | number | 图片移动速度（1为requestAnimationFrame间隔）|   √
box      | object | 外层盒子的参数                             |   √

author:
lvlei(.fun)
吕雷

