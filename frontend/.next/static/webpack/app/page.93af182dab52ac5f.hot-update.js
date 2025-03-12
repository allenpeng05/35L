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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FriendsList)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nvar _s = $RefreshSig$();\nfunction FriendsList(param) {\n    let { currentUserId } = param;\n    _s();\n    const [friends, setFriends] = useState([]);\n    const [searchQuery, setSearchQuery] = useState(\"\");\n    useEffect({\n        \"FriendsList.useEffect\": ()=>{\n            if (!currentUserId) return;\n            // Fetch the user document\n            fetch(\"http://localhost:3001/api/users/\".concat(currentUserId)).then({\n                \"FriendsList.useEffect\": (res)=>res.json()\n            }[\"FriendsList.useEffect\"]).then({\n                \"FriendsList.useEffect\": (data)=>{\n                    if (data.friends) {\n                        // Map each friend to our Friend type.\n                        const mappedFriends = data.friends.map({\n                            \"FriendsList.useEffect.mappedFriends\": (friend)=>({\n                                    friendName: friend.name,\n                                    classes: friend.coursesInterested ? friend.coursesInterested.map({\n                                        \"FriendsList.useEffect.mappedFriends\": (course)=>({\n                                                classId: course.courseNumber,\n                                                className: course.name,\n                                                professor: course.professor\n                                            })\n                                    }[\"FriendsList.useEffect.mappedFriends\"]) : []\n                                })\n                        }[\"FriendsList.useEffect.mappedFriends\"]);\n                        setFriends(mappedFriends);\n                    }\n                }\n            }[\"FriendsList.useEffect\"]).catch({\n                \"FriendsList.useEffect\": (err)=>console.error(\"Error fetching friends:\", err)\n            }[\"FriendsList.useEffect\"]);\n        }\n    }[\"FriendsList.useEffect\"], [\n        currentUserId\n    ]);\n    const filteredFriends = friends.map((friend)=>({\n            ...friend,\n            classes: friend.classes.filter((course)=>friend.friendName.toLowerCase().includes(searchQuery.toLowerCase()) || course.className.toLowerCase().includes(searchQuery.toLowerCase()))\n        })).filter((friend)=>friend.classes.length > 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/2 h-full max-h-[95%] overflow-y-auto p-4 bg-gray-300 m-[1%] rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl text-center font-bold font-roboto text-black m-2\",\n                children: \"Friend's Classes\"\n            }, void 0, false, {\n                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative mt-3 mb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchBar, {\n                    searchQuery: searchQuery,\n                    setSearchQuery: setSearchQuery\n                }, void 0, false, {\n                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            filteredFriends.map((friend, friendIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-6 p-3 bg-gray-100 shadow-md rounded-lg w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold text-center text-gray-700 font-roboto\",\n                            children: friend.friendName\n                        }, void 0, false, {\n                            fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-none space-y-2\",\n                            children: friend.classes.map((course, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ClassCard, {\n                                    classId: course.classId,\n                                    className: course.className,\n                                    professor: course.professor,\n                                    removable: false\n                                }, index, false, {\n                                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, friendIndex, true, {\n                    fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshlipman/35lproj/35L/frontend/src/components/FriendsList.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(FriendsList, \"IXRYqQQAskKdJ5LwrBK4HcNzvHk=\");\n_c = FriendsList;\nvar _c;\n$RefreshReg$(_c, \"FriendsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZyaWVuZHNMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsWUFBWSxLQUFtQztRQUFuQyxFQUFFQyxhQUFhLEVBQW9CLEdBQW5DOztJQUNsQyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0MsU0FBbUIsRUFBRTtJQUNuRCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0YsU0FBUztJQUUvQ0c7aUNBQVU7WUFDUixJQUFJLENBQUNOLGVBQWU7WUFDcEIsMEJBQTBCO1lBQzFCTyxNQUFNLG1DQUFpRCxPQUFkUCxnQkFDdENRLElBQUk7eUNBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTt3Q0FDdEJGLElBQUk7eUNBQUMsQ0FBQ0c7b0JBQ0wsSUFBSUEsS0FBS1YsT0FBTyxFQUFFO3dCQUNoQixzQ0FBc0M7d0JBQ3RDLE1BQU1XLGdCQUEwQkQsS0FBS1YsT0FBTyxDQUFDWSxHQUFHO21FQUFDLENBQUNDLFNBQWlCO29DQUNqRUMsWUFBWUQsT0FBT0UsSUFBSTtvQ0FDdkJDLFNBQVNILE9BQU9JLGlCQUFpQixHQUM3QkosT0FBT0ksaUJBQWlCLENBQUNMLEdBQUc7K0VBQUMsQ0FBQ00sU0FBaUI7Z0RBQzdDQyxTQUFTRCxPQUFPRSxZQUFZO2dEQUM1QkMsV0FBV0gsT0FBT0gsSUFBSTtnREFDdEJPLFdBQVdKLE9BQU9JLFNBQVM7NENBQzdCO2dGQUNBLEVBQUU7Z0NBQ1I7O3dCQUNBckIsV0FBV1U7b0JBQ2I7Z0JBQ0Y7d0NBQ0NZLEtBQUs7eUNBQUMsQ0FBQ0MsTUFBUUMsUUFBUUMsS0FBSyxDQUFDLDJCQUEyQkY7O1FBQzdEO2dDQUFHO1FBQUN6QjtLQUFjO0lBRWxCLE1BQU00QixrQkFBa0IzQixRQUNyQlksR0FBRyxDQUFDLENBQUNDLFNBQVk7WUFDaEIsR0FBR0EsTUFBTTtZQUNURyxTQUFTSCxPQUFPRyxPQUFPLENBQUNZLE1BQU0sQ0FDNUIsQ0FBQ1YsU0FDQ0wsT0FBT0MsVUFBVSxDQUFDZSxXQUFXLEdBQUdDLFFBQVEsQ0FBQzNCLFlBQVkwQixXQUFXLE9BQ2hFWCxPQUFPRyxTQUFTLENBQUNRLFdBQVcsR0FBR0MsUUFBUSxDQUFDM0IsWUFBWTBCLFdBQVc7UUFFckUsSUFDQ0QsTUFBTSxDQUFDLENBQUNmLFNBQVdBLE9BQU9HLE9BQU8sQ0FBQ2UsTUFBTSxHQUFHO0lBRTlDLHFCQUNFLDhEQUFDQztRQUFJWCxXQUFVOzswQkFDYiw4REFBQ1k7Z0JBQUdaLFdBQVU7MEJBQTREOzs7Ozs7MEJBRzFFLDhEQUFDVztnQkFBSVgsV0FBVTswQkFDYiw0RUFBQ2E7b0JBQVUvQixhQUFhQTtvQkFBYUMsZ0JBQWdCQTs7Ozs7Ozs7Ozs7WUFHdER1QixnQkFBZ0JmLEdBQUcsQ0FBQyxDQUFDQyxRQUFRc0IsNEJBQzVCLDhEQUFDSDtvQkFFQ1gsV0FBVTs7c0NBRVYsOERBQUNlOzRCQUFHZixXQUFVO3NDQUNYUixPQUFPQyxVQUFVOzs7Ozs7c0NBRXBCLDhEQUFDdUI7NEJBQUdoQixXQUFVO3NDQUNYUixPQUFPRyxPQUFPLENBQUNKLEdBQUcsQ0FBQyxDQUFDTSxRQUFRb0Isc0JBQzNCLDhEQUFDQztvQ0FFQ3BCLFNBQVNELE9BQU9DLE9BQU87b0NBQ3ZCRSxXQUFXSCxPQUFPRyxTQUFTO29DQUMzQkMsV0FBV0osT0FBT0ksU0FBUztvQ0FDM0JrQixXQUFXO21DQUpORjs7Ozs7Ozs7Ozs7bUJBVE5IOzs7Ozs7Ozs7OztBQXFCZjtHQXZFd0JyQztLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL2pvc2hsaXBtYW4vMzVscHJvai8zNUwvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvRnJpZW5kc0xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZyaWVuZHNMaXN0KHsgY3VycmVudFVzZXJJZCB9OiBGcmllbmRzTGlzdFByb3BzKSB7XG4gIGNvbnN0IFtmcmllbmRzLCBzZXRGcmllbmRzXSA9IHVzZVN0YXRlPEZyaWVuZFtdPihbXSk7XG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRVc2VySWQpIHJldHVybjtcbiAgICAvLyBGZXRjaCB0aGUgdXNlciBkb2N1bWVudFxuICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3VzZXJzLyR7Y3VycmVudFVzZXJJZH1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmZyaWVuZHMpIHtcbiAgICAgICAgICAvLyBNYXAgZWFjaCBmcmllbmQgdG8gb3VyIEZyaWVuZCB0eXBlLlxuICAgICAgICAgIGNvbnN0IG1hcHBlZEZyaWVuZHM6IEZyaWVuZFtdID0gZGF0YS5mcmllbmRzLm1hcCgoZnJpZW5kOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBmcmllbmROYW1lOiBmcmllbmQubmFtZSxcbiAgICAgICAgICAgIGNsYXNzZXM6IGZyaWVuZC5jb3Vyc2VzSW50ZXJlc3RlZFxuICAgICAgICAgICAgICA/IGZyaWVuZC5jb3Vyc2VzSW50ZXJlc3RlZC5tYXAoKGNvdXJzZTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgY2xhc3NJZDogY291cnNlLmNvdXJzZU51bWJlcixcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY291cnNlLm5hbWUsXG4gICAgICAgICAgICAgICAgICBwcm9mZXNzb3I6IGNvdXJzZS5wcm9mZXNzb3IsXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIDogW10sXG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIHNldEZyaWVuZHMobWFwcGVkRnJpZW5kcyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGZyaWVuZHM6XCIsIGVycikpO1xuICB9LCBbY3VycmVudFVzZXJJZF0pO1xuXG4gIGNvbnN0IGZpbHRlcmVkRnJpZW5kcyA9IGZyaWVuZHNcbiAgICAubWFwKChmcmllbmQpID0+ICh7XG4gICAgICAuLi5mcmllbmQsXG4gICAgICBjbGFzc2VzOiBmcmllbmQuY2xhc3Nlcy5maWx0ZXIoXG4gICAgICAgIChjb3Vyc2UpID0+XG4gICAgICAgICAgZnJpZW5kLmZyaWVuZE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIGNvdXJzZS5jbGFzc05hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKVxuICAgICAgKSxcbiAgICB9KSlcbiAgICAuZmlsdGVyKChmcmllbmQpID0+IGZyaWVuZC5jbGFzc2VzLmxlbmd0aCA+IDApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBoLWZ1bGwgbWF4LWgtWzk1JV0gb3ZlcmZsb3cteS1hdXRvIHAtNCBiZy1ncmF5LTMwMCBtLVsxJV0gcm91bmRlZC0yeGxcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWNlbnRlciBmb250LWJvbGQgZm9udC1yb2JvdG8gdGV4dC1ibGFjayBtLTJcIj5cbiAgICAgICAgRnJpZW5kJ3MgQ2xhc3Nlc1xuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtMyBtYi00XCI+XG4gICAgICAgIDxTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2ZpbHRlcmVkRnJpZW5kcy5tYXAoKGZyaWVuZCwgZnJpZW5kSW5kZXgpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17ZnJpZW5kSW5kZXh9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNiBwLTMgYmctZ3JheS0xMDAgc2hhZG93LW1kIHJvdW5kZWQtbGcgdy1mdWxsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHRleHQtZ3JheS03MDAgZm9udC1yb2JvdG9cIj5cbiAgICAgICAgICAgIHtmcmllbmQuZnJpZW5kTmFtZX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LW5vbmUgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICB7ZnJpZW5kLmNsYXNzZXMubWFwKChjb3Vyc2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxDbGFzc0NhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGNsYXNzSWQ9e2NvdXJzZS5jbGFzc0lkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y291cnNlLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBwcm9mZXNzb3I9e2NvdXJzZS5wcm9mZXNzb3J9XG4gICAgICAgICAgICAgICAgcmVtb3ZhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiRnJpZW5kc0xpc3QiLCJjdXJyZW50VXNlcklkIiwiZnJpZW5kcyIsInNldEZyaWVuZHMiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIm1hcHBlZEZyaWVuZHMiLCJtYXAiLCJmcmllbmQiLCJmcmllbmROYW1lIiwibmFtZSIsImNsYXNzZXMiLCJjb3Vyc2VzSW50ZXJlc3RlZCIsImNvdXJzZSIsImNsYXNzSWQiLCJjb3Vyc2VOdW1iZXIiLCJjbGFzc05hbWUiLCJwcm9mZXNzb3IiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImZpbHRlcmVkRnJpZW5kcyIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJkaXYiLCJoMSIsIlNlYXJjaEJhciIsImZyaWVuZEluZGV4IiwiaDIiLCJ1bCIsImluZGV4IiwiQ2xhc3NDYXJkIiwicmVtb3ZhYmxlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FriendsList.tsx\n"));

/***/ })

});