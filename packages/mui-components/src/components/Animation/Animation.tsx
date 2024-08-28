import React from "react";
import { keyframes, styled } from '@mui/material';

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-40px);
    }
    60% {
        transform: translateY(-20px);
    }
`;

const rotateAroundY = keyframes`
    0%, 100% {
        transform: rotateY(0deg); 
    }
    25% { 
        transform: rotateY(90deg);
    }
    50% { 
        transform: rotateY(180deg);
    }
    75% { 
        transform: rotateY(270deg);
    }
`;

const rotateAroundX = keyframes`
    0%, 100% {
        transform: rotateX(0deg); 
    }
    25% { 
        transform: rotateX(90deg);
    }
    50% { 
        transform: rotateX(180deg);
    }
    75% { 
        transform: rotateX(270deg);
    }
`;

const bounceIn = keyframes`
    0% { 
        transform: scale(0.1);
    }
    50% {
        transform: scale(1.2);
    }
    100% { 
        transform: scale(1.0);
    }
`;

const blur = keyframes`
    0% { 
        filter: blur(2rem);
    }
    50% {
        filter: blur(5px);
    }
    100% { 
        filter: blur(0);
    }
`;

const brightness = keyframes`
    0% { 
        filter: brightness(0);
    }
    25% {
        filter: brightness(0.5);
    }
    75% { 
        filter: brightness(1);
    }
    100% {
        filter: brightness(1.5);
    }
`;

const bounceOut = keyframes`
    0% { 
        opacity: 1.0;
    }
    50% {
        opacity: 1.2;  
    }
    100% { 
        opacity: 0.1;
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const slideIn = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`;

const slideOut = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(100%);
    }
`;

const zoomIn = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

const zoomOut = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
`;

// AnimationCSS now includes the duration, iteration, and delay props for customization
const AnimationCSS = styled('div')<{
    animation: string;
    duration: string;
    iteration: string;
    delay: string;
}>(({ animation, duration, iteration, delay }) => ({
    animation: `${animation} ${duration} ${iteration} ${delay}`,
}));

export interface AnimationProps { 
    name: string;
    duration?: string;
    iteration?: string;
    delay?: string;
    children?: React.ReactNode;
}

const Animation: React.FC<AnimationProps> = ({
    name,
    duration = '2s',
    iteration = 'infinite',
    delay = '0s',
    children
}) => { 
    const animations = {
        rotateAroundY,
        rotateAroundX,
        bounce,
        bounceIn,
        bounceOut,
        blur,
        brightness,
        fadeIn,
        fadeOut,
        slideIn,
        slideOut,
        zoomIn,
        zoomOut,
    };

    const animation = animations[name as keyof typeof animations];

    if (!animation) {
        console.warn(`Animation "${name}" not found. Rendering children without animation.`);
        return <>{children}</>;
    }

    return (
        <AnimationCSS animation={animation} duration={duration} iteration={iteration} delay={delay}>
            {children}
        </AnimationCSS>
    );
};

export default Animation;