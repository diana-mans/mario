/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/background.png":
/*!***********************************!*\
  !*** ./src/assets/background.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/assets/hills.png":
/*!******************************!*\
  !*** ./src/assets/hills.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/assets/platform.png":
/*!*********************************!*\
  !*** ./src/assets/platform.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/platform.png */ "./src/assets/platform.png");
/* harmony import */ var _assets_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/background.png */ "./src/assets/background.png");
/* harmony import */ var _assets_hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/hills.png */ "./src/assets/hills.png");




const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const gravity = 1;

class Player {
  constructor() {
    (this.position = {
      x: 100,
      y: 100,
    }),
      (this.velocity = {
        x: 0,
        y: 0,
      });
    (this.width = 30), (this.height = 30);
  }
  draw() {
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    }

    this.draw();
  }
}

class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

class GenericObjects {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image ? image.width : 0;
    this.height = image ? image.height : 0;
  }

  draw() {
    if (this.image && this.image.complete) {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }
}

let player = new Player();
let platforms = [];
let genericObjects = [];

const createImage = (imageSrc) => {
  const image = new Image();
  image.src = imageSrc;

  return image;
};

const bgImage = createImage(_assets_background_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
const hillsImage = createImage(_assets_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
const platformImage = createImage(_assets_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);

bgImage.onload = () => {
  genericObjects.push(new GenericObjects({ x: -1, y: -1, image: bgImage }));
};

hillsImage.onload = () => {
  genericObjects.push(
    new GenericObjects({ x: -1, y: -1, image: hillsImage }),
    new GenericObjects({ x: 1200, y: -1, image: hillsImage }),
  );
};

platformImage.onload = () => {
  platforms.push(
    new Platform({ x: -2, y: 470, image: platformImage }),
    new Platform({ x: platformImage.width - 4, y: 470, image: platformImage }),
    new Platform({ x: platformImage.width * 2 + 200, y: 470, image: platformImage }),
  );
};

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let scrollOffset = 0;

const init = () => {
  player = new Player();
  genericObjects = [
    new GenericObjects({ x: -1, y: -1, image: bgImage }),
    new GenericObjects({ x: 1200, y: -1, image: hillsImage }),
    new GenericObjects({ x: -1, y: -1, image: hillsImage }),
  ];

  platforms = [
    new Platform({ x: -2, y: 470, image: platformImage }),
    new Platform({ x: platformImage.width - 4, y: 470, image: platformImage }),
    new Platform({ x: platformImage.width * 2 + 200, y: 470, image: platformImage }),
  ];

  scrollOffset = 0;
};

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);

  genericObjects.forEach((genericObject) => {
    genericObject.draw();
  });

  platforms.forEach((platform) => platform.draw());
  player.update();

  //change velocity
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 7;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -7;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += 7;
      platforms.forEach((platform) => (platform.position.x -= 7));
      genericObjects.forEach((genericObject) => {
        genericObject.position.x -= 2;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= 7;
      genericObjects.forEach((genericObject) => {
        genericObject.position.x += 2;
      });
      platforms.forEach((platform) => (platform.position.x += 7));
    }
  }

  // platform collision
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >= platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });

  //win condition
  if (scrollOffset > 2000) {
    console.log('you win');
  }
  //lose condition
  if (player.position.y > canvas.height) {
    init();
  }
}

animate();

window.addEventListener('keydown', ({ code }) => {
  switch (code) {
    case 'ArrowUp':
      player.velocity.y -= 20;
      break;
    case 'ArrowDown':
      console.log('Вниз');
      break;
    case 'ArrowLeft':
      keys.left.pressed = true;
      break;
    case 'ArrowRight':
      keys.right.pressed = true;
      break;
  }
});

