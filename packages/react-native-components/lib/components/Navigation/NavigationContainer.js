"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var NavigationContext = (0, react_1.createContext)(undefined);
var NavigationContainer = function () {
    var _a = (0, react_1.useContext)(NavigationContext), currentRoute = _a.currentRoute, navigate = _a.navigate;
    var renderScreen = function () {
        switch (currentRoute) {
            case 'Home':
                return (react_1.default.createElement(react_native_1.View, { style: styles.screen },
                    react_1.default.createElement(react_native_1.Text, { style: styles.text }, "Home Screen"),
                    react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigate('Details'); }, style: styles.button },
                        react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Go to Details"))));
            case 'Details':
                return (react_1.default.createElement(react_native_1.View, { style: styles.screen },
                    react_1.default.createElement(react_native_1.Text, { style: styles.text }, "Details Screen"),
                    react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigate('Home'); }, style: styles.button },
                        react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Go to Home"))));
            default:
                return react_1.default.createElement(react_native_1.View, { style: styles.screen },
                    react_1.default.createElement(react_native_1.Text, { style: styles.text }, "Not Found"));
        }
    };
    return renderScreen();
};
var styles = {
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
};
exports.default = NavigationContainer;
