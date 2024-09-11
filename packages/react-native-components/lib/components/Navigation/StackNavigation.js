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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var HomeScreen_1 = __importDefault(require("../screens/HomeScreen"));
var DetailsScreen_1 = __importDefault(require("../screens/DetailsScreen"));
var StackNavigation = function () {
    var _a = (0, react_1.useState)('Home'), currentScreen = _a[0], setCurrentScreen = _a[1];
    var _b = (0, react_1.useState)(null), params = _b[0], setParams = _b[1];
    var navigate = function (screen, params) {
        setCurrentScreen(screen);
        setParams(params);
    };
    var goBack = function () {
        // Simple back navigation: go back to Home screen
        if (currentScreen !== 'Home') {
            setCurrentScreen('Home');
            setParams(null);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        currentScreen === 'Home' && react_1.default.createElement(HomeScreen_1.default, { onNavigate: navigate }),
        currentScreen === 'Details' && react_1.default.createElement(DetailsScreen_1.default, { params: params, onBack: goBack })));
};
exports.default = StackNavigation;
