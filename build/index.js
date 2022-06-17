/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");



const App = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.scss */ "./src/components/Header.scss");




const Header = () => {
  const TabHome = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    TabHome.current.click();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    handleClick();
  });

  const openCity = (evt, cityName) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "logo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Your Logo")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    id: "tabhome",
    ref: TabHome,
    className: "tablinks home",
    onClick: e => openCity(e, 'Dashboard')
  }, "Dashboard"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "tablinks support",
    onClick: e => openCity(e, 'Support')
  }, "Support"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "tablinks settings",
    onClick: e => openCity(e, 'Settings')
  }, "Settings"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "tablinks templates",
    onClick: e => openCity(e, 'Templates')
  }, "Templates")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "Dashboard",
    className: "tabcontent"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "pheadline"
  }, "Dashboard"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "London is the capital city of England.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "Support",
    className: "tabcontent"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "pheadline"
  }, "Support"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Paris is the capital of France.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "Settings",
    className: "tabcontent"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "pheadline"
  }, "Settings"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Tokyo is the capital of Japan.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "Templates",
    className: "tabcontent"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "pheadline"
  }, "Templates"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Mogadishu is the capital of Somalia.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header.scss":
/*!************************************!*\
  !*** ./src/components/Header.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.js");


 // Render the App component into the DOM

(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById("firstplugin")); // const placeholderLabel = Platform.select({
//   native: __("Add media"),
//   web: __("Drag images, upload new ones or select files from your library."),
// });
}();
/******/ })()
;
//# sourceMappingURL=index.js.map