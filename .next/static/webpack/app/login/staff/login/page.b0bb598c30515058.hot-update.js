"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/staff/login/page",{

/***/ "(app-pages-browser)/./app/login/staff/login/page.js":
/*!***************************************!*\
  !*** ./app/login/staff/login/page.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst StaffLoginPage = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const username = e.target.username.value;\n        const password = e.target.password.value;\n        const url = \"http://localhost:4000/api/staff/login/\".concat(username, \"/\").concat(password);\n        try {\n            const response = await fetch(url, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await response.json();\n            if (response.ok) {\n                console.log(\"Login successful:\", data);\n                router.push(\"/login/staff/dashboard\");\n            } else {\n                console.error(\"Login failed:\", data.message);\n                setError(data.message);\n                alert(data.message);\n            }\n        } catch (error) {\n            console.error(\"Error logging in:\", error);\n            alert(\"An error occurred while logging in.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg transform transition-all hover:scale-105\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl font-bold text-center text-white mb-10\",\n                    children: \"Staff Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, undefined),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-500 text-center mb-6\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                    lineNumber: 47,\n                    columnNumber: 27\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"space-y-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"username\",\n                                    className: \"block text-gray-400 font-semibold text-lg\",\n                                    children: \"Username\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"username\",\n                                    name: \"username\",\n                                    className: \"w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300\",\n                                    placeholder: \"Enter your username\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"password\",\n                                    className: \"block text-gray-400 font-semibold text-lg\",\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"password\",\n                                    name: \"password\",\n                                    className: \"w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300\",\n                                    placeholder: \"Enter your password\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-lg font-bold text-lg shadow-md transition duration-300\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s(StaffLoginPage, \"jX7QhksAx8DWV5jQdt2FIoA9B7A=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = StaffLoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StaffLoginPage);\nvar _c;\n$RefreshReg$(_c, \"StaffLoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9zdGFmZi9sb2dpbi9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFaUM7QUFDVztBQUNsQjtBQUUxQixNQUFNRyxpQkFBaUI7O0lBQ25CLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFFbkMsTUFBTU8sZUFBZSxPQUFPQztRQUN4QkEsRUFBRUMsY0FBYztRQUVoQixNQUFNQyxXQUFXRixFQUFFRyxNQUFNLENBQUNELFFBQVEsQ0FBQ0UsS0FBSztRQUN4QyxNQUFNQyxXQUFXTCxFQUFFRyxNQUFNLENBQUNFLFFBQVEsQ0FBQ0QsS0FBSztRQUV4QyxNQUFNRSxNQUFNLHlDQUFxREQsT0FBWkgsVUFBUyxLQUFZLE9BQVRHO1FBRWpFLElBQUk7WUFDQSxNQUFNRSxXQUFXLE1BQU1DLE1BQU1GLEtBQUs7Z0JBQzlCRyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7WUFDSjtZQUVBLE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtZQUVoQyxJQUFJTCxTQUFTTSxFQUFFLEVBQUU7Z0JBQ2JDLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJKO2dCQUNqQ2YsT0FBT29CLElBQUksQ0FBRTtZQUNqQixPQUFPO2dCQUNIRixRQUFRakIsS0FBSyxDQUFDLGlCQUFpQmMsS0FBS00sT0FBTztnQkFDM0NuQixTQUFTYSxLQUFLTSxPQUFPO2dCQUNyQkMsTUFBTVAsS0FBS00sT0FBTztZQUN0QjtRQUNKLEVBQUUsT0FBT3BCLE9BQU87WUFDWmlCLFFBQVFqQixLQUFLLENBQUMscUJBQXFCQTtZQUNuQ3FCLE1BQU07UUFDVjtJQUNKO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBa0Q7Ozs7OztnQkFDL0R2Qix1QkFBUyw4REFBQ3lCO29CQUFFRixXQUFVOzhCQUFpQ3ZCOzs7Ozs7OEJBQ3hELDhEQUFDMEI7b0JBQUtDLFVBQVV6QjtvQkFBY3FCLFdBQVU7O3NDQUNwQyw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDSztvQ0FBTUMsU0FBUTtvQ0FBV04sV0FBVTs4Q0FBNEM7Ozs7Ozs4Q0FDaEYsOERBQUNPO29DQUNHQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIQyxNQUFLO29DQUNMVixXQUFVO29DQUNWVyxhQUFZO29DQUNaQyxRQUFROzs7Ozs7Ozs7Ozs7c0NBR2hCLDhEQUFDYjs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNLO29DQUFNQyxTQUFRO29DQUFXTixXQUFVOzhDQUE0Qzs7Ozs7OzhDQUNoRiw4REFBQ087b0NBQ0dDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hDLE1BQUs7b0NBQ0xWLFdBQVU7b0NBQ1ZXLGFBQVk7b0NBQ1pDLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHaEIsOERBQUNDOzRCQUNHTCxNQUFLOzRCQUNMUixXQUFVO3NDQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQjtHQTFFTXpCOztRQUNhRixzREFBU0E7OztLQUR0QkU7QUE0RU4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xvZ2luL3N0YWZmL2xvZ2luL3BhZ2UuanM/MDYzZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFN0YWZmTG9naW5QYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGUudGFyZ2V0LnVzZXJuYW1lLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gZS50YXJnZXQucGFzc3dvcmQudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3N0YWZmL2xvZ2luLyR7dXNlcm5hbWV9LyR7cGFzc3dvcmR9YDtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzZnVsOicsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9sb2dpbi9zdGFmZi9kYXNoYm9hcmRgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGZhaWxlZDonLCBkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2dnaW5nIGluOicsIGVycm9yKTtcclxuICAgICAgICAgICAgYWxlcnQoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGxvZ2dpbmcgaW4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JheS05MDAgdG8tZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCBwLTggcm91bmRlZC0yeGwgc2hhZG93LWxnIHctZnVsbCBtYXgtdy1sZyB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgaG92ZXI6c2NhbGUtMTA1XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtd2hpdGUgbWItMTBcIj5TdGFmZiBMb2dpbjwvaDE+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtY2VudGVyIG1iLTZcIj57ZXJyb3J9PC9wPn1cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTQwMCBmb250LXNlbWlib2xkIHRleHQtbGdcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTQgYmctZ3JheS04MDAgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXRlYWwtNTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS00MDAgZm9udC1zZW1pYm9sZCB0ZXh0LWxnXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctdGVhbC01MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXRlYWwtNTAwIGhvdmVyOmJnLXRlYWwtNjAwIHRleHQtd2hpdGUgcHktNCByb3VuZGVkLWxnIGZvbnQtYm9sZCB0ZXh0LWxnIHNoYWRvdy1tZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFmZkxvZ2luUGFnZTtcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiUmVhY3QiLCJTdGFmZkxvZ2luUGFnZSIsInJvdXRlciIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsInRhcmdldCIsInZhbHVlIiwicGFzc3dvcmQiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwib2siLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIm1lc3NhZ2UiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/staff/login/page.js\n"));

/***/ })

});