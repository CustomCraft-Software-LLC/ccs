import React, { useEffect } from 'react';
import './Search.css';
import Box from '../Box/Box.tsx';

interface SearchProps { 
    data?: string;
}

const Search: React.FC<SearchProps> = ({ data = '', ...props }) => { 
    return ( 
        <Box bRad='50px' padding='10px'>
            <input className="search" type="text" placeholder="Search" {...props}/>
        </Box>
    );
}

export default Search;