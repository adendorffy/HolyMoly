import React, { useState } from "react";
import PhotoUpload from "./components/PhotoUpload";
import Modal from "./components/Modal";

const App = () => {
  const [photo, setPhoto] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);

  const handlePhotoUploaded = (file) => {
    if (file) {
      console.log("Photo uploaded:", file);
    } else {
      console.log("Photo removed");
    }
    setPhoto(file ? URL.createObjectURL(file) : null);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handlePredict = () => {
    const randomNum = Math.floor(Math.random() * 100);
    setRandomNumber(randomNum);
    setModalOpen(true);
  };

  return (
    <div className="App">
      <h1>Holy Moly</h1>
      <PhotoUpload
        onPhotoUploaded={handlePhotoUploaded}
        onPredict={handlePredict}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        You need {randomNumber} bags
      </Modal>
    </div>
  );
};

export default App;
