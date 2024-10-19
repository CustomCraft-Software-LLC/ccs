import React from 'react';

type InlineCodeProps = {
  children: React.ReactNode;
};

const InlineCode: React.FC<InlineCodeProps> = ({ children }) => (
  <code className="inline-code" style={{ backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '3px', fontFamily: 'monospace' }}>
    {children}
  </code>
);

export default InlineCode;