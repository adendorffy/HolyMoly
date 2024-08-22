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

  const weightedRandom = () => {
    const weights = [
      { value: 0.5, weight: 0.3 }, // 30% chance
      { value: 1, weight: 0.2 }, // 20% chance
      { value: 2, weight: 0.2 }, // 20% chance
      { value: 3, weight: 0.05 }, // 5% chance
      { value: 4, weight: 0.05 }, // 5% chance
      { value: 5, weight: 0.05 }, // 5% chance
      { value: 6, weight: 0.05 }, // 5% chance
      { value: 7, weight: 0.025 }, // 2.5% chance
      { value: 8, weight: 0.025 }, // 2.5% chance
      { value: 9, weight: 0.025 }, // 2.5% chance
      { value: 10, weight: 0.025 }, // 2.5% chance
      { value: 11, weight: 0.01 }, // 1% chance
      { value: 12, weight: 0.01 }, // 1% chance
      { value: 13, weight: 0.01 }, // 1% chance
      { value: 14, weight: 0.01 }, // 1% chance
      { value: 15, weight: 0.01 }, // 1% chance
    ];

    const totalWeight = weights.reduce(
      (acc, current) => acc + current.weight,
      0
    );
    const random = Math.random() * totalWeight;

    let accumulatedWeight = 0;

    for (let i = 0; i < weights.length; i++) {
      accumulatedWeight += weights[i].weight;
      if (random < accumulatedWeight) {
        return weights[i].value;
      }
    }
  };

  const handlePredict = () => {
    let randomNum = weightedRandom();
    console.log("Random weighted number:", randomNum);
    setRandomNumber(randomNum);
    setModalOpen(true);
  };

  return (
    <div className="App">
      <div className="app-title">Holy Moly</div>
      {!photo && (
        <div className="brown-text">
          removing potholes one bag of asphalt at a time
        </div>
      )}
      <PhotoUpload
        onPhotoUploaded={handlePhotoUploaded}
        onPredict={handlePredict}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        You need <p className="orange-text">{randomNumber}</p> bags
      </Modal>
    </div>
  );
};

export default App;
