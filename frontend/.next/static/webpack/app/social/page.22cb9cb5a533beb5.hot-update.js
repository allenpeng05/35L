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

/***/ "(app-pages-browser)/./src/components/FriendRequests.tsx":
/*!*******************************************!*\
  !*** ./src/components/FriendRequests.tsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FriendRequestsList)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// Create a new file: FriendRequestsList.tsx\n\nvar _s = $RefreshSig$();\n\nfunction FriendRequestsList(param) {\n    let { currentUserId } = param;\n    _s();\n    const [friendRequests, setFriendRequests] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"FriendRequestsList.useEffect\": ()=>{\n            // Fetch pending friend requests for the current user\n            fetch(\"http://localhost:3001/api/users/\".concat(currentUserId, \"/friend-requests\")).then({\n                \"FriendRequestsList.useEffect\": (res)=>res.json()\n            }[\"FriendRequestsList.useEffect\"]).then({\n                \"FriendRequestsList.useEffect\": (data)=>{\n                    if (data.friendRequests) {\n                        setFriendRequests(data.friendRequests);\n                    }\n                }\n            }[\"FriendRequestsList.useEffect\"]).catch({\n                \"FriendRequestsList.useEffect\": (err)=>console.error(\"Error fetching friend requests:\", err)\n            }[\"FriendRequestsList.useEffect\"]);\n        }\n    }[\"FriendRequestsList.useEffect\"], [\n        currentUserId\n    ]);\n    const handleAccept = async (requestId)=>{\n        try {\n            const response = await fetch(\"http://localhost:3001/api/users/friend-request/accept\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    requestId\n                })\n            });\n            const data = await response.json();\n            if (response.ok) {\n                // Remove the accepted request from the list\n                setFriendRequests((prev)=>prev.filter((req)=>req._id !== requestId));\n            } else {\n                console.error(\"Error accepting friend request:\", data.message);\n            }\n        } catch (error) {\n            console.error(\"Error accepting friend request:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/2 h-full max-h-[95%] overflow-y-auto p-4 bg-gray-200 m-[1%] rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold text-black font-roboto mb-2\",\n                children: \"Friend Requests\"\n            }, void 0, false, {\n                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-none space-y-4\",\n                children: friendRequests.length > 0 ? friendRequests.map((req)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"p-4 bg-white rounded-lg shadow-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg\",\n                                children: [\n                                    req.sender.name,\n                                    \" has sent you a friend request.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"mt-3 w-full px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600\",\n                                onClick: ()=>handleAccept(req._id),\n                                children: \"Accept Request\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, req._id, true, {\n                        fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-gray-600 text-center\",\n                    children: \"No friend requests.\"\n                }, void 0, false, {\n                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(FriendRequestsList, \"kJMCIpDhaC7ViW7Ex87qqvdmiyY=\");\n_c = FriendRequestsList;\nvar _c;\n$RefreshReg$(_c, \"FriendRequestsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZyaWVuZFJlcXVlc3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsNENBQTRDOzs7QUFDTztBQWVwQyxTQUFTRyxtQkFBbUIsS0FBMEM7UUFBMUMsRUFBRUMsYUFBYSxFQUEyQixHQUExQzs7SUFDekMsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHTCwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUV4RUMsZ0RBQVNBO3dDQUFDO1lBQ1IscURBQXFEO1lBQ3JESyxNQUFNLG1DQUFpRCxPQUFkSCxlQUFjLHFCQUNwREksSUFBSTtnREFBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJOytDQUN0QkYsSUFBSTtnREFBQyxDQUFDRztvQkFDTCxJQUFJQSxLQUFLTixjQUFjLEVBQUU7d0JBQ3ZCQyxrQkFBa0JLLEtBQUtOLGNBQWM7b0JBQ3ZDO2dCQUNGOytDQUNDTyxLQUFLO2dEQUFDLENBQUNDLE1BQVFDLFFBQVFDLEtBQUssQ0FBQyxtQ0FBbUNGOztRQUNyRTt1Q0FBRztRQUFDVDtLQUFjO0lBRWxCLE1BQU1ZLGVBQWUsT0FBT0M7UUFDMUIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVgsTUFBTSx5REFBeUQ7Z0JBQ3BGWSxRQUFRO2dCQUNSQyxTQUFTO29CQUFFLGdCQUFnQjtnQkFBbUI7Z0JBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVOO2dCQUFVO1lBQ25DO1lBQ0EsTUFBTU4sT0FBTyxNQUFNTyxTQUFTUixJQUFJO1lBQ2hDLElBQUlRLFNBQVNNLEVBQUUsRUFBRTtnQkFDZiw0Q0FBNEM7Z0JBQzVDbEIsa0JBQWtCLENBQUNtQixPQUFTQSxLQUFLQyxNQUFNLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsR0FBRyxLQUFLWDtZQUMvRCxPQUFPO2dCQUNMSCxRQUFRQyxLQUFLLENBQUMsbUNBQW1DSixLQUFLa0IsT0FBTztZQUMvRDtRQUNGLEVBQUUsT0FBT2QsT0FBTztZQUNkRCxRQUFRQyxLQUFLLENBQUMsbUNBQW1DQTtRQUNuRDtJQUNGO0lBRUEscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBaUQ7Ozs7OzswQkFDL0QsOERBQUNFO2dCQUFHRixXQUFVOzBCQUNYMUIsZUFBZTZCLE1BQU0sR0FBRyxJQUN2QjdCLGVBQWU4QixHQUFHLENBQUMsQ0FBQ1Isb0JBQ2xCLDhEQUFDUzt3QkFBaUJMLFdBQVU7OzBDQUMxQiw4REFBQ007Z0NBQUVOLFdBQVU7O29DQUFXSixJQUFJVyxNQUFNLENBQUNDLElBQUk7b0NBQUM7Ozs7Ozs7MENBQ3hDLDhEQUFDQztnQ0FDQ1QsV0FBVTtnQ0FDVlUsU0FBUyxJQUFNekIsYUFBYVcsSUFBSUMsR0FBRzswQ0FDcEM7Ozs7Ozs7dUJBTE1ELElBQUlDLEdBQUc7Ozs7OENBV2xCLDhEQUFDUztvQkFBRU4sV0FBVTs4QkFBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25EO0dBeER3QjVCO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvam9zaGxpcG1hbi8zNWxwcm9qLzM1TC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9GcmllbmRSZXF1ZXN0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlIGEgbmV3IGZpbGU6IEZyaWVuZFJlcXVlc3RzTGlzdC50c3hcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBGcmllbmRSZXF1ZXN0IHtcbiAgX2lkOiBzdHJpbmc7XG4gIHNlbmRlcjoge1xuICAgIF9pZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBlbWFpbD86IHN0cmluZztcbiAgfTtcbn1cblxuaW50ZXJmYWNlIEZyaWVuZFJlcXVlc3RzTGlzdFByb3BzIHtcbiAgY3VycmVudFVzZXJJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGcmllbmRSZXF1ZXN0c0xpc3QoeyBjdXJyZW50VXNlcklkIH06IEZyaWVuZFJlcXVlc3RzTGlzdFByb3BzKSB7XG4gIGNvbnN0IFtmcmllbmRSZXF1ZXN0cywgc2V0RnJpZW5kUmVxdWVzdHNdID0gdXNlU3RhdGU8RnJpZW5kUmVxdWVzdFtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBGZXRjaCBwZW5kaW5nIGZyaWVuZCByZXF1ZXN0cyBmb3IgdGhlIGN1cnJlbnQgdXNlclxuICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3VzZXJzLyR7Y3VycmVudFVzZXJJZH0vZnJpZW5kLXJlcXVlc3RzYClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5mcmllbmRSZXF1ZXN0cykge1xuICAgICAgICAgIHNldEZyaWVuZFJlcXVlc3RzKGRhdGEuZnJpZW5kUmVxdWVzdHMpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBmcmllbmQgcmVxdWVzdHM6XCIsIGVycikpO1xuICB9LCBbY3VycmVudFVzZXJJZF0pO1xuXG4gIGNvbnN0IGhhbmRsZUFjY2VwdCA9IGFzeW5jIChyZXF1ZXN0SWQ6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS91c2Vycy9mcmllbmQtcmVxdWVzdC9hY2NlcHRcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcmVxdWVzdElkIH0pLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgYWNjZXB0ZWQgcmVxdWVzdCBmcm9tIHRoZSBsaXN0XG4gICAgICAgIHNldEZyaWVuZFJlcXVlc3RzKChwcmV2KSA9PiBwcmV2LmZpbHRlcigocmVxKSA9PiByZXEuX2lkICE9PSByZXF1ZXN0SWQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhY2NlcHRpbmcgZnJpZW5kIHJlcXVlc3Q6XCIsIGRhdGEubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhY2NlcHRpbmcgZnJpZW5kIHJlcXVlc3Q6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIGgtZnVsbCBtYXgtaC1bOTUlXSBvdmVyZmxvdy15LWF1dG8gcC00IGJnLWdyYXktMjAwIG0tWzElXSByb3VuZGVkLTJ4bFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrIGZvbnQtcm9ib3RvIG1iLTJcIj5GcmllbmQgUmVxdWVzdHM8L2gxPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtbm9uZSBzcGFjZS15LTRcIj5cbiAgICAgICAge2ZyaWVuZFJlcXVlc3RzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgZnJpZW5kUmVxdWVzdHMubWFwKChyZXEpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3JlcS5faWR9IGNsYXNzTmFtZT1cInAtNCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+e3JlcS5zZW5kZXIubmFtZX0gaGFzIHNlbnQgeW91IGEgZnJpZW5kIHJlcXVlc3QuPC9wPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMyB3LWZ1bGwgcHgtMyBweS0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWNjZXB0KHJlcS5faWQpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWNjZXB0IFJlcXVlc3RcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LWNlbnRlclwiPk5vIGZyaWVuZCByZXF1ZXN0cy48L3A+XG4gICAgICAgICl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGcmllbmRSZXF1ZXN0c0xpc3QiLCJjdXJyZW50VXNlcklkIiwiZnJpZW5kUmVxdWVzdHMiLCJzZXRGcmllbmRSZXF1ZXN0cyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVBY2NlcHQiLCJyZXF1ZXN0SWQiLCJyZXNwb25zZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwicHJldiIsImZpbHRlciIsInJlcSIsIl9pZCIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInVsIiwibGVuZ3RoIiwibWFwIiwibGkiLCJwIiwic2VuZGVyIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FriendRequests.tsx\n"));

/***/ })

});