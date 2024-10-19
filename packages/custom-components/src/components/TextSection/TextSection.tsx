import React from 'react';

type TextSectionProps = {
  children: React.ReactNode;
};

const TextSection: React.FC<TextSectionProps> = ({ children }) => (
  <p
    style={{
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      fontSize: '18px',
      lineHeight: '1.6',
      margin: '20px 0',
      color: '',
      maxWidth: '800px',
      textAlign: 'left',
      padding: '0 10px',
    }}
  >
    {children}
  </p>
);

export default TextSection;