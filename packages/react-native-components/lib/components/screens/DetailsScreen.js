"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var DetailsScreen = function (_a) {
    var params = _a.params, onBack = _a.onBack;
    var itemId = (params || {}).itemId;
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.title }, "Details Screen"),
        react_1.default.createElement(react_native_1.Text, { style: styles.itemIdText },
            "Item ID: ",
            itemId),
        react_1.default.createElement(react_native_1.Button, { title: "Go Back", onPress: onBack })));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e9ecef',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#495057',
    },
    itemIdText: {
        fontSize: 18,
        marginBottom: 20,
        color: '#6c757d',
    },
});
exports.default = DetailsScreen;
