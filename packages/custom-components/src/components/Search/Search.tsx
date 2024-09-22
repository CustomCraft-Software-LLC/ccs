import React, { useState } from 'react';
import './Search.css';
import { AiOutlineSearch } from 'react-icons/ai'; 

interface SearchProps { 
    data?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ data = '', onChange, ...props }) => { 
    const [isExpanded, setIsExpanded] = useState(false);

    const handleFocus = () => {
        setIsExpanded(true);
    };

    const handleBlur = () => {
        if (data === '') {
            setIsExpanded(false);
        }
    };

    return ( 
        <div 
            className={`search-container ${isExpanded ? 'expanded' : ''}`} 
            onMouseEnter={() => setIsExpanded(true)} 
            onMouseLeave={() => handleBlur()}
        >
            <AiOutlineSearch className="search-icon" />
            <input 
                className="search" 
                type="text" 
                value={data}
                placeholder="Search..."
                onChange={onChange}
                onFocus={handleFocus}
                {...props} 
            />
        </div>
    );
}

export default Search;