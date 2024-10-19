import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeSectionProps = {
  code: string;
  language?: string;
};

const CodeSection: React.FC<CodeSectionProps> = ({ code, language = 'javascript' }) => {
  const [copyStatus, setCopyStatus] = useState<string>('Copy');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopyStatus('Copied!');
        setTimeout(() => setCopyStatus('Copy'), 2800);
      })
      .catch(err => {
        console.error('Could not copy code: ', err);
      });
  };

  return (
    <div style={{ position: 'relative', margin: '20px 0', padding: '10px' }}>
      <button onClick={copyToClipboard} style={{
        position: 'absolute',
        top: '24px',
        right: '15px',
        padding: '5px 10px',
        backgroundColor: '#000',
        color: '#fff',
        border: '1px #a0a0a0 solid',
        borderRadius: '3px',
        cursor: 'pointer',
        fontSize: '14px',
        fontStyle: 'italic'
      }}>
        {copyStatus}
      </button>
      <SyntaxHighlighter language={language} style={dracula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSection;