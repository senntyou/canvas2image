/*!
 * 
 *     canvas2image v0.0.1
 * 
 *     https://github.com/senntyou/canvas2image
 * 
 *     @senntyou <jiangjinbelief@163.com>
 * 
 *     2018-06-11 11:57:07
 *     
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Canvas2Image"] = factory();
	else
		root["Canvas2Image"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var download = __webpack_require__(1);

// check if support sth.
var $support = function () {
	var canvas = document.createElement('canvas'),
	    ctx = canvas.getContext('2d');

	return {
		canvas: !!ctx,
		imageData: !!ctx.getImageData,
		dataURL: !!canvas.toDataURL,
		btoa: !!window.btoa
	};
}();

function scaleCanvas(canvas, width, height) {
	var w = canvas.width,
	    h = canvas.height;
	if (width == undefined) {
		width = w;
	}
	if (height == undefined) {
		height = h;
	}

	var retCanvas = document.createElement('canvas');
	var retCtx = retCanvas.getContext('2d');
	retCanvas.width = width;
	retCanvas.height = height;
	retCtx.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);
	return retCanvas;
}

function getDataURL(canvas, type, width, height) {
	canvas = scaleCanvas(canvas, width, height);
	return canvas.toDataURL(type);
}

function saveFile(strData) {
	document.location.href = strData;
}

function genImage(strData) {
	var img = document.createElement('img');
	img.src = strData;
	return img;
}
function fixType(type) {
	type = type.toLowerCase().replace(/jpg/i, 'jpeg');
	var r = type.match(/png|jpeg|bmp|gif/)[0];
	return 'image/' + r;
}
function encodeData(data) {
	if (!window.btoa) {
		throw 'btoa undefined';
	}
	var str = '';
	if (typeof data == 'string') {
		str = data;
	} else {
		for (var i = 0; i < data.length; i++) {
			str += String.fromCharCode(data[i]);
		}
	}

	return btoa(str);
}
function getImageData(canvas) {
	var w = canvas.width,
	    h = canvas.height;
	return canvas.getContext('2d').getImageData(0, 0, w, h);
}
function makeURI(strData, type) {
	return 'data:' + type + ';base64,' + strData;
}

/**
 * create bitmap image
 * 按照规则生成图片响应头和响应体
 */
var genBitmapImage = function genBitmapImage(oData) {

	//
	// BITMAPFILEHEADER: http://msdn.microsoft.com/en-us/library/windows/desktop/dd183374(v=vs.85).aspx
	// BITMAPINFOHEADER: http://msdn.microsoft.com/en-us/library/dd183376.aspx
	//

	var biWidth = oData.width;
	var biHeight = oData.height;
	var biSizeImage = biWidth * biHeight * 3;
	var bfSize = biSizeImage + 54; // total header size = 54 bytes

	//
	//  typedef struct tagBITMAPFILEHEADER {
	//  	WORD bfType;
	//  	DWORD bfSize;
	//  	WORD bfReserved1;
	//  	WORD bfReserved2;
	//  	DWORD bfOffBits;
	//  } BITMAPFILEHEADER;
	//
	var BITMAPFILEHEADER = [
	// WORD bfType -- The file type signature; must be "BM"
	0x42, 0x4D,
	// DWORD bfSize -- The size, in bytes, of the bitmap file
	bfSize & 0xff, bfSize >> 8 & 0xff, bfSize >> 16 & 0xff, bfSize >> 24 & 0xff,
	// WORD bfReserved1 -- Reserved; must be zero
	0, 0,
	// WORD bfReserved2 -- Reserved; must be zero
	0, 0,
	// DWORD bfOffBits -- The offset, in bytes, from the beginning of the BITMAPFILEHEADER structure to the bitmap bits.
	54, 0, 0, 0];

	//
	//  typedef struct tagBITMAPINFOHEADER {
	//  	DWORD biSize;
	//  	LONG  biWidth;
	//  	LONG  biHeight;
	//  	WORD  biPlanes;
	//  	WORD  biBitCount;
	//  	DWORD biCompression;
	//  	DWORD biSizeImage;
	//  	LONG  biXPelsPerMeter;
	//  	LONG  biYPelsPerMeter;
	//  	DWORD biClrUsed;
	//  	DWORD biClrImportant;
	//  } BITMAPINFOHEADER, *PBITMAPINFOHEADER;
	//
	var BITMAPINFOHEADER = [
	// DWORD biSize -- The number of bytes required by the structure
	40, 0, 0, 0,
	// LONG biWidth -- The width of the bitmap, in pixels
	biWidth & 0xff, biWidth >> 8 & 0xff, biWidth >> 16 & 0xff, biWidth >> 24 & 0xff,
	// LONG biHeight -- The height of the bitmap, in pixels
	biHeight & 0xff, biHeight >> 8 & 0xff, biHeight >> 16 & 0xff, biHeight >> 24 & 0xff,
	// WORD biPlanes -- The number of planes for the target device. This value must be set to 1
	1, 0,
	// WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap
	// has a maximum of 2^24 colors (16777216, Truecolor)
	24, 0,
	// DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed
	0, 0, 0, 0,
	// DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps
	biSizeImage & 0xff, biSizeImage >> 8 & 0xff, biSizeImage >> 16 & 0xff, biSizeImage >> 24 & 0xff,
	// LONG biXPelsPerMeter, unused
	0, 0, 0, 0,
	// LONG biYPelsPerMeter, unused
	0, 0, 0, 0,
	// DWORD biClrUsed, the number of color indexes of palette, unused
	0, 0, 0, 0,
	// DWORD biClrImportant, unused
	0, 0, 0, 0];

	var iPadding = (4 - biWidth * 3 % 4) % 4;

	var aImgData = oData.data;

	var strPixelData = '';
	var biWidth4 = biWidth << 2;
	var y = biHeight;
	var fromCharCode = String.fromCharCode;

	do {
		var iOffsetY = biWidth4 * (y - 1);
		var strPixelRow = '';
		for (var x = 0; x < biWidth; x++) {
			var iOffsetX = x << 2;
			strPixelRow += fromCharCode(aImgData[iOffsetY + iOffsetX + 2]) + fromCharCode(aImgData[iOffsetY + iOffsetX + 1]) + fromCharCode(aImgData[iOffsetY + iOffsetX]);
		}

		for (var c = 0; c < iPadding; c++) {
			strPixelRow += String.fromCharCode(0);
		}

		strPixelData += strPixelRow;
	} while (--y);

	var strEncoded = encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) + encodeData(strPixelData);

	return strEncoded;
};

