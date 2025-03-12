"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/FriendsList.tsx":
/*!****************************************!*\
  !*** ./src/components/FriendsList.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FriendsList)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ClassCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ClassCard */ \"(app-pages-browser)/./src/components/ClassCard.tsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SearchBar */ \"(app-pages-browser)/./src/components/SearchBar.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction FriendsList(param) {\n    let { currentUserId } = param;\n    _s();\n    const [friends, setFriends] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"FriendsList.useEffect\": ()=>{\n            if (!currentUserId) return;\n            // Fetch the user document\n            fetch(\"http://localhost:3001/api/users/\".concat(currentUserId)).then({\n                \"FriendsList.useEffect\": (res)=>res.json()\n            }[\"FriendsList.useEffect\"]).then({\n                \"FriendsList.useEffect\": (data)=>{\n                    if (data.friends) {\n                        // Map each friend to our Friend type.\n                        const mappedFriends = data.friends.map({\n                            \"FriendsList.useEffect.mappedFriends\": (friend)=>({\n                                    friendName: friend.name,\n                                    classes: friend.coursesInterested ? friend.coursesInterested.map({\n                                        \"FriendsList.useEffect.mappedFriends\": (course)=>({\n                                                classId: course.courseNumber,\n                                                className: course.name,\n                                                professor: course.professor\n                                            })\n                                    }[\"FriendsList.useEffect.mappedFriends\"]) : []\n                                })\n                        }[\"FriendsList.useEffect.mappedFriends\"]);\n                        setFriends(mappedFriends);\n                    }\n                }\n            }[\"FriendsList.useEffect\"]).catch({\n                \"FriendsList.useEffect\": (err)=>console.error(\"Error fetching friends:\", err)\n            }[\"FriendsList.useEffect\"]);\n        }\n    }[\"FriendsList.useEffect\"], [\n        currentUserId\n    ]);\n    const filteredFriends = friends.map((friend)=>({\n            ...friend,\n            classes: friend.classes.filter((course)=>friend.friendName.toLowerCase().includes(searchQuery.toLowerCase()) || course.className.toLowerCase().includes(searchQuery.toLowerCase()))\n        })).filter((friend)=>friend.classes.length > 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/2 h-full max-h-[95%] overflow-y-auto p-4 bg-gray-300 m-[1%] rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl text-center font-bold font-roboto text-black m-2\",\n                children: \"Friend's Classes\"\n            }, void 0, false, {\n                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative mt-3 mb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    searchQuery: searchQuery,\n                    setSearchQuery: setSearchQuery\n                }, void 0, false, {\n                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            searchQuery === \"\" ? friends.map((friend, friendIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-6 p-3 bg-gray-100 shadow-md rounded-lg w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold text-center text-gray-700 font-roboto\",\n                            children: friend.friendName\n                        }, void 0, false, {\n                            fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-none space-y-2\",\n                            children: friend.classes.map((course, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ClassCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    classId: course.classId,\n                                    className: course.className,\n                                    professor: course.professor,\n                                    removable: false\n                                }, index, false, {\n                                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, friendIndex, true, {\n                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bg-white shadow-lg rounded-lg w-full max-h-60 overflow-y-auto\",\n                children: filteredFriends.length > 0 ? filteredFriends.map((friend, friendIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-3 hover:bg-gray-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold text-gray-700\",\n                                children: friend.friendName\n                            }, void 0, false, {\n                                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"list-none\",\n                                children: friend.classes.map((course, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"text-gray-600\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-bold\",\n                                                children: course.classId\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 23\n                                            }, this),\n                                            \":\",\n                                            \" \",\n                                            course.className\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 21\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, friendIndex, true, {\n                        fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 15\n                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"p-3 text-gray-500\",\n                    children: \"No results found\"\n                }, void 0, false, {\n                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(FriendsList, \"IXRYqQQAskKdJ5LwrBK4HcNzvHk=\");\n_c = FriendsList;\nvar _c;\n$RefreshReg$(_c, \"FriendsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZyaWVuZHNMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNKO0FBQ0E7QUFpQmhDLFNBQVNLLFlBQVksS0FBbUM7UUFBbkMsRUFBRUMsYUFBYSxFQUFvQixHQUFuQzs7SUFDbEMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFXLEVBQUU7SUFDbkQsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBRS9DQyxnREFBU0E7aUNBQUM7WUFDUixJQUFJLENBQUNJLGVBQWU7WUFDcEIsMEJBQTBCO1lBQzFCSyxNQUFNLG1DQUFpRCxPQUFkTCxnQkFDdENNLElBQUk7eUNBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTt3Q0FDdEJGLElBQUk7eUNBQUMsQ0FBQ0c7b0JBQ0wsSUFBSUEsS0FBS1IsT0FBTyxFQUFFO3dCQUNoQixzQ0FBc0M7d0JBQ3RDLE1BQU1TLGdCQUEwQkQsS0FBS1IsT0FBTyxDQUFDVSxHQUFHO21FQUFDLENBQUNDLFNBQWlCO29DQUNqRUMsWUFBWUQsT0FBT0UsSUFBSTtvQ0FDdkJDLFNBQVNILE9BQU9JLGlCQUFpQixHQUM3QkosT0FBT0ksaUJBQWlCLENBQUNMLEdBQUc7K0VBQUMsQ0FBQ00sU0FBaUI7Z0RBQzdDQyxTQUFTRCxPQUFPRSxZQUFZO2dEQUM1QkMsV0FBV0gsT0FBT0gsSUFBSTtnREFDdEJPLFdBQVdKLE9BQU9JLFNBQVM7NENBQzdCO2dGQUNBLEVBQUU7Z0NBQ1I7O3dCQUNBbkIsV0FBV1E7b0JBQ2I7Z0JBQ0Y7d0NBQ0NZLEtBQUs7eUNBQUMsQ0FBQ0MsTUFBUUMsUUFBUUMsS0FBSyxDQUFDLDJCQUEyQkY7O1FBRTdEO2dDQUFHO1FBQUN2QjtLQUFjO0lBRWxCLE1BQU0wQixrQkFBa0J6QixRQUNyQlUsR0FBRyxDQUFDLENBQUNDLFNBQVk7WUFDaEIsR0FBR0EsTUFBTTtZQUNURyxTQUFTSCxPQUFPRyxPQUFPLENBQUNZLE1BQU0sQ0FDNUIsQ0FBQ1YsU0FDQ0wsT0FBT0MsVUFBVSxDQUFDZSxXQUFXLEdBQUdDLFFBQVEsQ0FBQzFCLFlBQVl5QixXQUFXLE9BQ2hFWCxPQUFPRyxTQUFTLENBQUNRLFdBQVcsR0FBR0MsUUFBUSxDQUFDMUIsWUFBWXlCLFdBQVc7UUFFckUsSUFDQ0QsTUFBTSxDQUFDLENBQUNmLFNBQVdBLE9BQU9HLE9BQU8sQ0FBQ2UsTUFBTSxHQUFHO0lBRTlDLHFCQUNFLDhEQUFDQztRQUFJWCxXQUFVOzswQkFDYiw4REFBQ1k7Z0JBQUdaLFdBQVU7MEJBQTREOzs7Ozs7MEJBRzFFLDhEQUFDVztnQkFBSVgsV0FBVTswQkFDYiw0RUFBQ3RCLDZEQUFTQTtvQkFBQ0ssYUFBYUE7b0JBQWFDLGdCQUFnQkE7Ozs7Ozs7Ozs7O1lBR3RERCxnQkFBZ0IsS0FDZkYsUUFBUVUsR0FBRyxDQUFDLENBQUNDLFFBQVFxQiw0QkFDbkIsOERBQUNGO29CQUVDWCxXQUFVOztzQ0FFViw4REFBQ2M7NEJBQUdkLFdBQVU7c0NBQ1hSLE9BQU9DLFVBQVU7Ozs7OztzQ0FFcEIsOERBQUNzQjs0QkFBR2YsV0FBVTtzQ0FDWFIsT0FBT0csT0FBTyxDQUFDSixHQUFHLENBQUMsQ0FBQ00sUUFBUW1CLHNCQUMzQiw4REFBQ3ZDLDZEQUFTQTtvQ0FFUnFCLFNBQVNELE9BQU9DLE9BQU87b0NBQ3ZCRSxXQUFXSCxPQUFPRyxTQUFTO29DQUMzQkMsV0FBV0osT0FBT0ksU0FBUztvQ0FDM0JnQixXQUFXO21DQUpORDs7Ozs7Ozs7Ozs7bUJBVE5IOzs7OzBDQW9CVCw4REFBQ0Y7Z0JBQUlYLFdBQVU7MEJBQ1pNLGdCQUFnQkksTUFBTSxHQUFHLElBQ3hCSixnQkFBZ0JmLEdBQUcsQ0FBQyxDQUFDQyxRQUFRcUIsNEJBQzNCLDhEQUFDRjt3QkFBc0JYLFdBQVU7OzBDQUMvQiw4REFBQ2M7Z0NBQUdkLFdBQVU7MENBQ1hSLE9BQU9DLFVBQVU7Ozs7OzswQ0FFcEIsOERBQUNzQjtnQ0FBR2YsV0FBVTswQ0FDWFIsT0FBT0csT0FBTyxDQUFDSixHQUFHLENBQUMsQ0FBQ00sUUFBUW1CLHNCQUMzQiw4REFBQ0U7d0NBQWVsQixXQUFVOzswREFDeEIsOERBQUNtQjtnREFBS25CLFdBQVU7MERBQWFILE9BQU9DLE9BQU87Ozs7Ozs0Q0FBUTs0Q0FBRTs0Q0FDcERELE9BQU9HLFNBQVM7O3VDQUZWZ0I7Ozs7Ozs7Ozs7O3VCQU5MSDs7Ozs4Q0FlWiw4REFBQ087b0JBQUVwQixXQUFVOzhCQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0M7R0FoR3dCckI7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NobGlwbWFuLzM1bHByb2ovMzVML2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL0ZyaWVuZHNMaXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENsYXNzQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL0NsYXNzQ2FyZFwiO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiQC9jb21wb25lbnRzL1NlYXJjaEJhclwiO1xuXG5pbnRlcmZhY2UgQ2xhc3Mge1xuICBjbGFzc0lkOiBzdHJpbmc7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBwcm9mZXNzb3I6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEZyaWVuZCB7XG4gIGZyaWVuZE5hbWU6IHN0cmluZztcbiAgY2xhc3NlczogQ2xhc3NbXTtcbn1cblxuaW50ZXJmYWNlIEZyaWVuZHNMaXN0UHJvcHMge1xuICBjdXJyZW50VXNlcklkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZyaWVuZHNMaXN0KHsgY3VycmVudFVzZXJJZCB9OiBGcmllbmRzTGlzdFByb3BzKSB7XG4gIGNvbnN0IFtmcmllbmRzLCBzZXRGcmllbmRzXSA9IHVzZVN0YXRlPEZyaWVuZFtdPihbXSk7XG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50VXNlcklkKSByZXR1cm47XG4gICAgLy8gRmV0Y2ggdGhlIHVzZXIgZG9jdW1lbnRcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS91c2Vycy8ke2N1cnJlbnRVc2VySWR9YClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5mcmllbmRzKSB7XG4gICAgICAgICAgLy8gTWFwIGVhY2ggZnJpZW5kIHRvIG91ciBGcmllbmQgdHlwZS5cbiAgICAgICAgICBjb25zdCBtYXBwZWRGcmllbmRzOiBGcmllbmRbXSA9IGRhdGEuZnJpZW5kcy5tYXAoKGZyaWVuZDogYW55KSA9PiAoe1xuICAgICAgICAgICAgZnJpZW5kTmFtZTogZnJpZW5kLm5hbWUsXG4gICAgICAgICAgICBjbGFzc2VzOiBmcmllbmQuY291cnNlc0ludGVyZXN0ZWRcbiAgICAgICAgICAgICAgPyBmcmllbmQuY291cnNlc0ludGVyZXN0ZWQubWFwKChjb3Vyc2U6IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzSWQ6IGNvdXJzZS5jb3Vyc2VOdW1iZXIsXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNvdXJzZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgcHJvZmVzc29yOiBjb3Vyc2UucHJvZmVzc29yLFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICA6IFtdLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICBzZXRGcmllbmRzKG1hcHBlZEZyaWVuZHMpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBmcmllbmRzOlwiLCBlcnIpKTtcblxuICB9LCBbY3VycmVudFVzZXJJZF0pO1xuXG4gIGNvbnN0IGZpbHRlcmVkRnJpZW5kcyA9IGZyaWVuZHNcbiAgICAubWFwKChmcmllbmQpID0+ICh7XG4gICAgICAuLi5mcmllbmQsXG4gICAgICBjbGFzc2VzOiBmcmllbmQuY2xhc3Nlcy5maWx0ZXIoXG4gICAgICAgIChjb3Vyc2UpID0+XG4gICAgICAgICAgZnJpZW5kLmZyaWVuZE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIGNvdXJzZS5jbGFzc05hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKVxuICAgICAgKSxcbiAgICB9KSlcbiAgICAuZmlsdGVyKChmcmllbmQpID0+IGZyaWVuZC5jbGFzc2VzLmxlbmd0aCA+IDApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBoLWZ1bGwgbWF4LWgtWzk1JV0gb3ZlcmZsb3cteS1hdXRvIHAtNCBiZy1ncmF5LTMwMCBtLVsxJV0gcm91bmRlZC0yeGxcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWNlbnRlciBmb250LWJvbGQgZm9udC1yb2JvdG8gdGV4dC1ibGFjayBtLTJcIj5cbiAgICAgICAgRnJpZW5kJ3MgQ2xhc3Nlc1xuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtMyBtYi00XCI+XG4gICAgICAgIDxTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAge3NlYXJjaFF1ZXJ5ID09PSBcIlwiID8gKFxuICAgICAgICBmcmllbmRzLm1hcCgoZnJpZW5kLCBmcmllbmRJbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17ZnJpZW5kSW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC02IHAtMyBiZy1ncmF5LTEwMCBzaGFkb3ctbWQgcm91bmRlZC1sZyB3LWZ1bGxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHRleHQtZ3JheS03MDAgZm9udC1yb2JvdG9cIj5cbiAgICAgICAgICAgICAge2ZyaWVuZC5mcmllbmROYW1lfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LW5vbmUgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgIHtmcmllbmQuY2xhc3Nlcy5tYXAoKGNvdXJzZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8Q2xhc3NDYXJkXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgY2xhc3NJZD17Y291cnNlLmNsYXNzSWR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvdXJzZS5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICBwcm9mZXNzb3I9e2NvdXJzZS5wcm9mZXNzb3J9XG4gICAgICAgICAgICAgICAgICByZW1vdmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYmctd2hpdGUgc2hhZG93LWxnIHJvdW5kZWQtbGcgdy1mdWxsIG1heC1oLTYwIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgIHtmaWx0ZXJlZEZyaWVuZHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIGZpbHRlcmVkRnJpZW5kcy5tYXAoKGZyaWVuZCwgZnJpZW5kSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZyaWVuZEluZGV4fSBjbGFzc05hbWU9XCJwLTMgaG92ZXI6YmctZ3JheS0xMDBcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgIHtmcmllbmQuZnJpZW5kTmFtZX1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgIHtmcmllbmQuY2xhc3Nlcy5tYXAoKGNvdXJzZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57Y291cnNlLmNsYXNzSWR9PC9zcGFuPjp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAge2NvdXJzZS5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtMyB0ZXh0LWdyYXktNTAwXCI+Tm8gcmVzdWx0cyBmb3VuZDwvcD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNsYXNzQ2FyZCIsIlNlYXJjaEJhciIsIkZyaWVuZHNMaXN0IiwiY3VycmVudFVzZXJJZCIsImZyaWVuZHMiLCJzZXRGcmllbmRzIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwibWFwcGVkRnJpZW5kcyIsIm1hcCIsImZyaWVuZCIsImZyaWVuZE5hbWUiLCJuYW1lIiwiY2xhc3NlcyIsImNvdXJzZXNJbnRlcmVzdGVkIiwiY291cnNlIiwiY2xhc3NJZCIsImNvdXJzZU51bWJlciIsImNsYXNzTmFtZSIsInByb2Zlc3NvciIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZmlsdGVyZWRGcmllbmRzIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImxlbmd0aCIsImRpdiIsImgxIiwiZnJpZW5kSW5kZXgiLCJoMiIsInVsIiwiaW5kZXgiLCJyZW1vdmFibGUiLCJsaSIsInNwYW4iLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FriendsList.tsx\n"));

/***/ })

});