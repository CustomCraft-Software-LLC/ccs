import * as React from 'react';
import './Bar.css';
import PropTypes from 'prop-types';

export default function Bar({ bgColor, percent }) {
    const bg_style = {
        backgroundColor: bgColor,
    }

    const progress_style = {
        backgroundColor: bgColor,
        width: `${percent}%`,
    }

    return (
        <div className="bar" style={bg_style}>
            <div className="progress" style={progress_style}></div>
        </div>
    );
};

Bar.propTypes = {
    bgColor: PropTypes.string,
    percent: PropTypes.number,
}

Bar.defaultProps = {
    bgColor: '#000000',
    percent: 0,
}