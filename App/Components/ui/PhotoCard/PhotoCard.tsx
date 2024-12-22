import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

interface PhotoCardProps {
  onPress?: () => void;
  photo: string | null;
  onPickPhoto: (uri: string) => void;
  className?: string; // Поддержка кастомных стилей
}

const PhotoCard = ({
  onPress,
  photo,
  onPickPhoto,
  className,
}: PhotoCardProps) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  // Проверяем разрешения на доступ к камере/галерее
  React.useEffect(() => {
    const getPermissions = async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getPermissions();
  }, []);

  const handlePickImage = async () => {
    if (!hasPermission) {
      alert("Нет разрешений для доступа к галерее.");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets?.[0]?.uri) {
      // Теперь URI изображения находится в result.assets[0].uri
      onPickPhoto(result.assets[0].uri);
    }
  };

  return (
    <View
      className={`border-2 border-[#70B9BE] rounded-lg p-3 mt-2 ${className}`}
    >
      <TouchableOpacity onPress={handlePickImage} className="flex items-center">
        {/* Если фото выбрано, показываем только фото */}
        {photo ? (
          <Image
            source={{ uri: photo }}
            className="w-full h-52 object-cover rounded-lg"
          />
        ) : (
          <>
            <View className="w-full h-24 bg-gray-200 rounded-lg" />
            <Text className="text-center text-gray-500 mt-2">
              Добавить фото
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PhotoCard;
