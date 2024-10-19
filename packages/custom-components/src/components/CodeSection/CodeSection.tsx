import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
        setTimeout(() => setCopyStatus('Copy'), 2000);
      })
      .catch(err => {
        console.error('Could not copy code: ', err);
      });
  };

  return (
    <div style={{ position: 'relative', margin: '20px 0', border: '1px solid #ddd', borderRadius: '5px', padding: '10px', backgroundColor: '#f5f5f5' }}>
      <button onClick={copyToClipboard} style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        padding: '5px 10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        fontSize: '14px',
      }}>
        {copyStatus}
      </button>
      <SyntaxHighlighter language={language} style={solarizedlight}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSection;