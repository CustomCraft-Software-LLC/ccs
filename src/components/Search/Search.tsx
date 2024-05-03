import React, { useEffect } from 'react';
import './Search.css';

interface SearchProps { 
    data?: string;
}

const Search: React.FC<SearchProps> = ({ data = '', ...props }) => { 
    return ( 
        <input type="text" placeholder="Search" {...props}/>
    );
}

export default Search;