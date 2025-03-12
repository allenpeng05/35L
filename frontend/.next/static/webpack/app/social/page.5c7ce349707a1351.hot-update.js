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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FriendRequestsList)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction FriendRequestsList(param) {\n    let { currentUserId } = param;\n    _s();\n    const [friendRequests, setFriendRequests] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"FriendRequestsList.useEffect\": ()=>{\n            // Fetch pending friend requests for the current user\n            fetch(\"http://localhost:3001/api/users/\".concat(currentUserId, \"/friend-requests\")).then({\n                \"FriendRequestsList.useEffect\": (res)=>res.json()\n            }[\"FriendRequestsList.useEffect\"]).then({\n                \"FriendRequestsList.useEffect\": (data)=>{\n                    if (data.friendRequests) {\n                        setFriendRequests(data.friendRequests);\n                    }\n                }\n            }[\"FriendRequestsList.useEffect\"]).catch({\n                \"FriendRequestsList.useEffect\": (err)=>console.error(\"Error fetching friend requests:\", err)\n            }[\"FriendRequestsList.useEffect\"]);\n        }\n    }[\"FriendRequestsList.useEffect\"], [\n        currentUserId\n    ]);\n    const handleAccept = async (requestId)=>{\n        try {\n            const response = await fetch(\"http://localhost:3001/api/users/friend-request/accept\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    requestId\n                })\n            });\n            const data = await response.json();\n            if (response.ok) {\n                // Remove the accepted request from the list\n                setFriendRequests((prev)=>prev.filter((req)=>req._id !== requestId));\n            } else {\n                console.error(\"Error accepting friend request:\", data.message);\n            }\n        } catch (error) {\n            console.error(\"Error accepting friend request:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/2 h-full max-h-[95%] overflow-y-auto p-4 bg-gray-200 m-[1%] rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold text-black font-roboto mb-2\",\n                    children: \"Friend Requests\"\n                }, void 0, false, {\n                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 p-3 bg-gray-100 shadow-md rounded-lg text-black m-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"list-none space-y-4\",\n                    children: friendRequests.length > 0 ? friendRequests.map((request)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"p-4 bg-white rounded-lg shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-bold text-2xl mb-2\",\n                                    children: request.sender.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, this),\n                                request.classes && request.classes.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"space-y-1\",\n                                    children: request.classes.map((course, courseIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-gray-800 text-sm\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-bold text-lg\",\n                                                    children: course.classId\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 25\n                                                }, this),\n                                                \": \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-lg\",\n                                                    children: course.className\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 27\n                                                }, this)\n                                            ]\n                                        }, courseIndex, true, {\n                                            fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 23\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 19\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600 text-sm\",\n                                    children: \"No shared classes information.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"mt-3 w-full px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600\",\n                                    onClick: ()=>handleAccept(request._id),\n                                    children: \"Accept Request\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, request._id, true, {\n                            fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 15\n                        }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600 text-center\",\n                        children: \"No friend requests.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendRequests.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(FriendRequestsList, \"kJMCIpDhaC7ViW7Ex87qqvdmiyY=\");\n_c = FriendRequestsList;\nvar _c;\n$RefreshReg$(_c, \"FriendRequestsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZyaWVuZFJlcXVlc3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFnQnBDLFNBQVNHLG1CQUFtQixLQUEwQztRQUExQyxFQUFFQyxhQUFhLEVBQTJCLEdBQTFDOztJQUN6QyxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdMLCtDQUFRQSxDQUFrQixFQUFFO0lBRXhFQyxnREFBU0E7d0NBQUM7WUFDUixxREFBcUQ7WUFDckRLLE1BQU0sbUNBQWlELE9BQWRILGVBQWMscUJBQ3BESSxJQUFJO2dEQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7K0NBQ3RCRixJQUFJO2dEQUFDLENBQUNHO29CQUNMLElBQUlBLEtBQUtOLGNBQWMsRUFBRTt3QkFDdkJDLGtCQUFrQkssS0FBS04sY0FBYztvQkFDdkM7Z0JBQ0Y7K0NBQ0NPLEtBQUs7Z0RBQUMsQ0FBQ0MsTUFBUUMsUUFBUUMsS0FBSyxDQUFDLG1DQUFtQ0Y7O1FBQ3JFO3VDQUFHO1FBQUNUO0tBQWM7SUFFbEIsTUFBTVksZUFBZSxPQUFPQztRQUMxQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNWCxNQUFNLHlEQUF5RDtnQkFDcEZZLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQUUsZ0JBQWdCO2dCQUFtQjtnQkFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRU47Z0JBQVU7WUFDbkM7WUFDQSxNQUFNTixPQUFPLE1BQU1PLFNBQVNSLElBQUk7WUFDaEMsSUFBSVEsU0FBU00sRUFBRSxFQUFFO2dCQUNmLDRDQUE0QztnQkFDNUNsQixrQkFBa0IsQ0FBQ21CLE9BQVNBLEtBQUtDLE1BQU0sQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxHQUFHLEtBQUtYO1lBQy9ELE9BQU87Z0JBQ0xILFFBQVFDLEtBQUssQ0FBQyxtQ0FBbUNKLEtBQUtrQixPQUFPO1lBQy9EO1FBQ0YsRUFBRSxPQUFPZCxPQUFPO1lBQ2RELFFBQVFDLEtBQUssQ0FBQyxtQ0FBbUNBO1FBQ25EO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFBaUQ7Ozs7Ozs7Ozs7OzBCQUdqRSw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNFO29CQUFHRixXQUFVOzhCQUNYMUIsZUFBZTZCLE1BQU0sR0FBRyxJQUN2QjdCLGVBQWU4QixHQUFHLENBQUMsQ0FBQ0Msd0JBQ2xCLDhEQUFDQzs0QkFBcUJOLFdBQVU7OzhDQUM5Qiw4REFBQ087b0NBQUdQLFdBQVU7OENBQTJCSyxRQUFRRyxNQUFNLENBQUNDLElBQUk7Ozs7OztnQ0FDM0RKLFFBQVFLLE9BQU8sSUFBSUwsUUFBUUssT0FBTyxDQUFDUCxNQUFNLEdBQUcsa0JBQzNDLDhEQUFDRDtvQ0FBR0YsV0FBVTs4Q0FDWEssUUFBUUssT0FBTyxDQUFDTixHQUFHLENBQUMsQ0FBQ08sUUFBUUMsNEJBQzVCLDhEQUFDTjs0Q0FBcUJOLFdBQVU7OzhEQUM5Qiw4REFBQ2E7b0RBQUtiLFdBQVU7OERBQXFCVyxPQUFPRyxPQUFPOzs7Ozs7Z0RBQVE7OERBQ3pELDhEQUFDRDtvREFBS2IsV0FBVTs4REFBV1csT0FBT1gsU0FBUzs7Ozs7OzsyQ0FGdENZOzs7Ozs7Ozs7eURBT2IsOERBQUNHO29DQUFFZixXQUFVOzhDQUF3Qjs7Ozs7OzhDQUV2Qyw4REFBQ2dCO29DQUNDaEIsV0FBVTtvQ0FDVmlCLFNBQVMsSUFBTWhDLGFBQWFvQixRQUFRUixHQUFHOzhDQUN4Qzs7Ozs7OzsyQkFqQk1RLFFBQVFSLEdBQUc7Ozs7a0RBdUJ0Qiw4REFBQ2tCO3dCQUFFZixXQUFVO2tDQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRDtHQXpFd0I1QjtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL2pvc2hsaXBtYW4vMzVscHJvai8zNUwvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvRnJpZW5kUmVxdWVzdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBGcmllbmRSZXF1ZXN0IHtcbiAgX2lkOiBzdHJpbmc7XG4gIHNlbmRlcjoge1xuICAgIF9pZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBlbWFpbD86IHN0cmluZztcbiAgfTtcbiAgY2xhc3NlczogeyBjbGFzc0lkOiBzdHJpbmc7IGNsYXNzTmFtZTogc3RyaW5nOyBwcm9mZXNzb3I6IHN0cmluZyB9W107XG59XG5cbmludGVyZmFjZSBGcmllbmRSZXF1ZXN0c0xpc3RQcm9wcyB7XG4gIGN1cnJlbnRVc2VySWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRnJpZW5kUmVxdWVzdHNMaXN0KHsgY3VycmVudFVzZXJJZCB9OiBGcmllbmRSZXF1ZXN0c0xpc3RQcm9wcykge1xuICBjb25zdCBbZnJpZW5kUmVxdWVzdHMsIHNldEZyaWVuZFJlcXVlc3RzXSA9IHVzZVN0YXRlPEZyaWVuZFJlcXVlc3RbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRmV0Y2ggcGVuZGluZyBmcmllbmQgcmVxdWVzdHMgZm9yIHRoZSBjdXJyZW50IHVzZXJcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS91c2Vycy8ke2N1cnJlbnRVc2VySWR9L2ZyaWVuZC1yZXF1ZXN0c2ApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuZnJpZW5kUmVxdWVzdHMpIHtcbiAgICAgICAgICBzZXRGcmllbmRSZXF1ZXN0cyhkYXRhLmZyaWVuZFJlcXVlc3RzKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZnJpZW5kIHJlcXVlc3RzOlwiLCBlcnIpKTtcbiAgfSwgW2N1cnJlbnRVc2VySWRdKTtcblxuICBjb25zdCBoYW5kbGVBY2NlcHQgPSBhc3luYyAocmVxdWVzdElkOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdXNlcnMvZnJpZW5kLXJlcXVlc3QvYWNjZXB0XCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHJlcXVlc3RJZCB9KSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGFjY2VwdGVkIHJlcXVlc3QgZnJvbSB0aGUgbGlzdFxuICAgICAgICBzZXRGcmllbmRSZXF1ZXN0cygocHJldikgPT4gcHJldi5maWx0ZXIoKHJlcSkgPT4gcmVxLl9pZCAhPT0gcmVxdWVzdElkKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWNjZXB0aW5nIGZyaWVuZCByZXF1ZXN0OlwiLCBkYXRhLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWNjZXB0aW5nIGZyaWVuZCByZXF1ZXN0OlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBoLWZ1bGwgbWF4LWgtWzk1JV0gb3ZlcmZsb3cteS1hdXRvIHAtNCBiZy1ncmF5LTIwMCBtLVsxJV0gcm91bmRlZC0yeGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ibGFjayBmb250LXJvYm90byBtYi0yXCI+RnJpZW5kIFJlcXVlc3RzPC9oMT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgcC0zIGJnLWdyYXktMTAwIHNoYWRvdy1tZCByb3VuZGVkLWxnIHRleHQtYmxhY2sgbS0yXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LW5vbmUgc3BhY2UteS00XCI+XG4gICAgICAgICAge2ZyaWVuZFJlcXVlc3RzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICBmcmllbmRSZXF1ZXN0cy5tYXAoKHJlcXVlc3QpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17cmVxdWVzdC5faWR9IGNsYXNzTmFtZT1cInAtNCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGwgbWItMlwiPntyZXF1ZXN0LnNlbmRlci5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAge3JlcXVlc3QuY2xhc3NlcyAmJiByZXF1ZXN0LmNsYXNzZXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cbiAgICAgICAgICAgICAgICAgICAge3JlcXVlc3QuY2xhc3Nlcy5tYXAoKGNvdXJzZSwgY291cnNlSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjb3Vyc2VJbmRleH0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZ1wiPntjb3Vyc2UuY2xhc3NJZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGdcIj57Y291cnNlLmNsYXNzTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cIj5ObyBzaGFyZWQgY2xhc3NlcyBpbmZvcm1hdGlvbi48L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zIHctZnVsbCBweC0zIHB5LTIgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNjAwXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFjY2VwdChyZXF1ZXN0Ll9pZCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQWNjZXB0IFJlcXVlc3RcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1jZW50ZXJcIj5ObyBmcmllbmQgcmVxdWVzdHMuPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZyaWVuZFJlcXVlc3RzTGlzdCIsImN1cnJlbnRVc2VySWQiLCJmcmllbmRSZXF1ZXN0cyIsInNldEZyaWVuZFJlcXVlc3RzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZUFjY2VwdCIsInJlcXVlc3RJZCIsInJlc3BvbnNlIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJwcmV2IiwiZmlsdGVyIiwicmVxIiwiX2lkIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidWwiLCJsZW5ndGgiLCJtYXAiLCJyZXF1ZXN0IiwibGkiLCJoMyIsInNlbmRlciIsIm5hbWUiLCJjbGFzc2VzIiwiY291cnNlIiwiY291cnNlSW5kZXgiLCJzcGFuIiwiY2xhc3NJZCIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FriendRequests.tsx\n"));

/***/ })

});