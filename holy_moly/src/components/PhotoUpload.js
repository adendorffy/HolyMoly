import React, { useState } from "react";
import "../App.css";

const resizeImage = (file, maxWidth, maxHeight) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }

        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          resolve(URL.createObjectURL(blob));
        }, "image/jpeg");
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });
};

const PhotoUpload = ({ onPhotoUploaded, onPredict }) => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const resizedPhotoUrl = await resizeImage(file, 300, 300); // Resize to 300x300
        setPhoto(resizedPhotoUrl);
        onPhotoUploaded(file); // Notify parent of photo upload
      } catch (error) {
        console.error("Error resizing image:", error);
      }
    }
  };

  const removePhoto = () => {
    setPhoto(null);
    onPhotoUploaded(null); // Notify parent of photo removal
  };

  return (
    <div className="photo-upload">
      {!photo && (
        <div>
          <label htmlFor="file-upload" className="custom-file-upload">
            Upload or Take a Photo
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
          />
        </div>
      )}
      {photo && (
        <div className="photo-container">
          <img src={photo} alt="Uploaded" />
          <button className="remove-photo" onClick={removePhoto}>
            ✕
          </button>
          <button onClick={onPredict} className="predict-button">
            Predict Number of Bags
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
