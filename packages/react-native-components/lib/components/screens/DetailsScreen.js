var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _jsxRuntime=require("react/jsx-runtime");var _this=this,_jsxFileName="C:\\Users\\chara\\Desktop\\CustomCraft Software LLC\\Software\\ccs\\packages\\react-native-components\\src\\components\\Screens\\DetailsScreen.tsx";var DetailsScreen=function DetailsScreen(_ref){var params=_ref.params,onBack=_ref.onBack;var _ref2=params||{},itemId=_ref2.itemId;return(0,_jsxRuntime.jsxs)(_reactNative.View,{style:styles.container,children:[(0,_jsxRuntime.jsx)(_reactNative.Text,{style:styles.title,children:"Details Screen"}),(0,_jsxRuntime.jsxs)(_reactNative.Text,{style:styles.itemIdText,children:["Item ID: ",itemId]}),(0,_jsxRuntime.jsx)(_reactNative.Button,{title:"Go Back",onPress:onBack})]});};var styles=_reactNative.StyleSheet.create({container:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#e9ecef'},title:{fontSize:24,fontWeight:'bold',marginBottom:20,color:'#495057'},itemIdText:{fontSize:18,marginBottom:20,color:'#6c757d'}});var _default=exports.default=DetailsScreen;