window.addEventListener('keyup', ({ code }) => {
  switch (code) {
    case 'ArrowLeft':
      keys.left.pressed = false;
      break;
    case 'ArrowRight':
      keys.right.pressed = false;
      break;
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxvQ0FBb0MsTUFBTTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmlvLy4vc3JjL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZyIsIndlYnBhY2s6Ly9tYXJpby8uL3NyYy9hc3NldHMvaGlsbHMucG5nIiwid2VicGFjazovL21hcmlvLy4vc3JjL2Fzc2V0cy9wbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vbWFyaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFyaW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hcmlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWFyaW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYXJpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21hcmlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21hcmlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwNzJkNTFiY2M5YzA5MzExZDRjMmE2NzA4YjA1YmRkYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2ZmZmU0YzM3MWY1ZTExZDM3MmIzOThhODdjNTFkZDAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZmYWIzOWQzNDg3ZGU1NjFiZTFhMDgxZmNmYjM4MDZkLnBuZ1wiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgcGxhdGZvcm1TcmMgZnJvbSAnLi9hc3NldHMvcGxhdGZvcm0ucG5nJztcbmltcG9ydCBiYWNrZ3JvdW5kU3JjIGZyb20gJy4vYXNzZXRzL2JhY2tncm91bmQucG5nJztcbmltcG9ydCBoaWxsc1NyYyBmcm9tICcuL2Fzc2V0cy9oaWxscy5wbmcnO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbmNvbnN0IGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY2FudmFzLndpZHRoID0gMTAyNDtcbmNhbnZhcy5oZWlnaHQgPSA1NzY7XG5cbmNvbnN0IGdyYXZpdHkgPSAxO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAodGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IDEwMCxcbiAgICAgIHk6IDEwMCxcbiAgICB9KSxcbiAgICAgICh0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgfSk7XG4gICAgKHRoaXMud2lkdGggPSAzMCksICh0aGlzLmhlaWdodCA9IDMwKTtcbiAgfVxuICBkcmF3KCkge1xuICAgIGMuZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgYy5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICB9XG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ICsgdGhpcy52ZWxvY2l0eS55IDw9IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueSArPSBncmF2aXR5O1xuICAgIH1cblxuICAgIHRoaXMuZHJhdygpO1xuICB9XG59XG5cbmNsYXNzIFBsYXRmb3JtIHtcbiAgY29uc3RydWN0b3IoeyB4LCB5LCBpbWFnZSB9KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgIH07XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMud2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgYy5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xuICB9XG59XG5cbmNsYXNzIEdlbmVyaWNPYmplY3RzIHtcbiAgY29uc3RydWN0b3IoeyB4LCB5LCBpbWFnZSB9KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgIH07XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMud2lkdGggPSBpbWFnZSA/IGltYWdlLndpZHRoIDogMDtcbiAgICB0aGlzLmhlaWdodCA9IGltYWdlID8gaW1hZ2UuaGVpZ2h0IDogMDtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKHRoaXMuaW1hZ2UgJiYgdGhpcy5pbWFnZS5jb21wbGV0ZSkge1xuICAgICAgYy5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIH1cbiAgfVxufVxuXG5sZXQgcGxheWVyID0gbmV3IFBsYXllcigpO1xubGV0IHBsYXRmb3JtcyA9IFtdO1xubGV0IGdlbmVyaWNPYmplY3RzID0gW107XG5cbmNvbnN0IGNyZWF0ZUltYWdlID0gKGltYWdlU3JjKSA9PiB7XG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IGltYWdlU3JjO1xuXG4gIHJldHVybiBpbWFnZTtcbn07XG5cbmNvbnN0IGJnSW1hZ2UgPSBjcmVhdGVJbWFnZShiYWNrZ3JvdW5kU3JjKTtcbmNvbnN0IGhpbGxzSW1hZ2UgPSBjcmVhdGVJbWFnZShoaWxsc1NyYyk7XG5jb25zdCBwbGF0Zm9ybUltYWdlID0gY3JlYXRlSW1hZ2UocGxhdGZvcm1TcmMpO1xuXG5iZ0ltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgZ2VuZXJpY09iamVjdHMucHVzaChuZXcgR2VuZXJpY09iamVjdHMoeyB4OiAtMSwgeTogLTEsIGltYWdlOiBiZ0ltYWdlIH0pKTtcbn07XG5cbmhpbGxzSW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICBnZW5lcmljT2JqZWN0cy5wdXNoKFxuICAgIG5ldyBHZW5lcmljT2JqZWN0cyh7IHg6IC0xLCB5OiAtMSwgaW1hZ2U6IGhpbGxzSW1hZ2UgfSksXG4gICAgbmV3IEdlbmVyaWNPYmplY3RzKHsgeDogMTIwMCwgeTogLTEsIGltYWdlOiBoaWxsc0ltYWdlIH0pLFxuICApO1xufTtcblxucGxhdGZvcm1JbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gIHBsYXRmb3Jtcy5wdXNoKFxuICAgIG5ldyBQbGF0Zm9ybSh7IHg6IC0yLCB5OiA0NzAsIGltYWdlOiBwbGF0Zm9ybUltYWdlIH0pLFxuICAgIG5ldyBQbGF0Zm9ybSh7IHg6IHBsYXRmb3JtSW1hZ2Uud2lkdGggLSA0LCB5OiA0NzAsIGltYWdlOiBwbGF0Zm9ybUltYWdlIH0pLFxuICAgIG5ldyBQbGF0Zm9ybSh7IHg6IHBsYXRmb3JtSW1hZ2Uud2lkdGggKiAyICsgMjAwLCB5OiA0NzAsIGltYWdlOiBwbGF0Zm9ybUltYWdlIH0pLFxuICApO1xufTtcblxuY29uc3Qga2V5cyA9IHtcbiAgcmlnaHQ6IHtcbiAgICBwcmVzc2VkOiBmYWxzZSxcbiAgfSxcbiAgbGVmdDoge1xuICAgIHByZXNzZWQ6IGZhbHNlLFxuICB9LFxufTtcblxubGV0IHNjcm9sbE9mZnNldCA9IDA7XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgZ2VuZXJpY09iamVjdHMgPSBbXG4gICAgbmV3IEdlbmVyaWNPYmplY3RzKHsgeDogLTEsIHk6IC0xLCBpbWFnZTogYmdJbWFnZSB9KSxcbiAgICBuZXcgR2VuZXJpY09iamVjdHMoeyB4OiAxMjAwLCB5OiAtMSwgaW1hZ2U6IGhpbGxzSW1hZ2UgfSksXG4gICAgbmV3IEdlbmVyaWNPYmplY3RzKHsgeDogLTEsIHk6IC0xLCBpbWFnZTogaGlsbHNJbWFnZSB9KSxcbiAgXTtcblxuICBwbGF0Zm9ybXMgPSBbXG4gICAgbmV3IFBsYXRmb3JtKHsgeDogLTIsIHk6IDQ3MCwgaW1hZ2U6IHBsYXRmb3JtSW1hZ2UgfSksXG4gICAgbmV3IFBsYXRmb3JtKHsgeDogcGxhdGZvcm1JbWFnZS53aWR0aCAtIDQsIHk6IDQ3MCwgaW1hZ2U6IHBsYXRmb3JtSW1hZ2UgfSksXG4gICAgbmV3IFBsYXRmb3JtKHsgeDogcGxhdGZvcm1JbWFnZS53aWR0aCAqIDIgKyAyMDAsIHk6IDQ3MCwgaW1hZ2U6IHBsYXRmb3JtSW1hZ2UgfSksXG4gIF07XG5cbiAgc2Nyb2xsT2Zmc2V0ID0gMDtcbn07XG5cbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgYy5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICBjLmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgZ2VuZXJpY09iamVjdHMuZm9yRWFjaCgoZ2VuZXJpY09iamVjdCkgPT4ge1xuICAgIGdlbmVyaWNPYmplY3QuZHJhdygpO1xuICB9KTtcblxuICBwbGF0Zm9ybXMuZm9yRWFjaCgocGxhdGZvcm0pID0+IHBsYXRmb3JtLmRyYXcoKSk7XG4gIHBsYXllci51cGRhdGUoKTtcblxuICAvL2NoYW5nZSB2ZWxvY2l0eVxuICBpZiAoa2V5cy5yaWdodC5wcmVzc2VkICYmIHBsYXllci5wb3NpdGlvbi54IDwgNDAwKSB7XG4gICAgcGxheWVyLnZlbG9jaXR5LnggPSA3O1xuICB9IGVsc2UgaWYgKGtleXMubGVmdC5wcmVzc2VkICYmIHBsYXllci5wb3NpdGlvbi54ID4gMTAwKSB7XG4gICAgcGxheWVyLnZlbG9jaXR5LnggPSAtNztcbiAgfSBlbHNlIHtcbiAgICBwbGF5ZXIudmVsb2NpdHkueCA9IDA7XG5cbiAgICBpZiAoa2V5cy5yaWdodC5wcmVzc2VkKSB7XG4gICAgICBzY3JvbGxPZmZzZXQgKz0gNztcbiAgICAgIHBsYXRmb3Jtcy5mb3JFYWNoKChwbGF0Zm9ybSkgPT4gKHBsYXRmb3JtLnBvc2l0aW9uLnggLT0gNykpO1xuICAgICAgZ2VuZXJpY09iamVjdHMuZm9yRWFjaCgoZ2VuZXJpY09iamVjdCkgPT4ge1xuICAgICAgICBnZW5lcmljT2JqZWN0LnBvc2l0aW9uLnggLT0gMjtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoa2V5cy5sZWZ0LnByZXNzZWQpIHtcbiAgICAgIHNjcm9sbE9mZnNldCAtPSA3O1xuICAgICAgZ2VuZXJpY09iamVjdHMuZm9yRWFjaCgoZ2VuZXJpY09iamVjdCkgPT4ge1xuICAgICAgICBnZW5lcmljT2JqZWN0LnBvc2l0aW9uLnggKz0gMjtcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLmZvckVhY2goKHBsYXRmb3JtKSA9PiAocGxhdGZvcm0ucG9zaXRpb24ueCArPSA3KSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcGxhdGZvcm0gY29sbGlzaW9uXG4gIHBsYXRmb3Jtcy5mb3JFYWNoKChwbGF0Zm9ybSkgPT4ge1xuICAgIGlmIChcbiAgICAgIHBsYXllci5wb3NpdGlvbi55ICsgcGxheWVyLmhlaWdodCA8PSBwbGF0Zm9ybS5wb3NpdGlvbi55ICYmXG4gICAgICBwbGF5ZXIucG9zaXRpb24ueSArIHBsYXllci5oZWlnaHQgKyBwbGF5ZXIudmVsb2NpdHkueSA+PSBwbGF0Zm9ybS5wb3NpdGlvbi55ICYmXG4gICAgICBwbGF5ZXIucG9zaXRpb24ueCArIHBsYXllci53aWR0aCA+PSBwbGF0Zm9ybS5wb3NpdGlvbi54ICYmXG4gICAgICBwbGF5ZXIucG9zaXRpb24ueCA8PSBwbGF0Zm9ybS5wb3NpdGlvbi54ICsgcGxhdGZvcm0ud2lkdGhcbiAgICApIHtcbiAgICAgIHBsYXllci52ZWxvY2l0eS55ID0gMDtcbiAgICB9XG4gIH0pO1xuXG4gIC8vd2luIGNvbmRpdGlvblxuICBpZiAoc2Nyb2xsT2Zmc2V0ID4gMjAwMCkge1xuICAgIGNvbnNvbGUubG9nKCd5b3Ugd2luJyk7XG4gIH1cbiAgLy9sb3NlIGNvbmRpdGlvblxuICBpZiAocGxheWVyLnBvc2l0aW9uLnkgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgaW5pdCgpO1xuICB9XG59XG5cbmFuaW1hdGUoKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoeyBjb2RlIH0pID0+IHtcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICBwbGF5ZXIudmVsb2NpdHkueSAtPSAyMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICBjb25zb2xlLmxvZygn0JLQvdC40LcnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICBrZXlzLmxlZnQucHJlc3NlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgIGtleXMucmlnaHQucHJlc3NlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgfVxufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICh7IGNvZGUgfSkgPT4ge1xuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAga2V5cy5sZWZ0LnByZXNzZWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAga2V5cy5yaWdodC5wcmVzc2VkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=