# Canvas to image.

A tool of saving or converting canvas to images(download with file extension).

Cloned from [https://github.com/hongru/canvas2image](https://github.com/hongru/canvas2image).

## 1. Load resources.

```
const Canvas2Image = require('@senntyou/canvas2image');

Canvas2Image.doSomething().
```

## 2. How to use.

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

Save a canvas as an image.

```
Canvas2Image.saveAsImage(canvas, width, height, type);
```

* `canvas`: Canvas instance. 
* `width`: Image Width. 
* `height`: Image Height. 
* `type`: `png|jpeg|gif|bmp`. 

### 2.2 `saveAsPNG`

Save a canvas as a png image.

```
Canvas2Image.saveAsPNG(canvas, width, height);
```

* `canvas`: Canvas instance. 
* `width`: Image Width. 
* `height`: Image Height. 

### 2.3 `saveAsJPEG`

Save a canvas as a jpeg image.

```
Canvas2Image.saveAsJPEG(canvas, width, height);
```

* `canvas`: Canvas instance. 
* `width`: Image Width. 
* `height`: Image Height. 

### 2.4 `saveAsGIF`

Save a canvas as a gif image.

```
Canvas2Image.saveAsGIF(canvas, width, height);
```

* `canvas`: Canvas instance. 
* `width`: Image Width. 
* `height`: Image Height. 

### 2.5 `saveAsBMP`

Save a canvas as a bmp image.

```
Canvas2Image.saveAsBMP(canvas, width, height);
```

* `canvas`: Canvas instance. 
* `width`: Image Width. 
* `height`: Image Height. 

### 2.6 `convertToImage`

Convert a canvas to an `img` element.

```
let img = Canvas2Image.convertToImage(canvas, width, height, type);
```

* `canvas`: Canvas instance. 
* `width`: Image Width. 
* `height`: Image Height. 
* `type`: `png|jpeg|gif|bmp`.

### 2.7 `convertToPNG`

Convert a canvas to an `img` element with a png image.

```
let img = Canvas2Image.convertToPNG(canvas, width, height);
```

* `canvas`: Canvas instance. 
* `width`: Image Width. 
* `height`: Image Height.  

### 2.8 `convertToJPEG`

Convert a canvas to an `img` element with a jpeg image.

```
let img = Canvas2Image.convertToJPEG(canvas, width, height);
```

* `canvas`: Canvas instance. 
* `width`: Image Width. 
* `height`: Image Height. 

### 2.9 `convertToGIF`

Convert a canvas to an `img` element with a gif image.

```
let img = Canvas2Image.convertToGIF(canvas, width, height);
```

* `canvas`: Canvas instance. 
* `width`: Image Width. 
* `height`: Image Height. 

### 2.10 `convertToBMP`

Convert a canvas to an `img` element with a bmp image.

```
let img = Canvas2Image.convertToBMP(canvas, width, height);
```

* `canvas`: Canvas instance. 
* `width`: Image Width. 
* `height`: Image Height.
