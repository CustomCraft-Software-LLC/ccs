import React from "react";
export interface AnimationProps {
    name: string;
    duration?: string;
    iteration?: string;
    delay?: string;
    children?: React.ReactNode;
}
declare const Animation: React.FC<AnimationProps>;
export default Animation;
