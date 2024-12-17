import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import ModalWindow from "../../Components/ui/ModalWindow";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import { ScreenNavigationProp } from "../../Types/navigation";

type Props = {
  navigation: ScreenNavigationProp<"Camera">;
};

const Camera = ({ navigation }: Props) => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  const cameraRef = useRef<any>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  const [modalVisible, setModalVisible] = useState(false);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="flex-1 justify-center">
        <Text className="text-center pb-3">
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function showModal() {
    if (photo) {
      setModalVisible(true);
    } else {
      alert("No photo available to display.");
    }
  }

  async function takePhoto() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri);
      // console.log("Photo taken:", photo.uri);
    }
  }

  return (
    <View className="flex-1 justify-center">
      <CameraView className="flex-1" facing={facing} ref={cameraRef}>
        <View className="flex-1 flex-row bg-transparent m-8 mb-16">
          <TouchableOpacity
            className="flex-1 self-end items-center bottom-2"
            onPress={showModal}
          >
            <Feather name="eye" size={32} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 self-end items-center mx-12"
            onPress={takePhoto}
          >
            <MaterialIcons
              name="radio-button-unchecked"
              size={52}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 self-end items-center bottom-2"
            onPress={toggleCameraFacing}
          >
            <MaterialIcons name="flip-camera-android" size={32} color="white" />
          </TouchableOpacity>
        </View>
      </CameraView>

      {photo && (
        <ModalWindow
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          imageUri={photo}
        />
      )}
    </View>
  );
};

export default Camera;
