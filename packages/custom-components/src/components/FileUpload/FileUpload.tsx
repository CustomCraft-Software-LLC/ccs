import React, { useRef } from 'react';
import './FileUpload.css';

const FileUpload = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    onFileSelect(file);
  };

  return (
    <div className="file-upload">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
      <button onClick={() => fileInputRef.current.click()}>Choose File</button>
    </div>
  );
};