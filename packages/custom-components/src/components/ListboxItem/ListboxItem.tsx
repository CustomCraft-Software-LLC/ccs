import * as React from 'react';
import './ListboxItem.css';

interface ListboxItemProps { 
  value: string;
  label: string;
}

const ListboxItem: React.FC<ListboxItemProps> = ({ value = '', label = '', ...props}) => {
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

export default ListboxItem;