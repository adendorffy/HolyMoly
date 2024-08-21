import React, { useState } from "react";
import PhotoUpload from "./components/PhotoUpload";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [photo, setPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);

  const handlePhotoUpload = (file) => {
    setPhoto(file);
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <h1>Upload a Photo and Get a Random Number</h1>
      <PhotoUpload onPhotoUploaded={handlePhotoUpload} />
      <Modal isOpen={isModalOpen} onClose={closeModal} number={randomNumber} />
    </div>
  );
}

export default App;
