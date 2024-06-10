import * as React from 'react';
import './Listbox.css';
import Box from '../Box/Box';

interface ListboxProps { 
  children?: React.ReactNode;
}

const Listbox: React.FC<ListboxProps> = ({children}) => {
  return (
    <Box bRad="50px">
      <select className="listBox">{children}</select>
    </Box>
  );
};

export default Listbox;