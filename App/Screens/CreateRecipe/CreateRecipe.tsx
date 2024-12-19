import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import InputForm from "../../Components/ui/InputForm";
import ButtonDefoult from "../../Components/ui/ButtonDefoult";
import PhotoCard from "../../Components/ui/PhotoCard";
import { MultiSelect } from "react-native-element-dropdown";
import { IngredientService } from "../../Services/ingredientServices";
import { useRecipeStore } from "../../Store/useRecipeStore";

const CreateRecipe = () => {
  const {
    selectedIngredients,
    setSelectedIngredients,
    steps,
    addStep,
    updateStep,
  } = useRecipeStore();

  const [availableIngredients, setAvailableIngredients] = useState<
    { label: string; value: number }[]
  >([]);
  const [selectedIngredientIds, setSelectedIngredientIds] = useState<string[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  // Новые стейты для названия блюда, описания и фото
  const [dishName, setDishName] = useState("");
  const [dishDescription, setDishDescription] = useState("");
  const [dishPhoto, setDishPhoto] = useState<string | null>(null);

  // Загрузка ингредиентов с бэка
  useEffect(() => {
    const fetchIngredients = async () => {
      setLoading(true);
      try {
        const response = await IngredientService.getIngredient();
        setAvailableIngredients(
          response.data.map((ingredient: any) => ({
            label: ingredient.name,
            value: ingredient.id,
          }))
        );
      } catch (error) {
        console.error("Ошибка при загрузке ингредиентов:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, []);

  const handleIngredientChange = (selectedIds: string[]) => {
    setSelectedIngredientIds(selectedIds);
    const selected = availableIngredients.filter((ingredient) =>
      selectedIds.includes(ingredient.value.toString())
    );
    setSelectedIngredients(selected);
  };

  const handleSave = () => {
    console.log("Название блюда:", dishName);
    console.log("Описание блюда:", dishDescription);
    console.log("Фото блюда:", dishPhoto);
    console.log("Выбранные ингредиенты:", selectedIngredients);
    console.log("Шаги приготовления:", steps);
    console.log("Рецепт сохранен!");
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#70B9BE" />
      </View>
    );
  }

  return (
    <ScrollView className="p-5">
      <Text className="text-2xl font-bold top-6 mb-4">Создание рецепта</Text>

      {/* Название блюда */}
      <View className="my-5">
        <InputForm
          signatureText="Название блюда"
          placeholderText="Введите название блюда"
          value={dishName}
          onChangeText={setDishName}
        />
        <InputForm
          signatureText="Описание блюда"
          placeholderText="Введите описание блюда"
          value={dishDescription}
          onChangeText={setDishDescription}
        />
        <PhotoCard
          onPress={() => {}}
          photo={dishPhoto}
          onPickPhoto={(uri) => setDishPhoto(uri)}
        />
      </View>

      <View className="my-5 border-t-2 border-gray-300" />

      {/* Ингредиенты */}
      <View className="my-5">
        <Text className="text-lg font-bold mb-2">Ингредиенты:</Text>
        <MultiSelect
          data={availableIngredients}
          labelField="label"
          valueField="value"
          placeholder="Выберите ингредиенты"
          value={selectedIngredientIds}
          onChange={handleIngredientChange}
          search
          searchPlaceholder="Поиск ингредиентов"
          selectedTextStyle={{
            color: "#000",
            fontWeight: "bold",
          }}
          selectedStyle={{
            backgroundColor: "#EAF6FF",
            borderColor: "#70B9BE",
            borderWidth: 1,
            borderRadius: 12,
            padding: 8,
          }}
          style={{
            borderColor: "#70B9BE",
            borderWidth: 1,
            borderRadius: 12,
            padding: 10,
          }}
          placeholderStyle={{
            color: "#97A2B0",
            fontSize: 14,
          }}
          itemTextStyle={{
            color: "#000",
            fontSize: 14,
          }}
          iconStyle={{
            tintColor: "#70B9BE",
          }}
        />
      </View>

      {/* Шаги приготовления */}
      <View className="my-5 border-t-2 border-gray-300" />

      <View className="my-5">
        <Text className="text-lg font-bold mb-2">
          Инструкция по приготовлению:
        </Text>
        {steps.map((step, index) => (
          <View key={index} className="my-4">
            <InputForm
              signatureText={`Шаг ${index + 1}`}
              placeholderText="Описание шага"
              value={step.description}
              onChangeText={(text) =>
                updateStep(index, { ...step, description: text })
              }
            />
            <PhotoCard
              onPress={() => {}}
              photo={step.photo}
              onPickPhoto={(uri) => updateStep(index, { ...step, photo: uri })}
              className="mt-4"
            />
          </View>
        ))}
        <ButtonDefoult
          onPress={() => addStep({ description: "", photo: null })}
          text="Добавить шаг"
          buttonState="blue"
          btnStyle={{ marginTop: 10 }}
        />
      </View>

      <View className="my-5 border-t-2 border-gray-300" />

      <ButtonDefoult
        onPress={handleSave}
        text="Сохранить рецепт"
        buttonState="black"
        btnStyle={{ marginTop: 20, marginBottom: 40 }}
      />
    </ScrollView>
  );
};

export default CreateRecipe;
