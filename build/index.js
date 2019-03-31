module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initState = {
  listTodos: [{
    id: 1,
    text: 'Todo 1',
    completed: true
  }, {
    id: 2,
    text: 'Todo 2',
    completed: true
  }, {
    id: 3,
    text: 'Todo 3',
    completed: false
  }]
};

var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_TODO':
      return _extends({}, state, {
        listTodos: state.listTodos.concat({
          id: action.payLoad.id,
          text: action.payLoad.text,
          completed: action.payLoad.completed
        })
      });
    case 'DONE_TODO':
      var done = state.listTodos.map(function (e) {
        if (e.id === action.payLoad.id) {
          e = _extends({}, e, { completed: action.payLoad.completed });
        }
        return e;
      });

      return _extends({}, state, {
        listTodos: done
      });
    case 'UPDATE_TODO':
      var update = state.listTodos.map(function (e) {
        if (e.id === action.payLoad.id) {
          e = _extends({}, e, { text: action.payLoad.text });
        }
        return e;
      });

      return _extends({}, state, {
        listTodos: update
      });
    case 'DELETE_TODO':
      var remove = state.listTodos.filter(function (e) {
        return e.id !== action.payLoad.id;
      });
      return _extends({}, state, {
        listTodos: remove
      });
    case 'CLEAR_DATA':
      return _extends({}, state, {
        listTodos: []
      });
    default:
      return state;
  }
};

exports.default = rootReducer;

/***/ })
/******/ ]);