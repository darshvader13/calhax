import React, { useState } from 'react';

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [floatValue1, setFloatValue1] = useState(0.5); // Default value for the first float slider
  const [floatValue2, setFloatValue2] = useState(0.5); // Default value for the second float slider
  const [integerValue, setIntegerValue] = useState(1); // Default value for the integer input

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file && file.name.endsWith('.zip')) {
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

  const handleFloat1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setFloatValue1(value);
    }
  };

  const handleFloat2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setFloatValue2(value);
    }
  };

  const handleIntegerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setIntegerValue(value);
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

      <h2>Parameter Inputs</h2>
      <div>
        <label>Float Parameter 1:</label>
        <input
          type="range"
          step="0.01"
          min="0"
          max="1"
          value={floatValue1}
          onChange={handleFloat1Change}
        />
        <span>{floatValue1}</span>
      </div>

      <div>
        <label>Float Parameter 2:</label>
        <input
          type="range"
          step="0.01"
          min="0"
          max="1"
          value={floatValue2}
          onChange={handleFloat2Change}
        />
        <span>{floatValue2}</span>
      </div>

      <div>
        <label>Integer Parameter:</label>
        <input
          type="number"
          value={integerValue}
          onChange={handleIntegerChange}
        />
      </div>
    </div>
  );
}

export default App;
