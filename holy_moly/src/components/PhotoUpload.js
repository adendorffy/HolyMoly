import React, { useState } from "react";
import "../App.css";

const PhotoUpload = ({ onPhotoUploaded }) => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
      onPhotoUploaded(file);
    }
  };

  return (
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
      {photo && <img src={photo} alt="Uploaded" />}
    </div>
  );
};

export default PhotoUpload;
