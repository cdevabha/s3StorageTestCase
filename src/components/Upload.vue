import React from 'react';
import { uploadData } from 'aws-amplify/storage';

function FileUpload() {
  const handleUpload = () => {
    const file = document.getElementById("file");
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file.files);

    fileReader.onload = async (event) => {
      console.log("Complete File read successfully!", event.target.result);
      try {
        await uploadData({
          data: event.target.result,
          path: `picture-submissions/${file.files.name}`
        });
        console.log("Upload successful!");
      } catch (e) {
        console.log("error", e);
      }
    };
  };

  return (
    <div>
      <input type="file" id="file" />
      <button id="upload" onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
