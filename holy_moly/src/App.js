import React, { useState } from "react";
import PhotoUpload from "./components/PhotoUpload";
import PredictBags from "./components/PredictBags";
import "./App.css";

function App() {
  const [photo, setPhoto] = useState(null);

  return (
    <div className="App">
      <h1>Predict the Number of Bags I need to fill this pothole:</h1>
      <PhotoUpload onPhotoUploaded={setPhoto} />
      <PredictBags photo={photo} />
    </div>
  );
}

export default App;
