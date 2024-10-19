import React from 'react';

type InlineCodeProps = {
  children: React.ReactNode;
  isDarkMode?: boolean;
};

const InlineCode: React.FC<InlineCodeProps> = ({ children, isDarkMode = false }) => (
  <code
    style={{
      backgroundColor: isDarkMode ? '#eeeeee' : '#111111',
      padding: '2px 4px',
      fontFamily: 'monospace',
      boxShadow: isDarkMode ? '2px #000000 solid' : '2px #ffffff solid',
      color: isDarkMode ? '#000000' : '#ffffff',
      display: 'inline-block',
    }}
  >
    {children}
  </code>
);

export default InlineCode;