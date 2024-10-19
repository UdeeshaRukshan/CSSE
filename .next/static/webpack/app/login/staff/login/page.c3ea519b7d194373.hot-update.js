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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst StaffLoginPage = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const username = e.target.username.value;\n        const password = e.target.password.value;\n        const url = \"http://localhost:4000/api/staff/login/\".concat(username, \"/\").concat(password);\n        try {\n            const response = await fetch(url, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await response.json();\n            console.log(data);\n            if (response.ok) {\n                sessionStorage.setItem(\"user\", JSON.stringify({\n                    ...data.user,\n                    isLoggedIn: true\n                }));\n                console.log(\"Login successful:\", data);\n            //router.push('/login/staff/dashboard');\n            } else {\n                console.error(\"Login failed:\", data.message);\n                setError(data.message);\n                alert(data.message);\n            }\n        } catch (error) {\n            console.error(\"Error logging in:\", error);\n            alert(\"An error occurred while logging in.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg transform transition-all hover:scale-105\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl font-bold text-center text-white mb-10\",\n                    children: \"Staff Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/nikleshfernando/Desktop/SLIIT_UNI/CSSE/CSSE/app/login/staff/login/page.js\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, undefined),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-500 text-center mb-6\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/Users/nikleshfernando/Desktop/SLIIT_UNI/CSSE/CSSE/app/login/staff/login/page.js\",\n                    lineNumber: 53,\n                    columnNumber: 27\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"space-y-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"username\",\n                                    className: \"block text-gray-400 font-semibold text-lg\",\n                                    children: \"Username\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nikleshfernando/Desktop/SLIIT_UNI/CSSE/CSSE/app/login/staff/login/page.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"username\",\n                                    name: \"username\",\n                                    className: \"w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300\",\n                                    placeholder: \"Enter your username\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/nikleshfernando/Desktop/SLIIT_UNI/CSSE/CSSE/app/login/staff/login/page.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nikleshfernando/Desktop/SLIIT_UNI/CSSE/CSSE/app/login/staff/login/page.js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"password\",\n                                    className: \"block text-gray-400 font-semibold text-lg\",\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nikleshfernando/Desktop/SLIIT_UNI/CSSE/CSSE/app/login/staff/login/page.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"password\",\n                                    name: \"password\",\n                                    className: \"w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300\",\n                                    placeholder: \"Enter your password\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/nikleshfernando/Desktop/SLIIT_UNI/CSSE/CSSE/app/login/staff/login/page.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nikleshfernando/Desktop/SLIIT_UNI/CSSE/CSSE/app/login/staff/login/page.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-lg font-bold text-lg shadow-md transition duration-300\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nikleshfernando/Desktop/SLIIT_UNI/CSSE/CSSE/app/login/staff/login/page.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nikleshfernando/Desktop/SLIIT_UNI/CSSE/CSSE/app/login/staff/login/page.js\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nikleshfernando/Desktop/SLIIT_UNI/CSSE/CSSE/app/login/staff/login/page.js\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/nikleshfernando/Desktop/SLIIT_UNI/CSSE/CSSE/app/login/staff/login/page.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(StaffLoginPage, \"jX7QhksAx8DWV5jQdt2FIoA9B7A=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = StaffLoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StaffLoginPage);\nvar _c;\n$RefreshReg$(_c, \"StaffLoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9zdGFmZi9sb2dpbi9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFaUM7QUFDVztBQUNsQjtBQUUxQixNQUFNRyxpQkFBaUI7O0lBQ25CLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFFbkMsTUFBTU8sZUFBZSxPQUFPQztRQUN4QkEsRUFBRUMsY0FBYztRQUVoQixNQUFNQyxXQUFXRixFQUFFRyxNQUFNLENBQUNELFFBQVEsQ0FBQ0UsS0FBSztRQUN4QyxNQUFNQyxXQUFXTCxFQUFFRyxNQUFNLENBQUNFLFFBQVEsQ0FBQ0QsS0FBSztRQUV4QyxNQUFNRSxNQUFNLHlDQUFxREQsT0FBWkgsVUFBUyxLQUFZLE9BQVRHO1FBRWpFLElBQUk7WUFDQSxNQUFNRSxXQUFXLE1BQU1DLE1BQU1GLEtBQUs7Z0JBQzlCRyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7WUFDSjtZQUVBLE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtZQUNoQ0MsUUFBUUMsR0FBRyxDQUFDSDtZQUVaLElBQUlKLFNBQVNRLEVBQUUsRUFBRTtnQkFDYkMsZUFBZUMsT0FBTyxDQUFDLFFBQVFDLEtBQUtDLFNBQVMsQ0FBQztvQkFDMUMsR0FBR1IsS0FBS1MsSUFBSTtvQkFDWkMsWUFBWTtnQkFDaEI7Z0JBRUFSLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJIO1lBQ2pDLHdDQUF3QztZQUM1QyxPQUFPO2dCQUNIRSxRQUFRaEIsS0FBSyxDQUFDLGlCQUFpQmMsS0FBS1csT0FBTztnQkFDM0N4QixTQUFTYSxLQUFLVyxPQUFPO2dCQUNyQkMsTUFBTVosS0FBS1csT0FBTztZQUN0QjtRQUNKLEVBQUUsT0FBT3pCLE9BQU87WUFDWmdCLFFBQVFoQixLQUFLLENBQUMscUJBQXFCQTtZQUNuQzBCLE1BQU07UUFDVjtJQUNKO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBa0Q7Ozs7OztnQkFDL0Q1Qix1QkFBUyw4REFBQzhCO29CQUFFRixXQUFVOzhCQUFpQzVCOzs7Ozs7OEJBQ3hELDhEQUFDK0I7b0JBQUtDLFVBQVU5QjtvQkFBYzBCLFdBQVU7O3NDQUNwQyw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDSztvQ0FBTUMsU0FBUTtvQ0FBV04sV0FBVTs4Q0FBNEM7Ozs7Ozs4Q0FDaEYsOERBQUNPO29DQUNHQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIQyxNQUFLO29DQUNMVixXQUFVO29DQUNWVyxhQUFZO29DQUNaQyxRQUFROzs7Ozs7Ozs7Ozs7c0NBR2hCLDhEQUFDYjs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNLO29DQUFNQyxTQUFRO29DQUFXTixXQUFVOzhDQUE0Qzs7Ozs7OzhDQUNoRiw4REFBQ087b0NBQ0dDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hDLE1BQUs7b0NBQ0xWLFdBQVU7b0NBQ1ZXLGFBQVk7b0NBQ1pDLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHaEIsOERBQUNDOzRCQUNHTCxNQUFLOzRCQUNMUixXQUFVO3NDQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQjtHQWhGTTlCOztRQUNhRixzREFBU0E7OztLQUR0QkU7QUFrRk4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xvZ2luL3N0YWZmL2xvZ2luL3BhZ2UuanM/MDYzZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN0YWZmTG9naW5QYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBlLnRhcmdldC51c2VybmFtZS52YWx1ZTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBlLnRhcmdldC5wYXNzd29yZC52YWx1ZTtcblxuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9zdGFmZi9sb2dpbi8ke3VzZXJuYW1lfS8ke3Bhc3N3b3JkfWA7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWVcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luIHN1Y2Nlc3NmdWw6JywgZGF0YSk7XG4gICAgICAgICAgICAgICAgLy9yb3V0ZXIucHVzaCgnL2xvZ2luL3N0YWZmL2Rhc2hib2FyZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdMb2dpbiBmYWlsZWQ6JywgZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2dnaW5nIGluOicsIGVycm9yKTtcbiAgICAgICAgICAgIGFsZXJ0KCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2dnaW5nIGluLicpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JheS05MDAgdG8tZ3JheS04MDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgcC04IHJvdW5kZWQtMnhsIHNoYWRvdy1sZyB3LWZ1bGwgbWF4LXctbGcgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGhvdmVyOnNjYWxlLTEwNVwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBtYi0xMFwiPlN0YWZmIExvZ2luPC9oMT5cbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtY2VudGVyIG1iLTZcIj57ZXJyb3J9PC9wPn1cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LThcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTQwMCBmb250LXNlbWlib2xkIHRleHQtbGdcIj5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctdGVhbC01MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTQwMCBmb250LXNlbWlib2xkIHRleHQtbGdcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTQgYmctZ3JheS04MDAgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXRlYWwtNTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdGVhbC01MDAgaG92ZXI6YmctdGVhbC02MDAgdGV4dC13aGl0ZSBweS00IHJvdW5kZWQtbGcgZm9udC1ib2xkIHRleHQtbGcgc2hhZG93LW1kIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFmZkxvZ2luUGFnZTtcblxuXG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlJlYWN0IiwiU3RhZmZMb2dpblBhZ2UiLCJyb3V0ZXIiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlcm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJvayIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsIm1lc3NhZ2UiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/staff/login/page.js\n"));

/***/ })

});