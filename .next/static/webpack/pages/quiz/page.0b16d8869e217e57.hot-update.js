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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_quiz_page_jsx_import_Montserrat_arguments_subsets_latin_variableName_notoSans___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages/quiz/page.jsx\",\"import\":\"Montserrat\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"notoSans\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages/quiz/page.jsx\\\",\\\"import\\\":\\\"Montserrat\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"notoSans\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_quiz_page_jsx_import_Montserrat_arguments_subsets_latin_variableName_notoSans___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_quiz_page_jsx_import_Montserrat_arguments_subsets_latin_variableName_notoSans___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./pages/data.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page.module.css */ \"./pages/quiz/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [activeQuestion, setActiveQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [selectedAnswer, setSelectedAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedAnswerIndex, setSelectedAnswerIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [showResult, setShowResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        score: 0,\n        correctAnswers: 0,\n        wrongAnswers: 0\n    });\n    const { questions } = _data__WEBPACK_IMPORTED_MODULE_2__.quiz;\n    const { question, answers, correctAnswer } = questions[activeQuestion];\n    const onAnswerSelected = (answer, idx)=>{\n        setChecked(true);\n        setSelectedAnswerIndex(idx);\n        if (answer === correctAnswer) {\n            setSelectedAnswer(true);\n            console.log(\"true\");\n        } else {\n            setSelectedAnswer(false);\n            console.log(\"false\");\n        }\n    };\n    // Calculate score and increment to next question\n    const nextQuestion = ()=>{\n        setSelectedAnswerIndex(null);\n        setResult((prev)=>selectedAnswer ? {\n                ...prev,\n                score: prev.score + 5,\n                correctAnswers: prev.correctAnswers + 1\n            } : {\n                ...prev,\n                wrongAnswers: prev.wrongAnswers + 1\n            });\n        if (activeQuestion !== questions.length - 1) {\n            setActiveQuestion((prev)=>prev + 1);\n        } else {\n            setActiveQuestion(0);\n            setShowResult(true);\n        }\n        setChecked(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((next_font_google_target_css_path_pages_quiz_page_jsx_import_Montserrat_arguments_subsets_latin_variableName_notoSans___WEBPACK_IMPORTED_MODULE_4___default().container), \" \").concat((_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().container)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                    children: \"Quiz Page\"\n                }, void 0, false, {\n                    fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().activeQ),\n                        children: [\n                            \"Question: \",\n                            activeQuestion + 1,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"/\",\n                                    questions.length\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: !showResult ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().quizContainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().question),\n                                children: questions[activeQuestion].question\n                            }, void 0, false, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this),\n                            answers.map((answer, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: ()=>onAnswerSelected(answer, idx),\n                                    className: \"\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().answerList), \" \").concat(selectedAnswerIndex === idx ? (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().itemSelected) : (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().itemHover)),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: answer\n                                    }, void 0, false, {\n                                        fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 17\n                                    }, this)\n                                }, idx, false, {\n                                    fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this)),\n                            checked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: nextQuestion,\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn),\n                                children: activeQuestion === question.length - 1 ? \"Finish\" : \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: nextQuestion,\n                                disabled: true,\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().btnDisabled),\n                                children: [\n                                    \" \",\n                                    activeQuestion === question.length - 1 ? \"Finish\" : \"Next\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().quizContainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().hthree),\n                                children: \"Results\"\n                            }, void 0, false, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().hthree),\n                                children: [\n                                    \"Overall \",\n                                    result.score / 25 * 100,\n                                    \"%\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().paragraph),\n                                children: [\n                                    \"Total Questions: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: questions.length\n                                    }, void 0, false, {\n                                        fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 32\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().paragraph),\n                                children: [\n                                    \"Total Score: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: result.score\n                                    }, void 0, false, {\n                                        fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 28\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().paragraph),\n                                children: [\n                                    \"Correct Answers: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: result.correctAnswers\n                                    }, void 0, false, {\n                                        fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 32\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().paragraph),\n                                children: [\n                                    \"Wrong Answers: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: result.wrongAnswers\n                                    }, void 0, false, {\n                                        fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 30\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn),\n                                onClick: ()=>window.location.reload(),\n                                children: \"Restart\"\n                            }, void 0, false, {\n                                fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/irinalim/Desktop/PP/pages/quiz/page.jsx\",\n            lineNumber: 73,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Page, \"eeSiWKAmVossgq/S4/DTVb7tFzY=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCw4REFBQ2lCO2dDQUFPSixTQUFTZjtnQ0FBY3FCLFFBQVE7Z0NBQUNqQixXQUFXL0IscUVBQWtCOztvQ0FDbEU7b0NBQ0FHLG1CQUFtQmdCLFNBQVNVLE1BQU0sR0FBRyxJQUFJLFdBQVc7Ozs7Ozs7Ozs7Ozs2Q0FLM0QsOERBQUNDO3dCQUFJQyxXQUFXL0IsdUVBQW9COzswQ0FDbEMsOERBQUN1QztnQ0FBR1IsV0FBVy9CLGdFQUFhOzBDQUFFOzs7Ozs7MENBQzlCLDhEQUFDdUM7Z0NBQUdSLFdBQVcvQixnRUFBYTs7b0NBQUU7b0NBQVVhLE9BQU9FLEtBQUssR0FBRyxLQUFNO29DQUFJOzs7Ozs7OzBDQUNqRSw4REFBQ29DO2dDQUFFcEIsV0FBVy9CLG1FQUFnQjs7b0NBQUU7a0RBQ2IsOERBQUNxQztrREFBTW5CLFVBQVVXLE1BQU07Ozs7Ozs7Ozs7OzswQ0FFMUMsOERBQUNzQjtnQ0FBRXBCLFdBQVcvQixtRUFBZ0I7O29DQUFFO2tEQUNqQiw4REFBQ3FDO2tEQUFNeEIsT0FBT0UsS0FBSzs7Ozs7Ozs7Ozs7OzBDQUVsQyw4REFBQ29DO2dDQUFFcEIsV0FBVy9CLG1FQUFnQjs7b0NBQUU7a0RBQ2IsOERBQUNxQztrREFBTXhCLE9BQU9HLGNBQWM7Ozs7Ozs7Ozs7OzswQ0FFL0MsOERBQUNtQztnQ0FBRXBCLFdBQVcvQixtRUFBZ0I7O29DQUFFO2tEQUNmLDhEQUFDcUM7a0RBQU14QixPQUFPSSxZQUFZOzs7Ozs7Ozs7Ozs7MENBRTNDLDhEQUFDNkI7Z0NBQU9mLFdBQVcvQiw2REFBVTtnQ0FBRTBDLFNBQVMsSUFBTVcsT0FBT0MsUUFBUSxDQUFDQyxNQUFNOzBDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRcEY7R0F0SHdCckQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei9wYWdlLmpzeD8yZjA0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHF1aXogfSBmcm9tIFwiLi4vZGF0YVwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBNb250c2VycmF0IH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3Qgbm90b1NhbnMgPSBNb250c2VycmF0KHsgXG4gIHN1YnNldHM6IFsnbGF0aW4nXSwgLy8gU3BlY2lmeSBhbnkgc3Vic2V0cywgaWYgbmVlZGVkXG59KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFthY3RpdmVRdWVzdGlvbiwgc2V0QWN0aXZlUXVlc3Rpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzZWxlY3RlZEFuc3dlciwgc2V0U2VsZWN0ZWRBbnN3ZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZEFuc3dlckluZGV4LCBzZXRTZWxlY3RlZEFuc3dlckluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2hvd1Jlc3VsdCwgc2V0U2hvd1Jlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSh7XG4gICAgc2NvcmU6IDAsXG4gICAgY29ycmVjdEFuc3dlcnM6IDAsXG4gICAgd3JvbmdBbnN3ZXJzOiAwLFxuICB9KTtcblxuICBjb25zdCB7IHF1ZXN0aW9ucyB9ID0gcXVpejtcbiAgY29uc3QgeyBxdWVzdGlvbiwgYW5zd2VycywgY29ycmVjdEFuc3dlciB9ID0gcXVlc3Rpb25zW2FjdGl2ZVF1ZXN0aW9uXTtcblxuICBjb25zdCBvbkFuc3dlclNlbGVjdGVkID0gKGFuc3dlciwgaWR4KSA9PiB7XG4gICAgc2V0Q2hlY2tlZCh0cnVlKTtcbiAgICBzZXRTZWxlY3RlZEFuc3dlckluZGV4KGlkeCk7XG4gICAgaWYgKGFuc3dlciA9PT0gY29ycmVjdEFuc3dlcikge1xuICAgICAgc2V0U2VsZWN0ZWRBbnN3ZXIodHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZygndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZEFuc3dlcihmYWxzZSk7XG4gICAgICBjb25zb2xlLmxvZygnZmFsc2UnKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQ2FsY3VsYXRlIHNjb3JlIGFuZCBpbmNyZW1lbnQgdG8gbmV4dCBxdWVzdGlvblxuICBjb25zdCBuZXh0UXVlc3Rpb24gPSAoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRBbnN3ZXJJbmRleChudWxsKTtcbiAgICBzZXRSZXN1bHQoKHByZXYpID0+XG4gICAgICBzZWxlY3RlZEFuc3dlclxuICAgICAgICA/IHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBzY29yZTogcHJldi5zY29yZSArIDUsXG4gICAgICAgICAgICBjb3JyZWN0QW5zd2VyczogcHJldi5jb3JyZWN0QW5zd2VycyArIDEsXG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICB3cm9uZ0Fuc3dlcnM6IHByZXYud3JvbmdBbnN3ZXJzICsgMSxcbiAgICAgICAgICB9XG4gICAgKTtcbiAgICBpZiAoYWN0aXZlUXVlc3Rpb24gIT09IHF1ZXN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICBzZXRBY3RpdmVRdWVzdGlvbigocHJldikgPT4gcHJldiArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRBY3RpdmVRdWVzdGlvbigwKTtcbiAgICAgIHNldFNob3dSZXN1bHQodHJ1ZSk7XG4gICAgfVxuICAgIHNldENoZWNrZWQoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICB7LyogPEhlYWQ+XG4gICAgPHRpdGxlPlF1aXo8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc29yaWdpbi8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK1NhbnM6aXRhbCxvcHN6LHdnaHRAMCw5Li40MCwxMDAuLjEwMDA7MSw5Li40MCwxMDAuLjEwMDAmZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZmFtaWx5PU5vdG8rU2FuczppdGFsLHdnaHRAMCwxMDAuLjkwMDsxLDEwMC4uOTAwJmZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwLi44MDA7MSwzMDAuLjgwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgIDwvSGVhZD4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtub3RvU2Fucy5jb250YWluZXJ9ICR7c3R5bGVzLmNvbnRhaW5lcn1gfT5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+UXVpeiBQYWdlPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5hY3RpdmVRfT5cbiAgICAgICAgICBRdWVzdGlvbjoge2FjdGl2ZVF1ZXN0aW9uICsgMX1cbiAgICAgICAgICA8c3Bhbj4ve3F1ZXN0aW9ucy5sZW5ndGh9PC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7IXNob3dSZXN1bHQgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWl6Q29udGFpbmVyfT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbn0+e3F1ZXN0aW9uc1thY3RpdmVRdWVzdGlvbl0ucXVlc3Rpb259PC9oMz5cbiAgICAgICAgICAgIHthbnN3ZXJzLm1hcCgoYW5zd2VyLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BbnN3ZXJTZWxlY3RlZChhbnN3ZXIsIGlkeCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYW5zd2VyTGlzdH0gJHtzZWxlY3RlZEFuc3dlckluZGV4ID09PSBpZHggPyBzdHlsZXMuaXRlbVNlbGVjdGVkIDogc3R5bGVzLml0ZW1Ib3Zlcn1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2Fuc3dlcn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHtjaGVja2VkID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e25leHRRdWVzdGlvbn0gY2xhc3NOYW1lPXtzdHlsZXMuYnRufT5cbiAgICAgICAgICAgICAgICB7YWN0aXZlUXVlc3Rpb24gPT09IHF1ZXN0aW9uLmxlbmd0aCAtIDEgPyAnRmluaXNoJyA6ICdOZXh0J31cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e25leHRRdWVzdGlvbn0gZGlzYWJsZWQgY2xhc3NOYW1lPXtzdHlsZXMuYnRuRGlzYWJsZWR9PlxuICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAge2FjdGl2ZVF1ZXN0aW9uID09PSBxdWVzdGlvbi5sZW5ndGggLSAxID8gJ0ZpbmlzaCcgOiAnTmV4dCd9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1aXpDb250YWluZXJ9PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmh0aHJlZX0+UmVzdWx0czwvaDM+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaHRocmVlfT5PdmVyYWxsIHsocmVzdWx0LnNjb3JlIC8gMjUpICogMTAwfSU8L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgVG90YWwgUXVlc3Rpb25zOiA8c3Bhbj57cXVlc3Rpb25zLmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PiBcbiAgICAgICAgICAgICAgVG90YWwgU2NvcmU6IDxzcGFuPntyZXN1bHQuc2NvcmV9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgQ29ycmVjdCBBbnN3ZXJzOiA8c3Bhbj57cmVzdWx0LmNvcnJlY3RBbnN3ZXJzfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIFdyb25nIEFuc3dlcnM6IDxzcGFuPntyZXN1bHQud3JvbmdBbnN3ZXJzfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRufSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCl9PlJlc3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvPlxuXG4gICk7XG59OyJdLCJuYW1lcyI6WyJub3RvU2FucyIsIlJlYWN0IiwidXNlU3RhdGUiLCJxdWl6Iiwic3R5bGVzIiwiSGVhZCIsIlBhZ2UiLCJhY3RpdmVRdWVzdGlvbiIsInNldEFjdGl2ZVF1ZXN0aW9uIiwic2VsZWN0ZWRBbnN3ZXIiLCJzZXRTZWxlY3RlZEFuc3dlciIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwic2VsZWN0ZWRBbnN3ZXJJbmRleCIsInNldFNlbGVjdGVkQW5zd2VySW5kZXgiLCJzaG93UmVzdWx0Iiwic2V0U2hvd1Jlc3VsdCIsInJlc3VsdCIsInNldFJlc3VsdCIsInNjb3JlIiwiY29ycmVjdEFuc3dlcnMiLCJ3cm9uZ0Fuc3dlcnMiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJjb3JyZWN0QW5zd2VyIiwib25BbnN3ZXJTZWxlY3RlZCIsImFuc3dlciIsImlkeCIsImNvbnNvbGUiLCJsb2ciLCJuZXh0UXVlc3Rpb24iLCJwcmV2IiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJ0aXRsZSIsImgyIiwiYWN0aXZlUSIsInNwYW4iLCJxdWl6Q29udGFpbmVyIiwiaDMiLCJtYXAiLCJsaSIsIm9uQ2xpY2siLCJhbnN3ZXJMaXN0IiwiaXRlbVNlbGVjdGVkIiwiaXRlbUhvdmVyIiwiYnV0dG9uIiwiYnRuIiwiZGlzYWJsZWQiLCJidG5EaXNhYmxlZCIsImh0aHJlZSIsInAiLCJwYXJhZ3JhcGgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/quiz/page.jsx\n"));

/***/ })

});