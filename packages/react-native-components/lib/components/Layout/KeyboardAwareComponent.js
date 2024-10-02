"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var KeyboardAwareComponent = function (_a) {
    var children = _a.children, style = _a.style, _b = _a.behavior, behavior = _b === void 0 ? 'padding' : _b, _c = _a.keyboardVerticalOffset, keyboardVerticalOffset = _c === void 0 ? react_native_1.Platform.OS === 'ios' ? 60 : 0 : _c;
    return (react_1.default.createElement(react_native_1.KeyboardAvoidingView, { style: [styles.container, style], behavior: behavior, keyboardVerticalOffset: keyboardVerticalOffset }, children));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
});
exports.default = KeyboardAwareComponent;
