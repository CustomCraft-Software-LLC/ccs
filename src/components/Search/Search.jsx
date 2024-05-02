import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ({ data, ...props }) => { 
    return ( 
        <input type="text" placeholder="Search" {...props}/>
    );
}