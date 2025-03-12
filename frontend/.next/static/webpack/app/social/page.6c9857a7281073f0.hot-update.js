"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/social/page",{

/***/ "(app-pages-browser)/./src/app/social/page.tsx":
/*!*********************************!*\
  !*** ./src/app/social/page.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SocialPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Navbar */ \"(app-pages-browser)/./src/components/Navbar.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer */ \"(app-pages-browser)/./src/components/Footer.jsx\");\n/* harmony import */ var _components_RecFriendsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/RecFriendsList */ \"(app-pages-browser)/./src/components/RecFriendsList.tsx\");\n/* harmony import */ var _components_FriendRequests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/FriendRequests */ \"(app-pages-browser)/./src/components/FriendRequests.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst getUserIdFromToken = ()=>{\n    try {\n        const cookies = document.cookie.split(\";\");\n        const tokenCookie = cookies.find((cookie)=>cookie.trim().startsWith(\"token=\"));\n        if (!tokenCookie) return null;\n        const token = tokenCookie.split(\"=\")[1];\n        const decoded = jwt.decode(token);\n        return (decoded === null || decoded === void 0 ? void 0 : decoded.userId) || null;\n    } catch (error) {\n        console.error(\"Error parsing JWT token:\", error);\n        return null;\n    }\n};\nconst currentUserId = getUserIdFromToken();\nfunction SocialPage() {\n    _s();\n    const [recommendedFriends, setRecommendedFriends] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"SocialPage.useEffect\": ()=>{\n            // Fetch recommended friends from the backend\n            fetch(\"http://localhost:3001/api/users/\".concat(currentUserId, \"/recommended-friends\")).then({\n                \"SocialPage.useEffect\": (res)=>res.json()\n            }[\"SocialPage.useEffect\"]).then({\n                \"SocialPage.useEffect\": (data)=>{\n                    if (data.recommendedFriends) {\n                        setRecommendedFriends(data.recommendedFriends);\n                    }\n                }\n            }[\"SocialPage.useEffect\"]).catch({\n                \"SocialPage.useEffect\": (err)=>console.error(\"Error fetching recommended friends:\", err)\n            }[\"SocialPage.useEffect\"]);\n        }\n    }[\"SocialPage.useEffect\"], [\n        currentUserId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col h-screen max-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/app/social/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 flex w-full overflow-auto bg-blue-300\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RecFriendsList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        recommendedFriends: recommendedFriends,\n                        currentUserId: currentUserId\n                    }, void 0, false, {\n                        fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/app/social/page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FriendRequests__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        currentUserId: currentUserId\n                    }, void 0, false, {\n                        fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/app/social/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/app/social/page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/app/social/page.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/app/social/page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(SocialPage, \"xv2Y/EKQw3TxAZ8bV4zt9Nv9eEs=\");\n_c = SocialPage;\nvar _c;\n$RefreshReg$(_c, \"SocialPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc29jaWFsL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFFSDtBQUNBO0FBQ2dCO0FBQ0k7QUFLN0QsTUFBTU0scUJBQXFCO0lBQzNCLElBQUk7UUFDQSxNQUFNQyxVQUFVQyxTQUFTQyxNQUFNLENBQUNDLEtBQUssQ0FBQztRQUN0QyxNQUFNQyxjQUFjSixRQUFRSyxJQUFJLENBQUMsQ0FBQ0gsU0FDbENBLE9BQU9JLElBQUksR0FBR0MsVUFBVSxDQUFDO1FBR3pCLElBQUksQ0FBQ0gsYUFBYSxPQUFPO1FBRXpCLE1BQU1JLFFBQVFKLFlBQVlELEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN2QyxNQUFNTSxVQUFVQyxJQUFJQyxNQUFNLENBQUNIO1FBQzNCLE9BQU9DLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU0csTUFBTSxLQUFJO0lBQzlCLEVBQUUsT0FBT0MsT0FBTztRQUNaQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTtRQUMxQyxPQUFPO0lBQ1g7QUFDQTtBQUVBLE1BQU1FLGdCQUFnQmhCO0FBRVAsU0FBU2lCOztJQUN0QixNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXNCLEdBQUd6QiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRS9EQyxnREFBU0E7Z0NBQUM7WUFDUiw2Q0FBNkM7WUFDN0N5QixNQUFNLG1DQUFpRCxPQUFkSixlQUFjLHlCQUNwREssSUFBSTt3Q0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO3VDQUN0QkYsSUFBSTt3Q0FBQyxDQUFDRztvQkFDTCxJQUFJQSxLQUFLTixrQkFBa0IsRUFBRTt3QkFDM0JDLHNCQUFzQkssS0FBS04sa0JBQWtCO29CQUMvQztnQkFDRjt1Q0FDQ08sS0FBSzt3Q0FBQyxDQUFDQyxNQUNOWCxRQUFRRCxLQUFLLENBQUMsdUNBQXVDWTs7UUFFM0Q7K0JBQUc7UUFBQ1Y7S0FBYztJQUVsQixxQkFDRSw4REFBQ1c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNoQywwREFBTUE7Ozs7OzBCQUNQLDhEQUFDK0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDOUIsa0VBQWNBO3dCQUNib0Isb0JBQW9CQTt3QkFDcEJGLGVBQWVBOzs7Ozs7a0NBRWpCLDhEQUFDakIsa0VBQWtCQTt3QkFBQ2lCLGVBQWVBOzs7Ozs7Ozs7Ozs7MEJBRXJDLDhEQUFDbkIsMERBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBOUJ3Qm9CO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvam9zaGxpcG1hbi8zNWxwcm9qLzM1TC9mcm9udGVuZC9zcmMvYXBwL3NvY2lhbC9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiQC9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiQC9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IFJlY0ZyaWVuZHNMaXN0IGZyb20gXCJAL2NvbXBvbmVudHMvUmVjRnJpZW5kc0xpc3RcIjtcbmltcG9ydCBGcmllbmRSZXF1ZXN0c0xpc3QgZnJvbSBcIkAvY29tcG9uZW50cy9GcmllbmRSZXF1ZXN0c1wiO1xuaW1wb3J0IHsgZ2V0VXNlcklkRnJvbVRva2VuIH0gZnJvbSBcIkAvdXRpbHMvYXV0aFwiO1xuXG5cblxuY29uc3QgZ2V0VXNlcklkRnJvbVRva2VuID0gKCk6IHN0cmluZyB8IG51bGwgPT4ge1xudHJ5IHtcbiAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcbiAgICBjb25zdCB0b2tlbkNvb2tpZSA9IGNvb2tpZXMuZmluZCgoY29va2llKSA9PlxuICAgIGNvb2tpZS50cmltKCkuc3RhcnRzV2l0aChcInRva2VuPVwiKVxuICAgICk7XG5cbiAgICBpZiAoIXRva2VuQ29va2llKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHRva2VuID0gdG9rZW5Db29raWUuc3BsaXQoXCI9XCIpWzFdO1xuICAgIGNvbnN0IGRlY29kZWQgPSBqd3QuZGVjb2RlKHRva2VuKSBhcyB7IHVzZXJJZDogc3RyaW5nIH0gfCBudWxsO1xuICAgIHJldHVybiBkZWNvZGVkPy51c2VySWQgfHwgbnVsbDtcbn0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHBhcnNpbmcgSldUIHRva2VuOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG59XG59O1xuXG5jb25zdCBjdXJyZW50VXNlcklkID0gZ2V0VXNlcklkRnJvbVRva2VuKCk7IFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb2NpYWxQYWdlKCkge1xuICBjb25zdCBbcmVjb21tZW5kZWRGcmllbmRzLCBzZXRSZWNvbW1lbmRlZEZyaWVuZHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRmV0Y2ggcmVjb21tZW5kZWQgZnJpZW5kcyBmcm9tIHRoZSBiYWNrZW5kXG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdXNlcnMvJHtjdXJyZW50VXNlcklkfS9yZWNvbW1lbmRlZC1mcmllbmRzYClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZWNvbW1lbmRlZEZyaWVuZHMpIHtcbiAgICAgICAgICBzZXRSZWNvbW1lbmRlZEZyaWVuZHMoZGF0YS5yZWNvbW1lbmRlZEZyaWVuZHMpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyByZWNvbW1lbmRlZCBmcmllbmRzOlwiLCBlcnIpXG4gICAgICApO1xuICB9LCBbY3VycmVudFVzZXJJZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtc2NyZWVuIG1heC1oLXNjcmVlblwiPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCB3LWZ1bGwgb3ZlcmZsb3ctYXV0byBiZy1ibHVlLTMwMFwiPlxuICAgICAgICA8UmVjRnJpZW5kc0xpc3RcbiAgICAgICAgICByZWNvbW1lbmRlZEZyaWVuZHM9e3JlY29tbWVuZGVkRnJpZW5kc31cbiAgICAgICAgICBjdXJyZW50VXNlcklkPXtjdXJyZW50VXNlcklkfVxuICAgICAgICAvPlxuICAgICAgICA8RnJpZW5kUmVxdWVzdHNMaXN0IGN1cnJlbnRVc2VySWQ9e2N1cnJlbnRVc2VySWR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdmJhciIsIkZvb3RlciIsIlJlY0ZyaWVuZHNMaXN0IiwiRnJpZW5kUmVxdWVzdHNMaXN0IiwiZ2V0VXNlcklkRnJvbVRva2VuIiwiY29va2llcyIsImRvY3VtZW50IiwiY29va2llIiwic3BsaXQiLCJ0b2tlbkNvb2tpZSIsImZpbmQiLCJ0cmltIiwic3RhcnRzV2l0aCIsInRva2VuIiwiZGVjb2RlZCIsImp3dCIsImRlY29kZSIsInVzZXJJZCIsImVycm9yIiwiY29uc29sZSIsImN1cnJlbnRVc2VySWQiLCJTb2NpYWxQYWdlIiwicmVjb21tZW5kZWRGcmllbmRzIiwic2V0UmVjb21tZW5kZWRGcmllbmRzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVyciIsImRpdiIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/social/page.tsx\n"));

/***/ })

});