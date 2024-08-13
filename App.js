import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";
import PredictButton from "./components/PredictButton";
import HomeButton from "./components/HomeButton";

const PlaceholderImage = require("./assets/images/background-image.jpeg");

export default function App() {
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera permissions to make this work!");
      }
    })();
  }, []);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const takePhotoAsync = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      console.log(uri);
      setSelectedImage(uri);
      setShowAppOptions(true);
    } else {
      alert("You did not take any photo.");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <HomeButton icon="home" label="Home" onPress={onReset} />
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <PredictButton />
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button
            theme="secondary"
            label="Take a photo"
            onPress={takePhotoAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    paddingTop: 40,
  },
  imageContainer: {
    flex: 1,
    padding: 10,
  },

  footerContainer: {
    flex: 1 / 4,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  optionsContainer: {
    position: "absolute",
    bottom: 120,
    width: "100%", // Ensures the container spans the width of the screen
    alignItems: "center", // Centers the buttons horizontally
  },
});
