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
var AnimatedView = function (_a) {
    var animationType = _a.animationType, _b = _a.duration, duration = _b === void 0 ? 500 : _b, style = _a.style, children = _a.children;
    var animatedValue = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    (0, react_1.useEffect)(function () {
        var animation;
        switch (animationType) {
            case 'fade':
                animation = react_native_1.Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: duration,
                    useNativeDriver: true,
                });
                break;
            case 'slide':
                animation = react_native_1.Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: duration,
                    useNativeDriver: true,
                });
                break;
            case 'scale':
                animation = react_native_1.Animated.spring(animatedValue, {
                    toValue: 1,
                    friction: 7,
                    tension: 40,
                    useNativeDriver: true,
                });
                break;
            default:
                animation = react_native_1.Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: duration,
                    useNativeDriver: true,
                });
        }
        animation.start();
    }, [animatedValue, animationType, duration]);
    var getTransformStyle = function () {
        switch (animationType) {
            case 'slide':
                return {
                    transform: [
                        {
                            translateY: animatedValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [50, 0],
                            }),
                        },
                    ],
                };
            case 'scale':
                return {
                    transform: [
                        {
                            scale: animatedValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.8, 1],
                            }),
                        },
                    ],
                };
            case 'fade':
            default:
                return {
                    opacity: animatedValue,
                };
        }
    };
    return (react_1.default.createElement(react_native_1.Animated.View, { style: [style, getTransformStyle()] }, children));
};
exports.default = AnimatedView;
