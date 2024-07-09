import React from 'react';

interface BackwardButtonProps { 
    nextLink?: string;
}

const BackwardButton : React.FC<BackwardButtonProps> = ({nextLink = '/'}) => { 
    return ( 
        <button></button>
    );
}