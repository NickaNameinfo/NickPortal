"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-callback-ref";
exports.ids = ["vendor-chunks/use-callback-ref"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es2015/assignRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/assignRef.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assignRef: () => (/* binding */ assignRef)\n/* harmony export */ });\n/**\n * Assigns a value for a given ref, no matter of the ref format\n * @param {RefObject} ref - a callback function or ref object\n * @param value - a new value\n *\n * @see https://github.com/theKashey/use-callback-ref#assignref\n * @example\n * const refObject = useRef();\n * const refFn = (ref) => {....}\n *\n * assignRef(refObject, \"refValue\");\n * assignRef(refFn, \"refValue\");\n */ function assignRef(ref, value) {\n    if (typeof ref === \"function\") {\n        ref(value);\n    } else if (ref) {\n        ref.current = value;\n    }\n    return ref;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS9hc3NpZ25SZWYuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7Q0FZQyxHQUNNLFNBQVNBLFVBQVVDLEdBQUcsRUFBRUMsS0FBSztJQUNoQyxJQUFJLE9BQU9ELFFBQVEsWUFBWTtRQUMzQkEsSUFBSUM7SUFDUixPQUNLLElBQUlELEtBQUs7UUFDVkEsSUFBSUUsT0FBTyxHQUFHRDtJQUNsQjtJQUNBLE9BQU9EO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctcG9ydGFsLy4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvYXNzaWduUmVmLmpzPzBhNDIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBc3NpZ25zIGEgdmFsdWUgZm9yIGEgZ2l2ZW4gcmVmLCBubyBtYXR0ZXIgb2YgdGhlIHJlZiBmb3JtYXRcbiAqIEBwYXJhbSB7UmVmT2JqZWN0fSByZWYgLSBhIGNhbGxiYWNrIGZ1bmN0aW9uIG9yIHJlZiBvYmplY3RcbiAqIEBwYXJhbSB2YWx1ZSAtIGEgbmV3IHZhbHVlXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdGhlS2FzaGV5L3VzZS1jYWxsYmFjay1yZWYjYXNzaWducmVmXG4gKiBAZXhhbXBsZVxuICogY29uc3QgcmVmT2JqZWN0ID0gdXNlUmVmKCk7XG4gKiBjb25zdCByZWZGbiA9IChyZWYpID0+IHsuLi4ufVxuICpcbiAqIGFzc2lnblJlZihyZWZPYmplY3QsIFwicmVmVmFsdWVcIik7XG4gKiBhc3NpZ25SZWYocmVmRm4sIFwicmVmVmFsdWVcIik7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25SZWYocmVmLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlZih2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlZikge1xuICAgICAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVmO1xufVxuIl0sIm5hbWVzIjpbImFzc2lnblJlZiIsInJlZiIsInZhbHVlIiwiY3VycmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es2015/assignRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es2015/useMergeRef.js":
/*!******************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useMergeRef.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useMergeRefs: () => (/* binding */ useMergeRefs)\n/* harmony export */ });\n/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es2015/assignRef.js\");\n/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es2015/useRef.js\");\n\n\n/**\n * Merges two or more refs together providing a single interface to set their value\n * @param {RefObject|Ref} refs\n * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}\n *\n * @see {@link mergeRefs} a version without buit-in memoization\n * @see https://github.com/theKashey/use-callback-ref#usemergerefs\n * @example\n * const Component = React.forwardRef((props, ref) => {\n *   const ownRef = useRef();\n *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together\n *   return <div ref={domRef}>...</div>\n * }\n */ function useMergeRefs(refs, defaultValue) {\n    return (0,_useRef__WEBPACK_IMPORTED_MODULE_0__.useCallbackRef)(defaultValue || null, function(newValue) {\n        return refs.forEach(function(ref) {\n            return (0,_assignRef__WEBPACK_IMPORTED_MODULE_1__.assignRef)(ref, newValue);\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS91c2VNZXJnZVJlZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFDRTtBQUMxQzs7Ozs7Ozs7Ozs7OztDQWFDLEdBQ00sU0FBU0UsYUFBYUMsSUFBSSxFQUFFQyxZQUFZO0lBQzNDLE9BQU9ILHVEQUFjQSxDQUFDRyxnQkFBZ0IsTUFBTSxTQUFVQyxRQUFRO1FBQUksT0FBT0YsS0FBS0csT0FBTyxDQUFDLFNBQVVDLEdBQUc7WUFBSSxPQUFPUCxxREFBU0EsQ0FBQ08sS0FBS0Y7UUFBVztJQUFJO0FBQ2hKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3LXBvcnRhbC8uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXMyMDE1L3VzZU1lcmdlUmVmLmpzPzlmNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXNzaWduUmVmIH0gZnJvbSAnLi9hc3NpZ25SZWYnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2tSZWYgfSBmcm9tICcuL3VzZVJlZic7XG4vKipcbiAqIE1lcmdlcyB0d28gb3IgbW9yZSByZWZzIHRvZ2V0aGVyIHByb3ZpZGluZyBhIHNpbmdsZSBpbnRlcmZhY2UgdG8gc2V0IHRoZWlyIHZhbHVlXG4gKiBAcGFyYW0ge1JlZk9iamVjdHxSZWZ9IHJlZnNcbiAqIEByZXR1cm5zIHtNdXRhYmxlUmVmT2JqZWN0fSAtIGEgbmV3IHJlZiwgd2hpY2ggdHJhbnNsYXRlcyBhbGwgY2hhbmdlcyB0byB7cmVmc31cbiAqXG4gKiBAc2VlIHtAbGluayBtZXJnZVJlZnN9IGEgdmVyc2lvbiB3aXRob3V0IGJ1aXQtaW4gbWVtb2l6YXRpb25cbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3RoZUthc2hleS91c2UtY2FsbGJhY2stcmVmI3VzZW1lcmdlcmVmc1xuICogQGV4YW1wbGVcbiAqIGNvbnN0IENvbXBvbmVudCA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAqICAgY29uc3Qgb3duUmVmID0gdXNlUmVmKCk7XG4gKiAgIGNvbnN0IGRvbVJlZiA9IHVzZU1lcmdlUmVmcyhbcmVmLCBvd25SZWZdKTsgLy8g8J+RiCBtZXJnZSB0b2dldGhlclxuICogICByZXR1cm4gPGRpdiByZWY9e2RvbVJlZn0+Li4uPC9kaXY+XG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZVJlZnMocmVmcywgZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrUmVmKGRlZmF1bHRWYWx1ZSB8fCBudWxsLCBmdW5jdGlvbiAobmV3VmFsdWUpIHsgcmV0dXJuIHJlZnMuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7IHJldHVybiBhc3NpZ25SZWYocmVmLCBuZXdWYWx1ZSk7IH0pOyB9KTtcbn1cbiJdLCJuYW1lcyI6WyJhc3NpZ25SZWYiLCJ1c2VDYWxsYmFja1JlZiIsInVzZU1lcmdlUmVmcyIsInJlZnMiLCJkZWZhdWx0VmFsdWUiLCJuZXdWYWx1ZSIsImZvckVhY2giLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es2015/useMergeRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es2015/useRef.js":
/*!*************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useRef.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCallbackRef: () => (/* binding */ useCallbackRef)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * creates a MutableRef with ref change callback\n * @param initialValue - initial ref value\n * @param {Function} callback - a callback to run when value changes\n *\n * @example\n * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);\n * ref.current = 1;\n * // prints 0 -> 1\n *\n * @see https://reactjs.org/docs/hooks-reference.html#useref\n * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref\n * @returns {MutableRefObject}\n */ function useCallbackRef(initialValue, callback) {\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function() {\n        return {\n            // value\n            value: initialValue,\n            // last callback\n            callback: callback,\n            // \"memoized\" public interface\n            facade: {\n                get current () {\n                    return ref.value;\n                },\n                set current (value){\n                    var last = ref.value;\n                    if (last !== value) {\n                        ref.value = value;\n                        ref.callback(value, last);\n                    }\n                }\n            }\n        };\n    })[0];\n    // update callback\n    ref.callback = callback;\n    return ref.facade;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS91c2VSZWYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBQ2pDOzs7Ozs7Ozs7Ozs7O0NBYUMsR0FDTSxTQUFTQyxlQUFlQyxZQUFZLEVBQUVDLFFBQVE7SUFDakQsSUFBSUMsTUFBTUosK0NBQVFBLENBQUM7UUFBYyxPQUFRO1lBQ3JDLFFBQVE7WUFDUkssT0FBT0g7WUFDUCxnQkFBZ0I7WUFDaEJDLFVBQVVBO1lBQ1YsOEJBQThCO1lBQzlCRyxRQUFRO2dCQUNKLElBQUlDLFdBQVU7b0JBQ1YsT0FBT0gsSUFBSUMsS0FBSztnQkFDcEI7Z0JBQ0EsSUFBSUUsU0FBUUYsTUFBTztvQkFDZixJQUFJRyxPQUFPSixJQUFJQyxLQUFLO29CQUNwQixJQUFJRyxTQUFTSCxPQUFPO3dCQUNoQkQsSUFBSUMsS0FBSyxHQUFHQTt3QkFDWkQsSUFBSUQsUUFBUSxDQUFDRSxPQUFPRztvQkFDeEI7Z0JBQ0o7WUFDSjtRQUNKO0lBQUksRUFBRSxDQUFDLEVBQUU7SUFDVCxrQkFBa0I7SUFDbEJKLElBQUlELFFBQVEsR0FBR0E7SUFDZixPQUFPQyxJQUFJRSxNQUFNO0FBQ3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3LXBvcnRhbC8uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXMyMDE1L3VzZVJlZi5qcz8zODlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBjcmVhdGVzIGEgTXV0YWJsZVJlZiB3aXRoIHJlZiBjaGFuZ2UgY2FsbGJhY2tcbiAqIEBwYXJhbSBpbml0aWFsVmFsdWUgLSBpbml0aWFsIHJlZiB2YWx1ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBhIGNhbGxiYWNrIHRvIHJ1biB3aGVuIHZhbHVlIGNoYW5nZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgcmVmID0gdXNlQ2FsbGJhY2tSZWYoMCwgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4gY29uc29sZS5sb2cob2xkVmFsdWUsICctPicsIG5ld1ZhbHVlKTtcbiAqIHJlZi5jdXJyZW50ID0gMTtcbiAqIC8vIHByaW50cyAwIC0+IDFcbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ob29rcy1yZWZlcmVuY2UuaHRtbCN1c2VyZWZcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3RoZUthc2hleS91c2UtY2FsbGJhY2stcmVmI3VzZWNhbGxiYWNrcmVmLS0tdG8tcmVwbGFjZS1yZWFjdHVzZXJlZlxuICogQHJldHVybnMge011dGFibGVSZWZPYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDYWxsYmFja1JlZihpbml0aWFsVmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlZiA9IHVzZVN0YXRlKGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gICAgICAgIC8vIHZhbHVlXG4gICAgICAgIHZhbHVlOiBpbml0aWFsVmFsdWUsXG4gICAgICAgIC8vIGxhc3QgY2FsbGJhY2tcbiAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAvLyBcIm1lbW9pemVkXCIgcHVibGljIGludGVyZmFjZVxuICAgICAgICBmYWNhZGU6IHtcbiAgICAgICAgICAgIGdldCBjdXJyZW50KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWYudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0IGN1cnJlbnQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFzdCA9IHJlZi52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5jYWxsYmFjayh2YWx1ZSwgbGFzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTsgfSlbMF07XG4gICAgLy8gdXBkYXRlIGNhbGxiYWNrXG4gICAgcmVmLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIHJlZi5mYWNhZGU7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VDYWxsYmFja1JlZiIsImluaXRpYWxWYWx1ZSIsImNhbGxiYWNrIiwicmVmIiwidmFsdWUiLCJmYWNhZGUiLCJjdXJyZW50IiwibGFzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es2015/useRef.js\n");

/***/ })

};
;