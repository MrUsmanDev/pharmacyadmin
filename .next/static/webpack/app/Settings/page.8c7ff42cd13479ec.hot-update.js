"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Settings/page",{

/***/ "(app-pages-browser)/./app/Settings/SettingsApp.tsx":
/*!**************************************!*\
  !*** ./app/Settings/SettingsApp.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Card */ \"(app-pages-browser)/./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CardContent */ \"(app-pages-browser)/./node_modules/@mui/material/CardContent/CardContent.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Row */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Col */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/common */ \"(app-pages-browser)/./utils/common.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_Settings_SettingsAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/Settings/SettingsAPI */ \"(app-pages-browser)/./utils/Settings/SettingsAPI.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst SettingsApp = ()=>{\n    var _session_data_user_, _session_data;\n    _s();\n    const [oldPassword, setoldPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [newPassword, setnewPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [RepeatPassword, setRepeatPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const UserID = (_session_data = session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user_ = _session_data.user[0]) === null || _session_data_user_ === void 0 ? void 0 : _session_data_user_.UserID;\n    const isEmpty = (value, fieldName)=>{\n        if (value.trim() === \"\") {\n            (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.Showmsg)(\"Please Enter \".concat(fieldName));\n            return true;\n        }\n        return false;\n    };\n    const ChangePasswordHandler = async ()=>{\n        if (isEmpty(oldPassword, \"Old Password\") || isEmpty(newPassword, \"New Password\") || isEmpty(RepeatPassword, \"Repeat Password\")) {\n            return;\n        }\n        if (newPassword !== RepeatPassword) {\n            (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.Showmsg)(\"New and Repeat Password should Match\");\n            return;\n        }\n        let ChangePasswordObj = {\n            UserID: UserID,\n            OldPassword: oldPassword,\n            NewPassword: newPassword\n        };\n        const res = await (0,_utils_Settings_SettingsAPI__WEBPACK_IMPORTED_MODULE_4__.ChangePassword)(ChangePasswordObj);\n        if (!res.status) {\n            (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.Showmsg)(\"Something went wrong API Error\");\n        } else {\n            (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.Showmsg)(res.data.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"content container-fluid\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            variant: \"h5\",\n                            children: \"Change Password\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Source Codes\\\\DoctorsHUb\\\\pharmacyadmin\\\\app\\\\Settings\\\\SettingsApp.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    xs: 12,\n                                    sm: 6,\n                                    md: 3,\n                                    lg: 3,\n                                    xl: 3,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        id: \"standard-basic\",\n                                        label: \"Old Password\",\n                                        variant: \"outlined\",\n                                        value: oldPassword,\n                                        error: oldPassword === \"\" ? true : false,\n                                        onChange: (e)=>setoldPassword(e.target.value),\n                                        fullWidth: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Source Codes\\\\DoctorsHUb\\\\pharmacyadmin\\\\app\\\\Settings\\\\SettingsApp.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Source Codes\\\\DoctorsHUb\\\\pharmacyadmin\\\\app\\\\Settings\\\\SettingsApp.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    xs: 12,\n                                    sm: 6,\n                                    md: 3,\n                                    lg: 3,\n                                    xl: 3,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        id: \"standard-basic\",\n                                        label: \"New Password\",\n                                        variant: \"outlined\",\n                                        value: newPassword,\n                                        error: newPassword === \"\" ? true : false,\n                                        onChange: (e)=>setnewPassword(e.target.value),\n                                        fullWidth: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Source Codes\\\\DoctorsHUb\\\\pharmacyadmin\\\\app\\\\Settings\\\\SettingsApp.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Source Codes\\\\DoctorsHUb\\\\pharmacyadmin\\\\app\\\\Settings\\\\SettingsApp.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    xs: 12,\n                                    sm: 6,\n                                    md: 3,\n                                    lg: 3,\n                                    xl: 3,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        id: \"standard-basic\",\n                                        label: \"Repeat Password\",\n                                        variant: \"outlined\",\n                                        value: RepeatPassword,\n                                        error: RepeatPassword === \"\" ? true : false,\n                                        onChange: (e)=>setRepeatPassword(e.target.value),\n                                        fullWidth: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Source Codes\\\\DoctorsHUb\\\\pharmacyadmin\\\\app\\\\Settings\\\\SettingsApp.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Source Codes\\\\DoctorsHUb\\\\pharmacyadmin\\\\app\\\\Settings\\\\SettingsApp.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    xs: 12,\n                                    sm: 6,\n                                    md: 3,\n                                    lg: 3,\n                                    xl: 3,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                        variant: \"contained\",\n                                        size: \"large\",\n                                        fullWidth: true,\n                                        onClick: ChangePasswordHandler,\n                                        children: \"Change Password\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Source Codes\\\\DoctorsHUb\\\\pharmacyadmin\\\\app\\\\Settings\\\\SettingsApp.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Source Codes\\\\DoctorsHUb\\\\pharmacyadmin\\\\app\\\\Settings\\\\SettingsApp.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Source Codes\\\\DoctorsHUb\\\\pharmacyadmin\\\\app\\\\Settings\\\\SettingsApp.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Source Codes\\\\DoctorsHUb\\\\pharmacyadmin\\\\app\\\\Settings\\\\SettingsApp.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Source Codes\\\\DoctorsHUb\\\\pharmacyadmin\\\\app\\\\Settings\\\\SettingsApp.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Source Codes\\\\DoctorsHUb\\\\pharmacyadmin\\\\app\\\\Settings\\\\SettingsApp.tsx\",\n            lineNumber: 52,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Source Codes\\\\DoctorsHUb\\\\pharmacyadmin\\\\app\\\\Settings\\\\SettingsApp.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SettingsApp, \"LA70UPxOTxuKNU8Kob/i3rY+ZQI=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = SettingsApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SettingsApp);\nvar _c;\n$RefreshReg$(_c, \"SettingsApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9TZXR0aW5ncy9TZXR0aW5nc0FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUM7QUFDRDtBQUNjO0FBQ1Y7QUFDUTtBQUNGO0FBQ29CO0FBQUE7QUFDM0I7QUFDSTtBQUNpQjtBQUU5RCxNQUFNWSxjQUFjO1FBS0RDLHFCQUFBQTs7SUFKZixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2QsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDZSxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNpQixnQkFBZ0JDLGtCQUFrQixHQUFHbEIsK0NBQVFBLENBQUM7SUFDckQsTUFBTVksVUFBZ0JILDJEQUFVQTtJQUNoQyxNQUFNVSxVQUFTUCxnQkFBQUEsUUFBUVEsSUFBSSxjQUFaUixxQ0FBQUEsc0JBQUFBLGNBQWNTLElBQUksQ0FBQyxFQUFFLGNBQXJCVCwwQ0FBQUEsb0JBQXVCTyxNQUFNO0lBRTVDLE1BQU1HLFVBQVUsQ0FBQ0MsT0FBYUM7UUFFMUIsSUFBSUQsTUFBTUUsSUFBSSxPQUFPLElBQUk7WUFDckJqQixzREFBT0EsQ0FBQyxnQkFBMEIsT0FBVmdCO1lBQ3hCLE9BQU87UUFDWDtRQUNBLE9BQU87SUFDWDtJQUNBLE1BQU1FLHdCQUF3QjtRQUMxQixJQUFJSixRQUFRVCxhQUFhLG1CQUFtQlMsUUFBUVAsYUFBYSxtQkFBbUJPLFFBQVFMLGdCQUFnQixvQkFBb0I7WUFDNUg7UUFDSjtRQUVBLElBQUlGLGdCQUFnQkUsZ0JBQWdCO1lBQ2hDVCxzREFBT0EsQ0FBQztZQUNSO1FBQ0o7UUFDSSxJQUFJbUIsb0JBQW9CO1lBQ3BCUixRQUFPQTtZQUNQUyxhQUFhZjtZQUNiZ0IsYUFBYWQ7UUFDakI7UUFDRCxNQUFNZSxNQUFNLE1BQU1wQiwyRUFBY0EsQ0FBQ2lCO1FBQ2pDLElBQUcsQ0FBQ0csSUFBSUMsTUFBTSxFQUFDO1lBQ2R2QixzREFBT0EsQ0FBQztRQUNULE9BQUs7WUFDREEsc0RBQU9BLENBQUNzQixJQUFJVixJQUFJLENBQUNZLE9BQU87UUFDNUI7SUFDUDtJQUVGLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNmLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNYLDRFQUFDakMsMERBQUlBOzBCQUNMLDRFQUFDQyxpRUFBV0E7O3NDQUNSLDhEQUFDRSxnRUFBVUE7NEJBQUMrQixTQUFRO3NDQUFLOzs7Ozs7c0NBQ3pCLDhEQUFDN0IsMkRBQUdBOzs4Q0FDSiw4REFBQ0MsMkRBQUdBO29DQUFFNkIsSUFBSztvQ0FBSUMsSUFBSztvQ0FBR0MsSUFBSztvQ0FBR0MsSUFBSztvQ0FBR0MsSUFBSzs4Q0FDNUMsNEVBQUNuQyxnRUFBU0E7d0NBQ05vQyxJQUFHO3dDQUNIQyxPQUFNO3dDQUNOUCxTQUFRO3dDQUNSWixPQUFPVjt3Q0FDUDhCLE9BQU85QixnQkFBZ0IsS0FBSyxPQUFPO3dDQUNuQytCLFVBQVVDLENBQUFBLElBQUkvQixlQUFlK0IsRUFBRUMsTUFBTSxDQUFDdkIsS0FBSzt3Q0FDM0N3QixTQUFTOzs7Ozs7Ozs7Ozs4Q0FHYiw4REFBQ3hDLDJEQUFHQTtvQ0FBRTZCLElBQUs7b0NBQUlDLElBQUs7b0NBQUdDLElBQUs7b0NBQUdDLElBQUs7b0NBQUdDLElBQUs7OENBQzVDLDRFQUFDbkMsZ0VBQVNBO3dDQUNOb0MsSUFBRzt3Q0FDSEMsT0FBTTt3Q0FDTlAsU0FBUTt3Q0FDUlosT0FBT1I7d0NBQ1A0QixPQUFPNUIsZ0JBQWdCLEtBQUssT0FBTzt3Q0FDbkM2QixVQUFVQyxDQUFBQSxJQUFJN0IsZUFBZTZCLEVBQUVDLE1BQU0sQ0FBQ3ZCLEtBQUs7d0NBQzNDd0IsU0FBUzs7Ozs7Ozs7Ozs7OENBR2IsOERBQUN4QywyREFBR0E7b0NBQUU2QixJQUFLO29DQUFJQyxJQUFLO29DQUFHQyxJQUFLO29DQUFHQyxJQUFLO29DQUFHQyxJQUFLOzhDQUM1Qyw0RUFBQ25DLGdFQUFTQTt3Q0FDTm9DLElBQUc7d0NBQ0hDLE9BQU07d0NBQ05QLFNBQVE7d0NBQ1JaLE9BQU9OO3dDQUNQMEIsT0FBTzFCLG1CQUFtQixLQUFLLE9BQU87d0NBQ3RDMkIsVUFBVUMsQ0FBQUEsSUFBSTNCLGtCQUFtQjJCLEVBQUVDLE1BQU0sQ0FBQ3ZCLEtBQUs7d0NBQy9Dd0IsU0FBUzs7Ozs7Ozs7Ozs7OENBR2IsOERBQUN4QywyREFBR0E7b0NBQUU2QixJQUFLO29DQUFJQyxJQUFLO29DQUFHQyxJQUFLO29DQUFHQyxJQUFLO29DQUFHQyxJQUFLOzhDQUN4Qyw0RUFBQ3JDLDZEQUFNQTt3Q0FBQ2dDLFNBQVE7d0NBQVlhLE1BQUs7d0NBQVFELFNBQVM7d0NBQUNFLFNBQVN2QjtrREFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU25HO0dBdkZNZjs7UUFJb0JGLHVEQUFVQTs7O0tBSjlCRTtBQXlGTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvU2V0dGluZ3MvU2V0dGluZ3NBcHAudHN4PzExZjkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcclxuaW1wb3J0IHsgUm93LCBDb2wsIE92ZXJsYXlUcmlnZ2VyLCBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgU2hvd21zZyB9IGZyb20gJ0AvdXRpbHMvY29tbW9uJztcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkIH0gZnJvbSAnQC91dGlscy9TZXR0aW5ncy9TZXR0aW5nc0FQSSc7XHJcblxyXG5jb25zdCBTZXR0aW5nc0FwcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtvbGRQYXNzd29yZCwgc2V0b2xkUGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbbmV3UGFzc3dvcmQsIHNldG5ld1Bhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW1JlcGVhdFBhc3N3b3JkLCBzZXRSZXBlYXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IHNlc3Npb24gOiBhbnkgPSB1c2VTZXNzaW9uKClcclxuICAgIGNvbnN0IFVzZXJJRCA9IHNlc3Npb24uZGF0YT8udXNlclswXT8uVXNlcklEXHJcblxyXG4gICAgY29uc3QgaXNFbXB0eSA9ICh2YWx1ZSA6IGFueSwgZmllbGROYW1lIDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmICh2YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIFNob3dtc2coYFBsZWFzZSBFbnRlciAke2ZpZWxkTmFtZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBjb25zdCBDaGFuZ2VQYXNzd29yZEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzRW1wdHkob2xkUGFzc3dvcmQsICdPbGQgUGFzc3dvcmQnKSB8fCBpc0VtcHR5KG5ld1Bhc3N3b3JkLCAnTmV3IFBhc3N3b3JkJykgfHwgaXNFbXB0eShSZXBlYXRQYXNzd29yZCwgJ1JlcGVhdCBQYXNzd29yZCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpZiAobmV3UGFzc3dvcmQgIT09IFJlcGVhdFBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIFNob3dtc2coJ05ldyBhbmQgUmVwZWF0IFBhc3N3b3JkIHNob3VsZCBNYXRjaCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgQ2hhbmdlUGFzc3dvcmRPYmogPSB7XHJcbiAgICAgICAgICAgICAgICBVc2VySUQ6VXNlcklELFxyXG4gICAgICAgICAgICAgICAgT2xkUGFzc3dvcmQ6IG9sZFBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgTmV3UGFzc3dvcmQ6IG5ld1Bhc3N3b3JkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBDaGFuZ2VQYXNzd29yZChDaGFuZ2VQYXNzd29yZE9iailcclxuICAgICAgICAgICBpZighcmVzLnN0YXR1cyl7XHJcbiAgICAgICAgICAgIFNob3dtc2coJ1NvbWV0aGluZyB3ZW50IHdyb25nIEFQSSBFcnJvcicpXHJcbiAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgIFNob3dtc2cocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+Q2hhbmdlIFBhc3N3b3JkPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sICB4cz0gezEyfSBzbT0gezZ9IG1kPSB7M30gbGc9IHszfSB4bD0gezN9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiIFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJPbGQgUGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e29sZFBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e29sZFBhc3N3b3JkID09PSAnJyA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlPT4gc2V0b2xkUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCAgeHM9IHsxMn0gc209IHs2fSBtZD0gezN9IGxnPSB7M30geGw9IHszfT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIiBcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTmV3IFBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIGVycm9yPXtuZXdQYXNzd29yZCA9PT0gJycgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZT0+IHNldG5ld1Bhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgIHhzPSB7MTJ9IHNtPSB7Nn0gbWQ9IHszfSBsZz0gezN9IHhsPSB7M30+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCIgXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlJlcGVhdCBQYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17UmVwZWF0UGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICBlcnJvcj17UmVwZWF0UGFzc3dvcmQgPT09ICcnID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2U9PiBzZXRSZXBlYXRQYXNzd29yZCggZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCAgeHM9IHsxMn0gc209IHs2fSBtZD0gezN9IGxnPSB7M30geGw9IHszfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBzaXplPSdsYXJnZScgZnVsbFdpZHRoIG9uQ2xpY2s9e0NoYW5nZVBhc3N3b3JkSGFuZGxlcn0+Q2hhbmdlIFBhc3N3b3JkPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NBcHAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJUZXh0RmllbGQiLCJSb3ciLCJDb2wiLCJTaG93bXNnIiwidXNlU2Vzc2lvbiIsIkNoYW5nZVBhc3N3b3JkIiwiU2V0dGluZ3NBcHAiLCJzZXNzaW9uIiwib2xkUGFzc3dvcmQiLCJzZXRvbGRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwic2V0bmV3UGFzc3dvcmQiLCJSZXBlYXRQYXNzd29yZCIsInNldFJlcGVhdFBhc3N3b3JkIiwiVXNlcklEIiwiZGF0YSIsInVzZXIiLCJpc0VtcHR5IiwidmFsdWUiLCJmaWVsZE5hbWUiLCJ0cmltIiwiQ2hhbmdlUGFzc3dvcmRIYW5kbGVyIiwiQ2hhbmdlUGFzc3dvcmRPYmoiLCJPbGRQYXNzd29yZCIsIk5ld1Bhc3N3b3JkIiwicmVzIiwic3RhdHVzIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsInZhcmlhbnQiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwiaWQiLCJsYWJlbCIsImVycm9yIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZnVsbFdpZHRoIiwic2l6ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Settings/SettingsApp.tsx\n"));

/***/ })

});