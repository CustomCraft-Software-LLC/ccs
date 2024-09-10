import React, { useEffect, useRef } from 'react';
import { Animated, ViewStyle, StyleProp } from 'react-native';

type AnimationType = 'fade' | 'slide' | 'scale';

interface AnimatedViewProps {
  animationType: AnimationType;
  duration?: number;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

const AnimatedView: React.FC<AnimatedViewProps> = ({
  animationType,
  duration = 500,
  style,
  children,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let animation;

    switch (animationType) {
      case 'fade':
        animation = Animated.timing(animatedValue, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        });
        break;
      case 'slide':
        animation = Animated.timing(animatedValue, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        });
        break;
      case 'scale':
        animation = Animated.spring(animatedValue, {
          toValue: 1,
          friction: 7,
          tension: 40,
          useNativeDriver: true,
        });
        break;
      default:
        animation = Animated.timing(animatedValue, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        });
    }

    animation.start();
  }, [animatedValue, animationType, duration]);

  const getTransformStyle = () => {
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

  return (
    <Animated.View style={[style, getTransformStyle()]}>
      {children}
    </Animated.View>
  );
};

export default AnimatedView;