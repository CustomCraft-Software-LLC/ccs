import React from 'react';

type CodeSectionProps = {
  code: string;
  language?: string;
};

const CodeSection: React.FC<CodeSectionProps> = ({ code, language = 'javascript' }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!');
    }).catch(err => {
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
        Copy
      </button>
      <pre style={{ margin: '0', overflowX: 'auto' }}>
        <code className={`language-${language}`} style={{ whiteSpace: 'pre-wrap' }}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeSection;