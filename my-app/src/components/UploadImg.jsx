import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('.jpg', file);

    fetch('http://192.168.34.133:12345/image_text_summarize', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(data => setOutput(data))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      <output>{output}</output>
    </div>
  );
}

export default App;