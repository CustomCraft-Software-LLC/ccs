"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var HomeScreen = function (_a) {
    var title = _a.title, onPressButton = _a.onPressButton;
    return (react_1.default.createElement(react_native_1.SafeAreaView, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.header },
            react_1.default.createElement(react_native_1.Text, { style: styles.title }, title)),
        react_1.default.createElement(react_native_1.View, { style: styles.content },
            react_1.default.createElement(react_native_1.Button, { title: "Press me", onPress: onPressButton }))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        padding: 20,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
exports.default = HomeScreen;
