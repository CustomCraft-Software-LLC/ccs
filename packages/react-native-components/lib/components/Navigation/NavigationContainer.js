Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _jsxRuntime=require("react/jsx-runtime");var _this=this,_jsxFileName="C:\\Users\\chara\\Desktop\\CustomCraft Software LLC\\Software\\ccs\\packages\\react-native-components\\src\\components\\Navigation\\NavigationContainer.tsx";function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap(),t=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r;})(e);}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u];}return n.default=e,t&&t.set(e,n),n;}var NavigationContext=(0,_react.createContext)(undefined);var NavigationContainer=function NavigationContainer(){var _ref=(0,_react.useContext)(NavigationContext),currentRoute=_ref.currentRoute,navigate=_ref.navigate;var renderScreen=function renderScreen(){switch(currentRoute){case'Home':return(0,_jsxRuntime.jsxs)(_reactNative.View,{style:styles.screen,children:[(0,_jsxRuntime.jsx)(_reactNative.Text,{style:styles.text,children:"Home Screen"}),(0,_jsxRuntime.jsx)(_reactNative.TouchableOpacity,{onPress:function onPress(){return navigate('Details');},style:styles.button,children:(0,_jsxRuntime.jsx)(_reactNative.Text,{style:styles.buttonText,children:"Go to Details"})})]});case'Details':return(0,_jsxRuntime.jsxs)(_reactNative.View,{style:styles.screen,children:[(0,_jsxRuntime.jsx)(_reactNative.Text,{style:styles.text,children:"Details Screen"}),(0,_jsxRuntime.jsx)(_reactNative.TouchableOpacity,{onPress:function onPress(){return navigate('Home');},style:styles.button,children:(0,_jsxRuntime.jsx)(_reactNative.Text,{style:styles.buttonText,children:"Go to Home"})})]});default:return(0,_jsxRuntime.jsx)(_reactNative.View,{style:styles.screen,children:(0,_jsxRuntime.jsx)(_reactNative.Text,{style:styles.text,children:"Not Found"})});}};return renderScreen();};var styles={screen:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'},text:{fontSize:24,marginBottom:20},button:{padding:10,backgroundColor:'#007BFF',borderRadius:5},buttonText:{color:'#fff',fontSize:16}};var _default=exports.default=NavigationContainer;