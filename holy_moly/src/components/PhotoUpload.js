import React, { useState } from "react";

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
      <input type="file" accept="image/*" onChange={handlePhotoUpload} />
      {photo && <img src={photo} alt="Uploaded" style={{ width: "200px" }} />}
    </div>
  );
};

export default PhotoUpload;
