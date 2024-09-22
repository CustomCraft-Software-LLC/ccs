import React, { ReactNode } from 'react';
interface AppContextProps {
    state: string;
    setState: (value: string) => void;
}
export declare const AppProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useAppContext: () => AppContextProps;
export {};
