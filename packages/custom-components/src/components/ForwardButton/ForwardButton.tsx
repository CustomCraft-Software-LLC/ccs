import React from 'react';

interface ForwardButtonProps { 
    nextLink?: string;
}

const ForwardButton : React.FC<ForwardButtonProps> = ({nextLink = '/'}) => { 
    return ( 
        <button></button>
    );
}