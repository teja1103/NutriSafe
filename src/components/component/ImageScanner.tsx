// pages/scanner.tsx

import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const Scanner: React.FC = () => {
  const webcamRef = useRef<any>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const captureImage = () => {
    try {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setUploadedImage(imageSrc);
        setError(null);
      } else {
        setError('Failed to capture image. Please try again.');
      }
    } catch (error) {
      setError('Error capturing image. Please check camera permissions.');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      try {
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadedImage(reader.result as string);
          setError(null);
        };
        reader.readAsDataURL(file);
      } catch (error) {
        setError('Error uploading image. Please try again.');
      }
    }
  };

  return (
    <div>
      <h1>Image Scanner</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
      />
      <button onClick={captureImage} className='border-2 rounded-md border-black '>Capture Image</button>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      {uploadedImage && (
        <div>
          <h2>Uploaded Image</h2>
          <img src={uploadedImage} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default Scanner;
