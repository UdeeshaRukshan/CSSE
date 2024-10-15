"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/country-flag-icons";
exports.ids = ["vendor-chunks/country-flag-icons"];
exports.modules = {

/***/ "(ssr)/./node_modules/country-flag-icons/modules/unicode.js":
/*!************************************************************!*\
  !*** ./node_modules/country-flag-icons/modules/unicode.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCountryFlag)\n/* harmony export */ });\n/**\r\n * Creates Unicode flag from a two-letter ISO country code.\r\n * https://stackoverflow.com/questions/24050671/how-to-put-japan-flag-character-in-a-string\r\n * @param  {string} country — A two-letter ISO country code (case-insensitive).\r\n * @return {string}\r\n */\nfunction getCountryFlag(country) {\n  return getRegionalIndicatorSymbol(country[0]) + getRegionalIndicatorSymbol(country[1]);\n}\n/**\r\n * Converts a letter to a Regional Indicator Symbol.\r\n * @param  {string} letter\r\n * @return {string}\r\n */\n\nfunction getRegionalIndicatorSymbol(letter) {\n  return String.fromCodePoint(0x1F1E6 - 65 + letter.toUpperCase().charCodeAt(0));\n}\n//# sourceMappingURL=unicode.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY291bnRyeS1mbGFnLWljb25zL21vZHVsZXMvdW5pY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVk7QUFDWjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZXB1bHNlLy4vbm9kZV9tb2R1bGVzL2NvdW50cnktZmxhZy1pY29ucy9tb2R1bGVzL3VuaWNvZGUuanM/ZGMzMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlcyBVbmljb2RlIGZsYWcgZnJvbSBhIHR3by1sZXR0ZXIgSVNPIGNvdW50cnkgY29kZS5cclxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQwNTA2NzEvaG93LXRvLXB1dC1qYXBhbi1mbGFnLWNoYXJhY3Rlci1pbi1hLXN0cmluZ1xyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvdW50cnkg4oCUIEEgdHdvLWxldHRlciBJU08gY291bnRyeSBjb2RlIChjYXNlLWluc2Vuc2l0aXZlKS5cclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvdW50cnlGbGFnKGNvdW50cnkpIHtcbiAgcmV0dXJuIGdldFJlZ2lvbmFsSW5kaWNhdG9yU3ltYm9sKGNvdW50cnlbMF0pICsgZ2V0UmVnaW9uYWxJbmRpY2F0b3JTeW1ib2woY291bnRyeVsxXSk7XG59XG4vKipcclxuICogQ29udmVydHMgYSBsZXR0ZXIgdG8gYSBSZWdpb25hbCBJbmRpY2F0b3IgU3ltYm9sLlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGxldHRlclxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRSZWdpb25hbEluZGljYXRvclN5bWJvbChsZXR0ZXIpIHtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50KDB4MUYxRTYgLSA2NSArIGxldHRlci50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5pY29kZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/country-flag-icons/modules/unicode.js\n");

/***/ })

};
;