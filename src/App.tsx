import React, { useState } from 'react';

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file && file.type === 'application/zip' && file.name.endsWith('.zip')) {
      setSelectedFile(file);
    } else {
      alert('Please select a valid zip file.');
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // You can handle file upload logic here, e.g., send it to a server.
      console.log('Uploading file:', selectedFile);
    } else {
      alert('Please select a valid zip file first.');
    }
  };

  return (
    <div className="App">
      <h1>ZIP File Input Example</h1>
      <input
        type="file"
        accept=".zip"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload</button>
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <p>File Size: {selectedFile.size} bytes</p>
        </div>
      )}
    </div>
  );
}

export default App;
