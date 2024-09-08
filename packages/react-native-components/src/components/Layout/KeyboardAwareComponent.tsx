import React, { ReactNode } from 'react';
import { ViewStyle, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

interface KeyboardAwareComponentProps {
    children: ReactNode;
    style?: ViewStyle;
    behavior?: 'height' | 'position' | 'padding'; // Explicitly type behavior
    keyboardVerticalOffset?: number;
}

const KeyboardAwareComponent: React.FC<KeyboardAwareComponentProps> = ({
    children,
    style,
    behavior = 'padding',
    keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0, // Default offset
}) => {
    return (
        <KeyboardAvoidingView
            style={[styles.container, style]}
            behavior={behavior}
            keyboardVerticalOffset={keyboardVerticalOffset}
        >
            {children}
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default KeyboardAwareComponent;