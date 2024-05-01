import * as React from 'react';
import './Bar.css';
import PropTypes from 'prop-types';

const Bar = ({ bgColor, animation, percent, sColor }) => {
    const bg_style = {
        backgroundColor: bgColor,
        opacity: 1.0,
    }

    const progress_style = {
        backgroundColor: sColor,
        width: '50%',
        opacity: 1.0,
    }

    return (
        <div className="bar" style={bg_style}>
            <div className="progress" style={progress_style}></div>
        </div>
    );
};

Bar.propTypes = {
    bgColor: PropTypes.string,
    animation: PropTypes.bool,
    percent: PropTypes.number,
    sColor: PropTypes.string,
}

Bar.defaultProps = {
    bgColor: '#cccccc',
    animation: false,
    percent: 0,
    sColor: '#55bd98',
}

export default Bar;