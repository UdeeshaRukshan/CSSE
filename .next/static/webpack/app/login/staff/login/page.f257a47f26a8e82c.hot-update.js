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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst StaffLoginPage = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setUsername(e.target.username.value); // Get username from the form\n        setPassword(e.target.password.value) // Get password from the form\n        ;\n        // Construct the URL with username and password as params\n        const url = \"/api/login/\".concat(username, \"/\").concat(password);\n        try {\n            const response = await fetch(url, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await response.json();\n            if (response.ok) {\n                console.log(\"Login successful:\", data);\n                router.push(\"/login/staff/dashboard\");\n            } else {\n                console.error(\"Login failed:\", data.message);\n                setError(data.message); // Set the error message to state\n                alert(data.message);\n            }\n        } catch (error) {\n            console.error(\"Error logging in:\", error);\n            alert(\"An error occurred while logging in.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen bg-black\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold text-center text-white mb-8\",\n                    children: \"Staff Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, undefined),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-500 text-center mb-4\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                    lineNumber: 52,\n                    columnNumber: 27\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"space-y-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"username\",\n                                    className: \"block text-gray-300 font-semibold\",\n                                    children: \"Username\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"username\",\n                                    name: \"username\" // Add name attribute for form submission\n                                    ,\n                                    className: \"w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"password\",\n                                    className: \"block text-gray-300 font-semibold\",\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"password\",\n                                    name: \"password\" // Add name attribute for form submission\n                                    ,\n                                    className: \"w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-semibold transition duration-300\",\n                            onSubmit: handleSubmit,\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n            lineNumber: 50,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\STZ\\\\OneDrive\\\\Documents\\\\Projects\\\\CSSE\\\\app\\\\login\\\\staff\\\\login\\\\page.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, undefined);\n};\n_s(StaffLoginPage, \"Go+RPU7zCZ3d+DYEy3ggQJZJL+E=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = StaffLoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StaffLoginPage);\nvar _c;\n$RefreshReg$(_c, \"StaffLoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9zdGFmZi9sb2dpbi9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFaUM7QUFDVztBQUNsQjtBQUUxQixNQUFNRyxpQkFBaUI7O0lBQ25CLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFFbkMsTUFBSyxDQUFDTyxVQUFTQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQUssQ0FBQ1MsVUFBU0MsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUd2QyxNQUFNVyxlQUFlLE9BQU9DO1FBQ3hCQSxFQUFFQyxjQUFjO1FBRWZMLFlBQVlJLEVBQUVFLE1BQU0sQ0FBQ1AsUUFBUSxDQUFDUSxLQUFLLEdBQUcsNkJBQTZCO1FBQ3BFTCxZQUFZRSxFQUFFRSxNQUFNLENBQUNMLFFBQVEsQ0FBQ00sS0FBSyxFQUFHLDZCQUE2Qjs7UUFFbkUseURBQXlEO1FBQ3pELE1BQU1DLE1BQU0sY0FBMEJQLE9BQVpGLFVBQVMsS0FBWSxPQUFURTtRQUV0QyxJQUFJO1lBQ0EsTUFBTVEsV0FBVyxNQUFNQyxNQUFNRixLQUFLO2dCQUM5QkcsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO1lBQ0o7WUFFQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7WUFFaEMsSUFBSUwsU0FBU00sRUFBRSxFQUFFO2dCQUNiQyxRQUFRQyxHQUFHLENBQUMscUJBQXFCSjtnQkFDakNqQixPQUFPc0IsSUFBSSxDQUFFO1lBQ2pCLE9BQU87Z0JBQ0hGLFFBQVFuQixLQUFLLENBQUMsaUJBQWlCZ0IsS0FBS00sT0FBTztnQkFDM0NyQixTQUFTZSxLQUFLTSxPQUFPLEdBQUksaUNBQWlDO2dCQUMxREMsTUFBTVAsS0FBS00sT0FBTztZQUN0QjtRQUNKLEVBQUUsT0FBT3RCLE9BQU87WUFDWm1CLFFBQVFuQixLQUFLLENBQUMscUJBQXFCQTtZQUNuQ3VCLE1BQU07UUFDVjtJQUNKO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBaUQ7Ozs7OztnQkFDOUR6Qix1QkFBUyw4REFBQzJCO29CQUFFRixXQUFVOzhCQUFpQ3pCOzs7Ozs7OEJBQ3hELDhEQUFDNEI7b0JBQUtDLFVBQVV2QjtvQkFBY21CLFdBQVU7O3NDQUNwQyw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDSztvQ0FBTUMsU0FBUTtvQ0FBV04sV0FBVTs4Q0FBb0M7Ozs7Ozs4Q0FDeEUsOERBQUNPO29DQUNHQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIQyxNQUFLLFdBQVkseUNBQXlDOztvQ0FDMURWLFdBQVU7b0NBQ1ZXLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHaEIsOERBQUNaOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0s7b0NBQU1DLFNBQVE7b0NBQVdOLFdBQVU7OENBQW9DOzs7Ozs7OENBQ3hFLDhEQUFDTztvQ0FDR0MsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSEMsTUFBSyxXQUFZLHlDQUF5Qzs7b0NBQzFEVixXQUFVO29DQUNWVyxRQUFROzs7Ozs7Ozs7Ozs7c0NBR2hCLDhEQUFDQzs0QkFDR0osTUFBSzs0QkFDTFIsV0FBVTs0QkFDVkksVUFBVXZCO3NDQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQjtHQTlFTVI7O1FBQ2FGLHNEQUFTQTs7O0tBRHRCRTtBQWdGTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbG9naW4vc3RhZmYvbG9naW4vcGFnZS5qcz8wNjNlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU3RhZmZMb2dpblBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3RbdXNlcm5hbWUsc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdFtwYXNzd29yZCxzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC51c2VybmFtZS52YWx1ZSk7IC8vIEdldCB1c2VybmFtZSBmcm9tIHRoZSBmb3JtXHJcbiAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQucGFzc3dvcmQudmFsdWUpICAvLyBHZXQgcGFzc3dvcmQgZnJvbSB0aGUgZm9ybVxyXG5cclxuICAgICAgICAvLyBDb25zdHJ1Y3QgdGhlIFVSTCB3aXRoIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBhcyBwYXJhbXNcclxuICAgICAgICBjb25zdCB1cmwgPSBgL2FwaS9sb2dpbi8ke3VzZXJuYW1lfS8ke3Bhc3N3b3JkfWA7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gc3VjY2Vzc2Z1bDonLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvbG9naW4vc3RhZmYvZGFzaGJvYXJkYCk7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTG9naW4gZmFpbGVkOicsIGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpOyAgLy8gU2V0IHRoZSBlcnJvciBtZXNzYWdlIHRvIHN0YXRlXHJcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvZ2dpbmcgaW46JywgZXJyb3IpO1xyXG4gICAgICAgICAgICBhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgbG9nZ2luZyBpbi4nKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLWJsYWNrXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgcC04IHJvdW5kZWQtbGcgc2hhZG93LWxnIHctZnVsbCBtYXgtdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIG1iLThcIj5TdGFmZiBMb2dpbjwvaDE+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtY2VudGVyIG1iLTRcIj57ZXJyb3J9PC9wPn1cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTMwMCBmb250LXNlbWlib2xkXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCIgIC8vIEFkZCBuYW1lIGF0dHJpYnV0ZSBmb3IgZm9ybSBzdWJtaXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0zIGJnLWdyYXktOTAwIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTcwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy10ZWFsLTUwMFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktMzAwIGZvbnQtc2VtaWJvbGRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCIgIC8vIEFkZCBuYW1lIGF0dHJpYnV0ZSBmb3IgZm9ybSBzdWJtaXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0zIGJnLWdyYXktOTAwIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTcwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy10ZWFsLTUwMFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdGVhbC01MDAgaG92ZXI6YmctdGVhbC02MDAgdGV4dC13aGl0ZSBweS0zIHJvdW5kZWQtbGcgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFmZkxvZ2luUGFnZTtcclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlJlYWN0IiwiU3RhZmZMb2dpblBhZ2UiLCJyb3V0ZXIiLCJlcnJvciIsInNldEVycm9yIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJvayIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwibWVzc2FnZSIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/staff/login/page.js\n"));

/***/ })

});