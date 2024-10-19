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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst StaffLoginPage = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const username = e.target.email.value; // Assuming you're using the email input for the username\n        const password = e.target.password.value;\n        // Construct the URL with username and password as params\n        const url = \"/api/login/\".concat(username, \"/\").concat(password);\n        try {\n            const response = await fetch(url, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await response.json();\n            if (response.ok) {\n                // Redirect to dashboard or handle successful login\n                console.log(\"Login successful:\", data);\n                const role = \"staff\"; // Define the role or fetch it based on your logic\n                router.push(\"/login/\".concat(role, \"/table\")); // Navigates to /login/staff/table\n            } else {\n                // Handle error messages\n                console.error(\"Login failed:\", data.message);\n                alert(data.message); // Display the error message to the user\n            }\n        } catch (error) {\n            console.error(\"Error logging in:\", error);\n            alert(\"An error occurred while logging in.\"); // Generic error message\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen bg-black\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold text-center text-white mb-8\",\n                    children: \"Staff Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, undefined),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-500 text-center mb-4\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                    lineNumber: 53,\n                    columnNumber: 27\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"space-y-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"username\",\n                                    className: \"block text-gray-300 font-semibold\",\n                                    children: \"Username\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"username\",\n                                    className: \"w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500\",\n                                    value: username,\n                                    onChange: (e)=>setUsername(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"password\",\n                                    className: \"block text-gray-300 font-semibold\",\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"password\",\n                                    className: \"w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-semibold transition duration-300\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(StaffLoginPage, \"mIl+G8X2bH67SDikwyXr8l+YDJ0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = StaffLoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StaffLoginPage);\nvar _c;\n$RefreshReg$(_c, \"StaffLoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9zdGFmZi9sb2dpbi9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFaUM7QUFDVztBQUNsQjtBQUUxQixNQUFNRyxpQkFBaUI7O0lBQ25CLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNVyxlQUFlLE9BQU9DO1FBQ3hCQSxFQUFFQyxjQUFjO1FBRWhCLE1BQU1SLFdBQVdPLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLEVBQUUseURBQXlEO1FBQ2hHLE1BQU1ULFdBQVdLLEVBQUVFLE1BQU0sQ0FBQ1AsUUFBUSxDQUFDUyxLQUFLO1FBRXhDLHlEQUF5RDtRQUN6RCxNQUFNQyxNQUFNLGNBQTBCVixPQUFaRixVQUFTLEtBQVksT0FBVEU7UUFFdEMsSUFBSTtZQUNBLE1BQU1XLFdBQVcsTUFBTUMsTUFBTUYsS0FBSztnQkFDOUJHLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtZQUNKO1lBRUEsTUFBTUMsT0FBTyxNQUFNSixTQUFTSyxJQUFJO1lBRWhDLElBQUlMLFNBQVNNLEVBQUUsRUFBRTtnQkFDYixtREFBbUQ7Z0JBQ25EQyxRQUFRQyxHQUFHLENBQUMscUJBQXFCSjtnQkFDakMsTUFBTUssT0FBTyxTQUFTLGtEQUFrRDtnQkFDeEV2QixPQUFPd0IsSUFBSSxDQUFDLFVBQWUsT0FBTEQsTUFBSyxZQUFVLGtDQUFrQztZQUMzRSxPQUFPO2dCQUNILHdCQUF3QjtnQkFDeEJGLFFBQVFoQixLQUFLLENBQUMsaUJBQWlCYSxLQUFLTyxPQUFPO2dCQUMzQ0MsTUFBTVIsS0FBS08sT0FBTyxHQUFHLHdDQUF3QztZQUNqRTtRQUNKLEVBQUUsT0FBT3BCLE9BQU87WUFDWmdCLFFBQVFoQixLQUFLLENBQUMscUJBQXFCQTtZQUNuQ3FCLE1BQU0sd0NBQXdDLHdCQUF3QjtRQUMxRTtJQUNKO0lBR0EscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBaUQ7Ozs7OztnQkFDOUR2Qix1QkFBUyw4REFBQ3lCO29CQUFFRixXQUFVOzhCQUFpQ3ZCOzs7Ozs7OEJBQ3hELDhEQUFDMEI7b0JBQUtDLFVBQVV6QjtvQkFBY3FCLFdBQVU7O3NDQUNwQyw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDSztvQ0FBTUMsU0FBUTtvQ0FBV04sV0FBVTs4Q0FBb0M7Ozs7Ozs4Q0FDeEUsOERBQUNPO29DQUNHQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIVCxXQUFVO29DQUNWaEIsT0FBT1g7b0NBQ1BxQyxVQUFVLENBQUM5QixJQUFNTixZQUFZTSxFQUFFRSxNQUFNLENBQUNFLEtBQUs7b0NBQzNDMkIsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ1o7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDSztvQ0FBTUMsU0FBUTtvQ0FBV04sV0FBVTs4Q0FBb0M7Ozs7Ozs4Q0FDeEUsOERBQUNPO29DQUNHQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIVCxXQUFVO29DQUNWaEIsT0FBT1Q7b0NBQ1BtQyxVQUFVLENBQUM5QixJQUFNSixZQUFZSSxFQUFFRSxNQUFNLENBQUNFLEtBQUs7b0NBQzNDMkIsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ0M7NEJBQ0dKLE1BQUs7NEJBQ0xSLFdBQVU7c0NBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JCO0dBaEZNN0I7O1FBQ2FGLHNEQUFTQTs7O0tBRHRCRTtBQWtGTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbG9naW4vc3RhZmYvbG9naW4vcGFnZS5qcz8wNjNlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU3RhZmZMb2dpblBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBlLnRhcmdldC5lbWFpbC52YWx1ZTsgLy8gQXNzdW1pbmcgeW91J3JlIHVzaW5nIHRoZSBlbWFpbCBpbnB1dCBmb3IgdGhlIHVzZXJuYW1lXHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBlLnRhcmdldC5wYXNzd29yZC52YWx1ZTtcclxuICAgIFxyXG4gICAgICAgIC8vIENvbnN0cnVjdCB0aGUgVVJMIHdpdGggdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGFzIHBhcmFtc1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAvYXBpL2xvZ2luLyR7dXNlcm5hbWV9LyR7cGFzc3dvcmR9YDtcclxuICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgLy8gWW91IGNhbiBrZWVwIFBPU1QsIGJ1dCBub3cgaXQgb25seSBoYXMgcGFyYW1zXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0byBkYXNoYm9hcmQgb3IgaGFuZGxlIHN1Y2Nlc3NmdWwgbG9naW5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzZnVsOicsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9sZSA9IFwic3RhZmZcIjsgLy8gRGVmaW5lIHRoZSByb2xlIG9yIGZldGNoIGl0IGJhc2VkIG9uIHlvdXIgbG9naWNcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvbG9naW4vJHtyb2xlfS90YWJsZWApOyAvLyBOYXZpZ2F0ZXMgdG8gL2xvZ2luL3N0YWZmL3RhYmxlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3IgbWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGZhaWxlZDonLCBkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKTsgLy8gRGlzcGxheSB0aGUgZXJyb3IgbWVzc2FnZSB0byB0aGUgdXNlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9nZ2luZyBpbjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2dnaW5nIGluLicpOyAvLyBHZW5lcmljIGVycm9yIG1lc3NhZ2VcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1ibGFja1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHAtOCByb3VuZGVkLWxnIHNoYWRvdy1sZyB3LWZ1bGwgbWF4LXctbWRcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBtYi04XCI+U3RhZmYgTG9naW48L2gxPlxyXG4gICAgICAgICAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LWNlbnRlciBtYi00XCI+e2Vycm9yfTwvcD59XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS0zMDAgZm9udC1zZW1pYm9sZFwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTMgYmctZ3JheS05MDAgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXRlYWwtNTAwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTMwMCBmb250LXNlbWlib2xkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTMgYmctZ3JheS05MDAgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXRlYWwtNTAwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXRlYWwtNTAwIGhvdmVyOmJnLXRlYWwtNjAwIHRleHQtd2hpdGUgcHktMyByb3VuZGVkLWxnIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhZmZMb2dpblBhZ2U7XHJcblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsIlN0YWZmTG9naW5QYWdlIiwicm91dGVyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZW1haWwiLCJ2YWx1ZSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJvayIsImNvbnNvbGUiLCJsb2ciLCJyb2xlIiwicHVzaCIsIm1lc3NhZ2UiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/staff/login/page.js\n"));

/***/ })

});