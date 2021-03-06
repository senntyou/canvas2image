# Canvas to image

[English Documentation](./README.en.md)

一个用于保存和转换 canvas 到图片的工具(下载时有文件扩展名).

Cloned from [https://github.com/hongru/canvas2image](https://github.com/hongru/canvas2image).

## 1. 加载资源

```
const Canvas2Image = require('@senntyou/canvas2image');

Canvas2Image.doSomething().
```

## 2. 怎样使用

```
Canvas2Image.saveAsImage(canvas, width, height, type);
Canvas2Image.saveAsPNG(canvas, width, height);
Canvas2Image.saveAsJPEG(canvas, width, height);
Canvas2Image.saveAsGIF(canvas, width, height);
Canvas2Image.saveAsBMP(canvas, width, height);

Canvas2Image.convertToImage(canvas, width, height, type);
Canvas2Image.convertToPNG(canvas, width, height);
Canvas2Image.convertToJPEG(canvas, width, height);
Canvas2Image.convertToGIF(canvas, width, height);
Canvas2Image.convertToBMP(canvas, width, height);
```

### 2.1 `saveAsImage`

保存 canvas 为一张图片.

```
Canvas2Image.saveAsImage(canvas, width, height, type);
```

* `canvas`: Canvas 实例. 
* `width`: Image 宽度. 
* `height`: Image 高度. 
* `type`: `png|jpeg|gif|bmp`. 

### 2.2 `saveAsPNG`

保存 canvas 为一张 png 图片.

```
Canvas2Image.saveAsPNG(canvas, width, height);
```

* `canvas`: Canvas 实例. 
* `width`: Image 宽度. 
* `height`: Image 高度. 

### 2.3 `saveAsJPEG`

保存 canvas 为一张 jpeg 图片.

```
Canvas2Image.saveAsJPEG(canvas, width, height);
```

* `canvas`: Canvas 实例. 
* `width`: Image 宽度. 
* `height`: Image 高度. 

### 2.4 `saveAsGIF`

保存 canvas 为一张 gif 图片.

```
Canvas2Image.saveAsGIF(canvas, width, height);
```

* `canvas`: Canvas 实例. 
* `width`: Image 宽度. 
* `height`: Image 高度. 

### 2.5 `saveAsBMP`

保存 canvas 为一张 bmp 图片.

```
Canvas2Image.saveAsBMP(canvas, width, height);
```

* `canvas`: Canvas 实例. 
* `width`: Image 宽度. 
* `height`: Image 高度. 

### 2.6 `convertToImage`

保存 canvas 为一个 `img` Element.

```
let img = Canvas2Image.convertToImage(canvas, width, height, type);
```

* `canvas`: Canvas 实例. 
* `width`: Image 宽度. 
* `height`: Image 高度. 
* `type`: `png|jpeg|gif|bmp`.

### 2.7 `convertToPNG`

保存 canvas 为一个 png 图片的 `img` Element.

```
let img = Canvas2Image.convertToPNG(canvas, width, height);
```

* `canvas`: Canvas 实例. 
* `width`: Image 宽度. 
* `height`: Image 高度.  

### 2.8 `convertToJPEG`

保存 canvas 为一个 jpeg 图片的 `img` Element.

```
let img = Canvas2Image.convertToJPEG(canvas, width, height);
```

* `canvas`: Canvas 实例. 
* `width`: Image 宽度. 
* `height`: Image 高度. 

### 2.9 `convertToGIF`

保存 canvas 为一个 gif 图片的 `img` Element.

```
let img = Canvas2Image.convertToGIF(canvas, width, height);
```

* `canvas`: Canvas 实例. 
* `width`: Image 宽度. 
* `height`: Image 高度. 

### 2.10 `convertToBMP`

保存 canvas 为一个 bmp 图片的 `img` Element.

```
let img = Canvas2Image.convertToBMP(canvas, width, height);
```

* `canvas`: Canvas 实例. 
* `width`: Image 宽度. 
* `height`: Image 高度.
