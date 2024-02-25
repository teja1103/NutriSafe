import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Image from 'next/image';
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
    <div className="flex flex-col items-center">
      {error && <p className="text-red-500 my-4">{error}</p>}
      
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
        className="my-4"
      />
      
      <button onClick={captureImage} className='border-2 text-c-white rounded-md border-black my-2 px-4 py-2 hover:bg-e-d-brown'>
        Capture Image
      </button>
      
      <input type="file" accept="image/*" onChange={handleFileUpload} className="my-2 " />
      
      {uploadedImage && (
        <div className="my-4 ">
          <h2 className="text-xl font-semibold">Uploaded Image</h2>
          <Image src={uploadedImage} alt='Uploaded' width={640} height={480}/>
        </div>
      )}
    </div>
  );
};

export default Scanner;