var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _jsxRuntime=require("react/jsx-runtime");var _excluded=["label","style"];var _this=this,_jsxFileName="C:\\Users\\chara\\Desktop\\CustomCraft Software LLC\\Software\\ccs\\packages\\react-native-components\\src\\components\\UI\\TextInput.tsx";var TextInput=function TextInput(_ref){var label=_ref.label,style=_ref.style,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);return(0,_jsxRuntime.jsxs)(_reactNative.View,{style:styles.container,children:[label&&(0,_jsxRuntime.jsx)(_reactNative.Text,{style:styles.label,children:label}),(0,_jsxRuntime.jsx)(_reactNative.TextInput,Object.assign({style:[styles.input,style]},props))]});};var styles=_reactNative.StyleSheet.create({container:{marginVertical:10},label:{marginBottom:5,fontSize:16},input:{height:40,borderColor:'#ccc',borderWidth:1,borderRadius:5,paddingHorizontal:10}});var _default=exports.default=TextInput;