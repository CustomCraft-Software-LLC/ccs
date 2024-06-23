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

const AnimationCSS = styled('div')<{ animation: string }>(({animation}) => ({
    animation: `${animation} 2s infinite`,
}));

interface AnimationProps { 
    name: string;
    children?: React.ReactNode;
}

const Animation: React.FC<AnimationProps> = ({name, children}) => { 
    switch(name) {
        case 'rotateAroundY':
            return <AnimationCSS animation={rotateAroundY}>{children}</AnimationCSS>;
        case 'rotateAroundX':
            return <AnimationCSS animation={rotateAroundX}>{children}</AnimationCSS>;
        case 'bounce':
            return <AnimationCSS animation={bounce}>{children}</AnimationCSS>;
        case 'bounceIn':
            return <AnimationCSS animation={bounceIn}>{children}</AnimationCSS>;
        case 'blur':
            return <AnimationCSS animation={blur}>{children}</AnimationCSS>;
        case 'brightness':
            return <AnimationCSS animation={brightness}>{children}</AnimationCSS>;
        default: 
            return null;
    }
}

export default Animation;