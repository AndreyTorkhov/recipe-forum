import React from "react";
import { Alert, Modal, Text, Pressable, View, Image } from "react-native";

interface ModalWindowProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  imageUri: string;
}

function ModalWindow(props: ModalWindowProps) {
  const { imageUri, modalVisible, setModalVisible } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View className="flex-1 justify-center items-center mb-5">
        <View className="m-5 bg-white rounded-2xl p-1 items-center shadow-black">
          <Image
            source={{ uri: imageUri }}
            className="w-80 h-[90%] mb-2 rounded-xl"
          />
          <Pressable
            // style={[styles.button, styles.buttonClose]}
            className="rounded-2xl"
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text className="text-black font-bold text-xl">BACK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

export default ModalWindow;
