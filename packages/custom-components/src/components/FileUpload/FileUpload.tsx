import React, { useRef, useState } from 'react';
import './FileUpload.css';

const FileUpload: React.FC = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  return (
    <div className="file-upload">
      <input
        type="file"
        ref={fileInput}
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
      <button onClick={() => fileInput.current?.click()}>Choose File</button>
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <p>File Size: {selectedFile.size} bytes</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;