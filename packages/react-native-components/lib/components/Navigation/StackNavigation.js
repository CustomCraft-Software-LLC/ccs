var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _HomeScreen=_interopRequireDefault(require("../Screens/HomeScreen"));var _DetailsScreen=_interopRequireDefault(require("../Screens/DetailsScreen"));var _jsxRuntime=require("react/jsx-runtime");var _this=this,_jsxFileName="C:\\Users\\chara\\Desktop\\CustomCraft Software LLC\\Software\\ccs\\packages\\react-native-components\\src\\components\\Navigation\\StackNavigation.tsx";function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap(),t=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r;})(e);}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u];}return n.default=e,t&&t.set(e,n),n;}var StackNavigation=function StackNavigation(){var _useState=(0,_react.useState)('Home'),_useState2=(0,_slicedToArray2.default)(_useState,2),currentScreen=_useState2[0],setCurrentScreen=_useState2[1];var _useState3=(0,_react.useState)(undefined),_useState4=(0,_slicedToArray2.default)(_useState3,2),params=_useState4[0],setParams=_useState4[1];var navigate=function navigate(screen,params){setCurrentScreen(screen);setParams(params);};var goBack=function goBack(){if(currentScreen!=='Home'){setCurrentScreen('Home');setParams(undefined);}};return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[currentScreen==='Home'&&(0,_jsxRuntime.jsx)(_HomeScreen.default,{onNavigate:navigate}),currentScreen==='Details'&&(0,_jsxRuntime.jsx)(_DetailsScreen.default,{params:params,onBack:goBack})]});};var _default=exports.default=StackNavigation;