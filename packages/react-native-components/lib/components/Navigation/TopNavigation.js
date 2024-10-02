"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var TopNavigation = function (_a) {
    var title = _a.title, onBackPress = _a.onBackPress, onMenuPress = _a.onMenuPress;
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        onBackPress && (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onBackPress, style: styles.button },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Back"))),
        react_1.default.createElement(react_native_1.Text, { style: styles.title }, title),
        onMenuPress && (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onMenuPress, style: styles.button },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Menu")))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#007bff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    button: {
        padding: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
    },
});
exports.default = TopNavigation;
