"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var BottomNavigation = function (_a) {
    var activeTab = _a.activeTab, onTabPress = _a.onTabPress;
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: [styles.tab, activeTab === 'Home' && styles.activeTab], onPress: function () { return onTabPress('Home'); } },
            react_1.default.createElement(react_native_1.Text, { style: styles.tabText }, "Home")),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: [styles.tab, activeTab === 'Search' && styles.activeTab], onPress: function () { return onTabPress('Search'); } },
            react_1.default.createElement(react_native_1.Text, { style: styles.tabText }, "Search")),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: [styles.tab, activeTab === 'Profile' && styles.activeTab], onPress: function () { return onTabPress('Profile'); } },
            react_1.default.createElement(react_native_1.Text, { style: styles.tabText }, "Profile"))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#007bff',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    tabText: {
        color: '#ffffff',
        fontSize: 16,
    },
    activeTab: {
        backgroundColor: '#0056b3',
    },
});
exports.default = BottomNavigation;
