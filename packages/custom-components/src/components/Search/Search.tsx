import React, { useEffect } from 'react';
import './Search.css';
import Box from '../Box/Box.tsx';
import { AiOutlineSearch } from 'react-icons/ai'; // Importing search icon from react-icons

interface SearchProps { 
    data?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ data = '', onChange, ...props }) => { 
    const SearchText = (
        <span>
            <AiOutlineSearch /> Search
        </span>
    );

    return ( 
        <Box bRad='50px' padding='10px'>
            {SearchText}
            <input 
                className="search" 
                type="text" 
                value={data}
                placeholder={SearchText} 
                onChange={onChange}
                {...props} />
        </Box>
    );
}

export default Search;