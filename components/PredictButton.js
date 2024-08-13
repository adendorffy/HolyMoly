import React, { useState } from "react";
import { View, Pressable, Text, StyleSheet, Modal } from "react-native";

export default function PredictButton() {
  const [modalVisible, setModalVisible] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const generateRandomAmount = () => {
    const randomAmount = Math.floor(Math.random() * 10) + 1;
    setPrediction(randomAmount);
    setModalVisible(true);
  };

  return (
    <View style={[styles.buttonContainer]}>
      <Pressable
        style={[styles.button, { backgroundColor: "#fff" }]}
        onPress={generateRandomAmount}
      >
        <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
          Predict Amount of Bags
        </Text>
      </Pressable>

      {prediction !== null && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Predicted Amount of Bags: {prediction}
              </Text>
              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 60,
    padding: 3,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ffd33d",
  },
  closeButtonText: {
    fontSize: 16,
    color: "#25292e",
  },
});
