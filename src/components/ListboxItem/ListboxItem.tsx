import * as React from 'react';
import './ListboxItem.css';
import PropTypes from 'prop-types';

const ListboxItem = ({ value, label, ...props}) => {
  return (
    <option
    value={value}
    className="listBoxItem"
    {...props}
    >
    {label}
    </option> 
  );
};

ListboxItem.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

ListboxItem.defaultProps = {
    value: '',
    label: '',
}

export default ListboxItem;