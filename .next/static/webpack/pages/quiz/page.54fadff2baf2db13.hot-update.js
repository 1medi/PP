"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quiz/page",{

/***/ "./pages/quiz/page.jsx":
/*!*****************************!*\
  !*** ./pages/quiz/page.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./pages/data.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page.module.css */ \"./pages/quiz/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [activeQuestion, setActiveQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [selectedAnswer, setSelectedAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedAnswerIndex, setSelectedAnswerIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [showResult, setShowResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        score: 0,\n        correctAnswers: 0,\n        wrongAnswers: 0\n    });\n    const { questions } = _data__WEBPACK_IMPORTED_MODULE_2__.quiz;\n    const { question, answers, correctAnswer } = questions[activeQuestion];\n    const onAnswerSelected = (answer, idx)=>{\n        setChecked(true);\n        setSelectedAnswerIndex(idx);\n        if (answer === correctAnswer) {\n            setSelectedAnswer(true);\n            console.log(\"true\");\n        } else {\n            setSelectedAnswer(false);\n            console.log(\"false\");\n        }\n    };\n    // Calculate score and increment to next question\n    const nextQuestion = ()=>{\n        setSelectedAnswerIndex(null);\n        setResult((prev)=>selectedAnswer ? {\n                ...prev,\n                score: prev.score + 5,\n                correctAnswers: prev.correctAnswers + 1\n            } : {\n                ...prev,\n                wrongAnswers: prev.wrongAnswers + 1\n            });\n        if (activeQuestion !== questions.length - 1) {\n            setActiveQuestion((prev)=>prev + 1);\n        } else {\n            setActiveQuestion(0);\n            setShowResult(true);\n        }\n        setChecked(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().container)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                    children: \"Quiz Page\"\n                }, void 0, false, {\n                    fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().activeQ),\n                        children: [\n                            \"Question: \",\n                            activeQuestion + 1,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"/\",\n                                    questions.length\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: !showResult ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().quizContainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().question),\n                                children: questions[activeQuestion].question\n                            }, void 0, false, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this),\n                            answers.map((answer, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: ()=>onAnswerSelected(answer, idx),\n                                    className: \"\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().answerList), \" \").concat(selectedAnswerIndex === idx ? (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().itemSelected) : (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().itemHover)),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: answer\n                                    }, void 0, false, {\n                                        fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, this)\n                                }, idx, false, {\n                                    fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this)),\n                            checked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: nextQuestion,\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().btn),\n                                children: activeQuestion === question.length - 1 ? \"Finish\" : \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: nextQuestion,\n                                disabled: true,\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnDisabled),\n                                children: [\n                                    \" \",\n                                    activeQuestion === question.length - 1 ? \"Finish\" : \"Next\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().quizContainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().hthree),\n                                children: \"Results\"\n                            }, void 0, false, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().hthree),\n                                children: [\n                                    \"Overall \",\n                                    result.score / 25 * 100,\n                                    \"%\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().paragraph),\n                                children: [\n                                    \"Total Questions: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: questions.length\n                                    }, void 0, false, {\n                                        fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 32\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().paragraph),\n                                children: [\n                                    \"Total Score: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: result.score\n                                    }, void 0, false, {\n                                        fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 28\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().paragraph),\n                                children: [\n                                    \"Correct Answers: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: result.correctAnswers\n                                    }, void 0, false, {\n                                        fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 32\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().paragraph),\n                                children: [\n                                    \"Wrong Answers: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: result.wrongAnswers\n                                    }, void 0, false, {\n                                        fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 30\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().btn),\n                                onClick: ()=>window.location.reload(),\n                                children: \"Restart\"\n                            }, void 0, false, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n            lineNumber: 64,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Page, \"eeSiWKAmVossgq/S4/DTVb7tFzY=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUIsUUFBUTtnQ0FBQ2pCLFdBQVcvQixxRUFBa0I7O29DQUNsRTtvQ0FDQUcsbUJBQW1CZ0IsU0FBU1UsTUFBTSxHQUFHLElBQUksV0FBVzs7Ozs7Ozs7Ozs7OzZDQUszRCw4REFBQ0M7d0JBQUlDLFdBQVcvQix1RUFBb0I7OzBDQUNsQyw4REFBQ3VDO2dDQUFHUixXQUFXL0IsZ0VBQWE7MENBQUU7Ozs7OzswQ0FDOUIsOERBQUN1QztnQ0FBR1IsV0FBVy9CLGdFQUFhOztvQ0FBRTtvQ0FBVWEsT0FBT0UsS0FBSyxHQUFHLEtBQU07b0NBQUk7Ozs7Ozs7MENBQ2pFLDhEQUFDb0M7Z0NBQUVwQixXQUFXL0IsbUVBQWdCOztvQ0FBRTtrREFDYiw4REFBQ3FDO2tEQUFNbkIsVUFBVVcsTUFBTTs7Ozs7Ozs7Ozs7OzBDQUUxQyw4REFBQ3NCO2dDQUFFcEIsV0FBVy9CLG1FQUFnQjs7b0NBQUU7a0RBQ2pCLDhEQUFDcUM7a0RBQU14QixPQUFPRSxLQUFLOzs7Ozs7Ozs7Ozs7MENBRWxDLDhEQUFDb0M7Z0NBQUVwQixXQUFXL0IsbUVBQWdCOztvQ0FBRTtrREFDYiw4REFBQ3FDO2tEQUFNeEIsT0FBT0csY0FBYzs7Ozs7Ozs7Ozs7OzBDQUUvQyw4REFBQ21DO2dDQUFFcEIsV0FBVy9CLG1FQUFnQjs7b0NBQUU7a0RBQ2YsOERBQUNxQztrREFBTXhCLE9BQU9JLFlBQVk7Ozs7Ozs7Ozs7OzswQ0FFM0MsOERBQUM2QjtnQ0FBT2YsV0FBVy9CLDZEQUFVO2dDQUFFMEMsU0FBUyxJQUFNVyxPQUFPQyxRQUFRLENBQUNDLE1BQU07MENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFwRjtHQTdHd0JyRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9xdWl6L3BhZ2UuanN4PzJmMDQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcXVpeiB9IGZyb20gXCIuLi9kYXRhXCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IE1vbnRzZXJyYXQgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBub3RvU2FucyA9IE1vbnRzZXJyYXQoeyBcbiAgc3Vic2V0czogWydsYXRpbiddLCAvLyBTcGVjaWZ5IGFueSBzdWJzZXRzLCBpZiBuZWVkZWRcbn0pO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgY29uc3QgW2FjdGl2ZVF1ZXN0aW9uLCBzZXRBY3RpdmVRdWVzdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NlbGVjdGVkQW5zd2VyLCBzZXRTZWxlY3RlZEFuc3dlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkQW5zd2VySW5kZXgsIHNldFNlbGVjdGVkQW5zd2VySW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzaG93UmVzdWx0LCBzZXRTaG93UmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKHtcbiAgICBzY29yZTogMCxcbiAgICBjb3JyZWN0QW5zd2VyczogMCxcbiAgICB3cm9uZ0Fuc3dlcnM6IDAsXG4gIH0pO1xuXG4gIGNvbnN0IHsgcXVlc3Rpb25zIH0gPSBxdWl6O1xuICBjb25zdCB7IHF1ZXN0aW9uLCBhbnN3ZXJzLCBjb3JyZWN0QW5zd2VyIH0gPSBxdWVzdGlvbnNbYWN0aXZlUXVlc3Rpb25dO1xuXG4gIGNvbnN0IG9uQW5zd2VyU2VsZWN0ZWQgPSAoYW5zd2VyLCBpZHgpID0+IHtcbiAgICBzZXRDaGVja2VkKHRydWUpO1xuICAgIHNldFNlbGVjdGVkQW5zd2VySW5kZXgoaWR4KTtcbiAgICBpZiAoYW5zd2VyID09PSBjb3JyZWN0QW5zd2VyKSB7XG4gICAgICBzZXRTZWxlY3RlZEFuc3dlcih0cnVlKTtcbiAgICAgIGNvbnNvbGUubG9nKCd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlbGVjdGVkQW5zd2VyKGZhbHNlKTtcbiAgICAgIGNvbnNvbGUubG9nKCdmYWxzZScpO1xuICAgIH1cbiAgfTtcblxuICAvLyBDYWxjdWxhdGUgc2NvcmUgYW5kIGluY3JlbWVudCB0byBuZXh0IHF1ZXN0aW9uXG4gIGNvbnN0IG5leHRRdWVzdGlvbiA9ICgpID0+IHtcbiAgICBzZXRTZWxlY3RlZEFuc3dlckluZGV4KG51bGwpO1xuICAgIHNldFJlc3VsdCgocHJldikgPT5cbiAgICAgIHNlbGVjdGVkQW5zd2VyXG4gICAgICAgID8ge1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHNjb3JlOiBwcmV2LnNjb3JlICsgNSxcbiAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXJzOiBwcmV2LmNvcnJlY3RBbnN3ZXJzICsgMSxcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHdyb25nQW5zd2VyczogcHJldi53cm9uZ0Fuc3dlcnMgKyAxLFxuICAgICAgICAgIH1cbiAgICApO1xuICAgIGlmIChhY3RpdmVRdWVzdGlvbiAhPT0gcXVlc3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHNldEFjdGl2ZVF1ZXN0aW9uKChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEFjdGl2ZVF1ZXN0aW9uKDApO1xuICAgICAgc2V0U2hvd1Jlc3VsdCh0cnVlKTtcbiAgICB9XG4gICAgc2V0Q2hlY2tlZChmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn1gfT5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+UXVpeiBQYWdlPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5hY3RpdmVRfT5cbiAgICAgICAgICBRdWVzdGlvbjoge2FjdGl2ZVF1ZXN0aW9uICsgMX1cbiAgICAgICAgICA8c3Bhbj4ve3F1ZXN0aW9ucy5sZW5ndGh9PC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7IXNob3dSZXN1bHQgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWl6Q29udGFpbmVyfT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbn0+e3F1ZXN0aW9uc1thY3RpdmVRdWVzdGlvbl0ucXVlc3Rpb259PC9oMz5cbiAgICAgICAgICAgIHthbnN3ZXJzLm1hcCgoYW5zd2VyLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BbnN3ZXJTZWxlY3RlZChhbnN3ZXIsIGlkeCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYW5zd2VyTGlzdH0gJHtzZWxlY3RlZEFuc3dlckluZGV4ID09PSBpZHggPyBzdHlsZXMuaXRlbVNlbGVjdGVkIDogc3R5bGVzLml0ZW1Ib3Zlcn1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2Fuc3dlcn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHtjaGVja2VkID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e25leHRRdWVzdGlvbn0gY2xhc3NOYW1lPXtzdHlsZXMuYnRufT5cbiAgICAgICAgICAgICAgICB7YWN0aXZlUXVlc3Rpb24gPT09IHF1ZXN0aW9uLmxlbmd0aCAtIDEgPyAnRmluaXNoJyA6ICdOZXh0J31cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e25leHRRdWVzdGlvbn0gZGlzYWJsZWQgY2xhc3NOYW1lPXtzdHlsZXMuYnRuRGlzYWJsZWR9PlxuICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAge2FjdGl2ZVF1ZXN0aW9uID09PSBxdWVzdGlvbi5sZW5ndGggLSAxID8gJ0ZpbmlzaCcgOiAnTmV4dCd9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1aXpDb250YWluZXJ9PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmh0aHJlZX0+UmVzdWx0czwvaDM+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaHRocmVlfT5PdmVyYWxsIHsocmVzdWx0LnNjb3JlIC8gMjUpICogMTAwfSU8L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgVG90YWwgUXVlc3Rpb25zOiA8c3Bhbj57cXVlc3Rpb25zLmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PiBcbiAgICAgICAgICAgICAgVG90YWwgU2NvcmU6IDxzcGFuPntyZXN1bHQuc2NvcmV9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgQ29ycmVjdCBBbnN3ZXJzOiA8c3Bhbj57cmVzdWx0LmNvcnJlY3RBbnN3ZXJzfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIFdyb25nIEFuc3dlcnM6IDxzcGFuPntyZXN1bHQud3JvbmdBbnN3ZXJzfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRufSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCl9PlJlc3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvPlxuXG4gICk7XG59OyJdLCJuYW1lcyI6WyJub3RvU2FucyIsIlJlYWN0IiwidXNlU3RhdGUiLCJxdWl6Iiwic3R5bGVzIiwiSGVhZCIsIlBhZ2UiLCJhY3RpdmVRdWVzdGlvbiIsInNldEFjdGl2ZVF1ZXN0aW9uIiwic2VsZWN0ZWRBbnN3ZXIiLCJzZXRTZWxlY3RlZEFuc3dlciIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwic2VsZWN0ZWRBbnN3ZXJJbmRleCIsInNldFNlbGVjdGVkQW5zd2VySW5kZXgiLCJzaG93UmVzdWx0Iiwic2V0U2hvd1Jlc3VsdCIsInJlc3VsdCIsInNldFJlc3VsdCIsInNjb3JlIiwiY29ycmVjdEFuc3dlcnMiLCJ3cm9uZ0Fuc3dlcnMiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJjb3JyZWN0QW5zd2VyIiwib25BbnN3ZXJTZWxlY3RlZCIsImFuc3dlciIsImlkeCIsImNvbnNvbGUiLCJsb2ciLCJuZXh0UXVlc3Rpb24iLCJwcmV2IiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJ0aXRsZSIsImgyIiwiYWN0aXZlUSIsInNwYW4iLCJxdWl6Q29udGFpbmVyIiwiaDMiLCJtYXAiLCJsaSIsIm9uQ2xpY2siLCJhbnN3ZXJMaXN0IiwiaXRlbVNlbGVjdGVkIiwiaXRlbUhvdmVyIiwiYnV0dG9uIiwiYnRuIiwiZGlzYWJsZWQiLCJidG5EaXNhYmxlZCIsImh0aHJlZSIsInAiLCJwYXJhZ3JhcGgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/quiz/page.jsx\n"));

/***/ })

});