/**
 * saveAsImage
 * @param canvasElement
 * @param {String} image type
 * @param {Number} [optional] png width
 * @param {Number} [optional] png height
 */
var saveAsImage = function saveAsImage(canvas, width, height, type) {
	if ($support.canvas && $support.dataURL) {
		if (typeof canvas == "string") {
			canvas = document.getElementById(canvas);
		}
		if (type == undefined) {
			type = 'png';
		}
		type = fixType(type);
		if (/bmp/.test(type)) {
			var data = getImageData(scaleCanvas(canvas, width, height));
			var strData = genBitmapImage(data);
			download(makeURI(strData, type));
		} else {
			var strData = getDataURL(canvas, type, width, height);

			download(strData);
		}
	}
};

var convertToImage = function convertToImage(canvas, width, height, type) {
	if ($support.canvas && $support.dataURL) {
		if (typeof canvas == "string") {
			canvas = document.getElementById(canvas);
		}
		if (type == undefined) {
			type = 'png';
		}
		type = fixType(type);

		if (/bmp/.test(type)) {
			var data = getImageData(scaleCanvas(canvas, width, height));
			var strData = genBitmapImage(data);
			return genImage(makeURI(strData, 'image/bmp'));
		} else {
			var strData = getDataURL(canvas, type, width, height);
			return genImage(strData);
		}
	}
};

module.exports = {
	saveAsImage: saveAsImage,
	saveAsPNG: function saveAsPNG(canvas, width, height) {
		return saveAsImage(canvas, width, height, 'png');
	},
	saveAsJPEG: function saveAsJPEG(canvas, width, height) {
		return saveAsImage(canvas, width, height, 'jpeg');
	},
	saveAsGIF: function saveAsGIF(canvas, width, height) {
		return saveAsImage(canvas, width, height, 'gif');
	},
	saveAsBMP: function saveAsBMP(canvas, width, height) {
		return saveAsImage(canvas, width, height, 'bmp');
	},

	convertToImage: convertToImage,
	convertToPNG: function convertToPNG(canvas, width, height) {
		return convertToImage(canvas, width, height, 'png');
	},
	convertToJPEG: function convertToJPEG(canvas, width, height) {
		return convertToImage(canvas, width, height, 'jpeg');
	},
	convertToGIF: function convertToGIF(canvas, width, height) {
		return convertToImage(canvas, width, height, 'gif');
	},
	convertToBMP: function convertToBMP(canvas, width, height) {
		return convertToImage(canvas, width, height, 'bmp');
	}
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (data) {
    var link = document.createElement('a');

    link.innerText = 'Canvas to image download link';
    link.setAttribute('download', '');
    link.setAttribute('href', data);
    link.style.display = 'none';

    document.body.appendChild(link);

    var event = document.createEvent('MouseEvents');
    event.initEvent('click', !1, !1);

    link.dispatchEvent(event);

    link.remove();
};

/***/ })
/******/ ]);
});