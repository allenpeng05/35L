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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FriendsList)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ClassCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ClassCard */ \"(app-pages-browser)/./src/components/ClassCard.tsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SearchBar */ \"(app-pages-browser)/./src/components/SearchBar.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction FriendsList(param) {\n    let { currentUserId } = param;\n    _s();\n    const [friends, setFriends] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"FriendsList.useEffect\": ()=>{\n            if (!currentUserId) return;\n            // Fetch the user document, assuming it returns a 'friends' field that is populated.\n            fetch(\"http://localhost:3001/api/users/\".concat(currentUserId)).then({\n                \"FriendsList.useEffect\": (res)=>res.json()\n            }[\"FriendsList.useEffect\"]).then({\n                \"FriendsList.useEffect\": (data)=>{\n                    if (data.friends) {\n                        // Map each friend to our Friend type.\n                        const mappedFriends = data.friends.map({\n                            \"FriendsList.useEffect.mappedFriends\": (friend)=>({\n                                    friendName: friend.name,\n                                    classes: friend.coursesInterested ? friend.coursesInterested.map({\n                                        \"FriendsList.useEffect.mappedFriends\": (course)=>({\n                                                classId: course.courseNumber,\n                                                className: course.name,\n                                                professor: course.professor\n                                            })\n                                    }[\"FriendsList.useEffect.mappedFriends\"]) : []\n                                })\n                        }[\"FriendsList.useEffect.mappedFriends\"]);\n                        setFriends(mappedFriends);\n                    }\n                }\n            }[\"FriendsList.useEffect\"]).catch({\n                \"FriendsList.useEffect\": (err)=>console.error(\"Error fetching friends:\", err)\n            }[\"FriendsList.useEffect\"]);\n        }\n    }[\"FriendsList.useEffect\"], [\n        currentUserId\n    ]);\n    console.log(\"Friends:\", friends);\n    const filteredFriends = friends.map((friend)=>({\n            ...friend,\n            classes: friend.classes.filter((course)=>friend.friendName.toLowerCase().includes(searchQuery.toLowerCase()) || course.className.toLowerCase().includes(searchQuery.toLowerCase()))\n        })).filter((friend)=>friend.classes.length > 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/2 h-full max-h-[95%] overflow-y-auto p-4 bg-gray-300 m-[1%] rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl text-center font-bold font-roboto text-black m-2\",\n                children: \"Friend's Classes\"\n            }, void 0, false, {\n                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative mt-3 mb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    searchQuery: searchQuery,\n                    setSearchQuery: setSearchQuery\n                }, void 0, false, {\n                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            searchQuery === \"\" ? friends.map((friend, friendIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-6 p-3 bg-gray-100 shadow-md rounded-lg w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold text-center text-gray-700 font-roboto\",\n                            children: friend.friendName\n                        }, void 0, false, {\n                            fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-none space-y-2\",\n                            children: friend.classes.map((course, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ClassCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    classId: course.classId,\n                                    className: course.className,\n                                    professor: course.professor,\n                                    removable: false\n                                }, index, false, {\n                                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, friendIndex, true, {\n                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bg-white shadow-lg rounded-lg w-full max-h-60 overflow-y-auto\",\n                children: filteredFriends.length > 0 ? filteredFriends.map((friend, friendIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-3 hover:bg-gray-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold text-gray-700\",\n                                children: friend.friendName\n                            }, void 0, false, {\n                                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"list-none\",\n                                children: friend.classes.map((course, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"text-gray-600\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-bold\",\n                                                children: course.classId\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 23\n                                            }, this),\n                                            \":\",\n                                            \" \",\n                                            course.className\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 21\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, friendIndex, true, {\n                        fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 15\n                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"p-3 text-gray-500\",\n                    children: \"No results found\"\n                }, void 0, false, {\n                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(FriendsList, \"IXRYqQQAskKdJ5LwrBK4HcNzvHk=\");\n_c = FriendsList;\nvar _c;\n$RefreshReg$(_c, \"FriendsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZyaWVuZHNMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNKO0FBQ0E7QUFpQmhDLFNBQVNLLFlBQVksS0FBbUM7UUFBbkMsRUFBRUMsYUFBYSxFQUFvQixHQUFuQzs7SUFDbEMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFXLEVBQUU7SUFDbkQsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBRS9DQyxnREFBU0E7aUNBQUM7WUFDUixJQUFJLENBQUNJLGVBQWU7WUFDcEIsb0ZBQW9GO1lBQ3BGSyxNQUFNLG1DQUFpRCxPQUFkTCxnQkFDdENNLElBQUk7eUNBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTt3Q0FDdEJGLElBQUk7eUNBQUMsQ0FBQ0c7b0JBQ0wsSUFBSUEsS0FBS1IsT0FBTyxFQUFFO3dCQUNoQixzQ0FBc0M7d0JBQ3RDLE1BQU1TLGdCQUEwQkQsS0FBS1IsT0FBTyxDQUFDVSxHQUFHO21FQUFDLENBQUNDLFNBQWlCO29DQUNqRUMsWUFBWUQsT0FBT0UsSUFBSTtvQ0FDdkJDLFNBQVNILE9BQU9JLGlCQUFpQixHQUM3QkosT0FBT0ksaUJBQWlCLENBQUNMLEdBQUc7K0VBQUMsQ0FBQ00sU0FBaUI7Z0RBQzdDQyxTQUFTRCxPQUFPRSxZQUFZO2dEQUM1QkMsV0FBV0gsT0FBT0gsSUFBSTtnREFDdEJPLFdBQVdKLE9BQU9JLFNBQVM7NENBQzdCO2dGQUNBLEVBQUU7Z0NBQ1I7O3dCQUNBbkIsV0FBV1E7b0JBQ2I7Z0JBQ0Y7d0NBQ0NZLEtBQUs7eUNBQUMsQ0FBQ0MsTUFBUUMsUUFBUUMsS0FBSyxDQUFDLDJCQUEyQkY7O1FBQzdEO2dDQUFHO1FBQUN2QjtLQUFjO0lBQ2xCd0IsUUFBUUUsR0FBRyxDQUFDLFlBQVl6QjtJQUV4QixNQUFNMEIsa0JBQWtCMUIsUUFDckJVLEdBQUcsQ0FBQyxDQUFDQyxTQUFZO1lBQ2hCLEdBQUdBLE1BQU07WUFDVEcsU0FBU0gsT0FBT0csT0FBTyxDQUFDYSxNQUFNLENBQzVCLENBQUNYLFNBQ0NMLE9BQU9DLFVBQVUsQ0FBQ2dCLFdBQVcsR0FBR0MsUUFBUSxDQUFDM0IsWUFBWTBCLFdBQVcsT0FDaEVaLE9BQU9HLFNBQVMsQ0FBQ1MsV0FBVyxHQUFHQyxRQUFRLENBQUMzQixZQUFZMEIsV0FBVztRQUVyRSxJQUNDRCxNQUFNLENBQUMsQ0FBQ2hCLFNBQVdBLE9BQU9HLE9BQU8sQ0FBQ2dCLE1BQU0sR0FBRztJQUU5QyxxQkFDRSw4REFBQ0M7UUFBSVosV0FBVTs7MEJBQ2IsOERBQUNhO2dCQUFHYixXQUFVOzBCQUE0RDs7Ozs7OzBCQUcxRSw4REFBQ1k7Z0JBQUlaLFdBQVU7MEJBQ2IsNEVBQUN0Qiw2REFBU0E7b0JBQUNLLGFBQWFBO29CQUFhQyxnQkFBZ0JBOzs7Ozs7Ozs7OztZQUd0REQsZ0JBQWdCLEtBQ2ZGLFFBQVFVLEdBQUcsQ0FBQyxDQUFDQyxRQUFRc0IsNEJBQ25CLDhEQUFDRjtvQkFFQ1osV0FBVTs7c0NBRVYsOERBQUNlOzRCQUFHZixXQUFVO3NDQUNYUixPQUFPQyxVQUFVOzs7Ozs7c0NBRXBCLDhEQUFDdUI7NEJBQUdoQixXQUFVO3NDQUNYUixPQUFPRyxPQUFPLENBQUNKLEdBQUcsQ0FBQyxDQUFDTSxRQUFRb0Isc0JBQzNCLDhEQUFDeEMsNkRBQVNBO29DQUVScUIsU0FBU0QsT0FBT0MsT0FBTztvQ0FDdkJFLFdBQVdILE9BQU9HLFNBQVM7b0NBQzNCQyxXQUFXSixPQUFPSSxTQUFTO29DQUMzQmlCLFdBQVc7bUNBSk5EOzs7Ozs7Ozs7OzttQkFUTkg7Ozs7MENBb0JULDhEQUFDRjtnQkFBSVosV0FBVTswQkFDWk8sZ0JBQWdCSSxNQUFNLEdBQUcsSUFDeEJKLGdCQUFnQmhCLEdBQUcsQ0FBQyxDQUFDQyxRQUFRc0IsNEJBQzNCLDhEQUFDRjt3QkFBc0JaLFdBQVU7OzBDQUMvQiw4REFBQ2U7Z0NBQUdmLFdBQVU7MENBQ1hSLE9BQU9DLFVBQVU7Ozs7OzswQ0FFcEIsOERBQUN1QjtnQ0FBR2hCLFdBQVU7MENBQ1hSLE9BQU9HLE9BQU8sQ0FBQ0osR0FBRyxDQUFDLENBQUNNLFFBQVFvQixzQkFDM0IsOERBQUNFO3dDQUFlbkIsV0FBVTs7MERBQ3hCLDhEQUFDb0I7Z0RBQUtwQixXQUFVOzBEQUFhSCxPQUFPQyxPQUFPOzs7Ozs7NENBQVE7NENBQUU7NENBQ3BERCxPQUFPRyxTQUFTOzt1Q0FGVmlCOzs7Ozs7Ozs7Ozt1QkFOTEg7Ozs7OENBZVosOERBQUNPO29CQUFFckIsV0FBVTs4QkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdDO0dBaEd3QnJCO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvam9zaGxpcG1hbi8zNWxwcm9qLzM1TC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9GcmllbmRzTGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDbGFzc0NhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9DbGFzc0NhcmRcIjtcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIkAvY29tcG9uZW50cy9TZWFyY2hCYXJcIjtcblxuaW50ZXJmYWNlIENsYXNzIHtcbiAgY2xhc3NJZDogc3RyaW5nO1xuICBjbGFzc05hbWU6IHN0cmluZztcbiAgcHJvZmVzc29yOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBGcmllbmQge1xuICBmcmllbmROYW1lOiBzdHJpbmc7XG4gIGNsYXNzZXM6IENsYXNzW107XG59XG5cbmludGVyZmFjZSBGcmllbmRzTGlzdFByb3BzIHtcbiAgY3VycmVudFVzZXJJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGcmllbmRzTGlzdCh7IGN1cnJlbnRVc2VySWQgfTogRnJpZW5kc0xpc3RQcm9wcykge1xuICBjb25zdCBbZnJpZW5kcywgc2V0RnJpZW5kc10gPSB1c2VTdGF0ZTxGcmllbmRbXT4oW10pO1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50VXNlcklkKSByZXR1cm47XG4gICAgLy8gRmV0Y2ggdGhlIHVzZXIgZG9jdW1lbnQsIGFzc3VtaW5nIGl0IHJldHVybnMgYSAnZnJpZW5kcycgZmllbGQgdGhhdCBpcyBwb3B1bGF0ZWQuXG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdXNlcnMvJHtjdXJyZW50VXNlcklkfWApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuZnJpZW5kcykge1xuICAgICAgICAgIC8vIE1hcCBlYWNoIGZyaWVuZCB0byBvdXIgRnJpZW5kIHR5cGUuXG4gICAgICAgICAgY29uc3QgbWFwcGVkRnJpZW5kczogRnJpZW5kW10gPSBkYXRhLmZyaWVuZHMubWFwKChmcmllbmQ6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGZyaWVuZE5hbWU6IGZyaWVuZC5uYW1lLFxuICAgICAgICAgICAgY2xhc3NlczogZnJpZW5kLmNvdXJzZXNJbnRlcmVzdGVkXG4gICAgICAgICAgICAgID8gZnJpZW5kLmNvdXJzZXNJbnRlcmVzdGVkLm1hcCgoY291cnNlOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgICAgICBjbGFzc0lkOiBjb3Vyc2UuY291cnNlTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjb3Vyc2UubmFtZSxcbiAgICAgICAgICAgICAgICAgIHByb2Zlc3NvcjogY291cnNlLnByb2Zlc3NvcixcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgc2V0RnJpZW5kcyhtYXBwZWRGcmllbmRzKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZnJpZW5kczpcIiwgZXJyKSk7XG4gIH0sIFtjdXJyZW50VXNlcklkXSk7XG4gIGNvbnNvbGUubG9nKFwiRnJpZW5kczpcIiwgZnJpZW5kcyk7XG5cbiAgY29uc3QgZmlsdGVyZWRGcmllbmRzID0gZnJpZW5kc1xuICAgIC5tYXAoKGZyaWVuZCkgPT4gKHtcbiAgICAgIC4uLmZyaWVuZCxcbiAgICAgIGNsYXNzZXM6IGZyaWVuZC5jbGFzc2VzLmZpbHRlcihcbiAgICAgICAgKGNvdXJzZSkgPT5cbiAgICAgICAgICBmcmllbmQuZnJpZW5kTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgY291cnNlLmNsYXNzTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpXG4gICAgICApLFxuICAgIH0pKVxuICAgIC5maWx0ZXIoKGZyaWVuZCkgPT4gZnJpZW5kLmNsYXNzZXMubGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIGgtZnVsbCBtYXgtaC1bOTUlXSBvdmVyZmxvdy15LWF1dG8gcC00IGJnLWdyYXktMzAwIG0tWzElXSByb3VuZGVkLTJ4bFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtY2VudGVyIGZvbnQtYm9sZCBmb250LXJvYm90byB0ZXh0LWJsYWNrIG0tMlwiPlxuICAgICAgICBGcmllbmQncyBDbGFzc2VzXG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC0zIG1iLTRcIj5cbiAgICAgICAgPFNlYXJjaEJhciBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9IHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7c2VhcmNoUXVlcnkgPT09IFwiXCIgPyAoXG4gICAgICAgIGZyaWVuZHMubWFwKChmcmllbmQsIGZyaWVuZEluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtmcmllbmRJbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTYgcC0zIGJnLWdyYXktMTAwIHNoYWRvdy1tZCByb3VuZGVkLWxnIHctZnVsbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTcwMCBmb250LXJvYm90b1wiPlxuICAgICAgICAgICAgICB7ZnJpZW5kLmZyaWVuZE5hbWV9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtbm9uZSBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAge2ZyaWVuZC5jbGFzc2VzLm1hcCgoY291cnNlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxDbGFzc0NhcmRcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBjbGFzc0lkPXtjb3Vyc2UuY2xhc3NJZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y291cnNlLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgIHByb2Zlc3Nvcj17Y291cnNlLnByb2Zlc3Nvcn1cbiAgICAgICAgICAgICAgICAgIHJlbW92YWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBiZy13aGl0ZSBzaGFkb3ctbGcgcm91bmRlZC1sZyB3LWZ1bGwgbWF4LWgtNjAgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAge2ZpbHRlcmVkRnJpZW5kcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgZmlsdGVyZWRGcmllbmRzLm1hcCgoZnJpZW5kLCBmcmllbmRJbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17ZnJpZW5kSW5kZXh9IGNsYXNzTmFtZT1cInAtMyBob3ZlcjpiZy1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAge2ZyaWVuZC5mcmllbmROYW1lfVxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAge2ZyaWVuZC5jbGFzc2VzLm1hcCgoY291cnNlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntjb3Vyc2UuY2xhc3NJZH08L3NwYW4+OntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICB7Y291cnNlLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC0zIHRleHQtZ3JheS01MDBcIj5ObyByZXN1bHRzIGZvdW5kPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2xhc3NDYXJkIiwiU2VhcmNoQmFyIiwiRnJpZW5kc0xpc3QiLCJjdXJyZW50VXNlcklkIiwiZnJpZW5kcyIsInNldEZyaWVuZHMiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJtYXBwZWRGcmllbmRzIiwibWFwIiwiZnJpZW5kIiwiZnJpZW5kTmFtZSIsIm5hbWUiLCJjbGFzc2VzIiwiY291cnNlc0ludGVyZXN0ZWQiLCJjb3Vyc2UiLCJjbGFzc0lkIiwiY291cnNlTnVtYmVyIiwiY2xhc3NOYW1lIiwicHJvZmVzc29yIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJmaWx0ZXJlZEZyaWVuZHMiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibGVuZ3RoIiwiZGl2IiwiaDEiLCJmcmllbmRJbmRleCIsImgyIiwidWwiLCJpbmRleCIsInJlbW92YWJsZSIsImxpIiwic3BhbiIsInAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FriendsList.tsx\n"));

/***/ })

});