import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [imageView, setImageView] = useState(null);
  const fileRef = useRef(null)

  const submitHandler = (event) => {
    const imageFile = event.target.files[0]; 
    if (imageFile) {
      const url = URL.createObjectURL(imageFile)
      setImageView(url); 
    }
  };
  const reset = () => {
    setImageView(null);
    if (fileRef.current) {
      fileRef.current.value = ""; 
    }
  }

  return (
    <div>
      <div className="container">
        <h1 className="heading">Image Upload and Preview</h1>

        <div className="upload">
          <input type="file" onChange={submitHandler} ref={fileRef} />
        </div>

        <div>
          <p className="string">
            {imageView ? `The image string is: ${imageView}` : "No image selected"}
          </p>
        </div>

        {imageView && (
          <div className="preview">
            <h3>Image Preview:</h3>
            <img src={imageView} alt="Preview" />
          </div>
        )}
        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
