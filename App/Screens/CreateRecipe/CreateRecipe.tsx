import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import InputForm from "../../Components/ui/InputForm";
import ButtonDefoult from "../../Components/ui/ButtonDefoult";
import PhotoCard from "../../Components/ui/PhotoCard";

const CreateRecipe = () => {
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);
  const [steps, setSteps] = useState([{ description: "", photo: null }]);

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };

  const addStep = () => {
    setSteps([...steps, { description: "", photo: null }]);
  };

  const handleSave = () => {
    // Логика для сохранения рецепта
    console.log("Рецепт сохранен");
  };

  return (
    <ScrollView className="p-5">
      <Text className="text-2xl font-bold top-6 mb-4">Создание рецепта</Text>

      <View className="my-5">
        <Text className="text-lg font-bold mb-2">Ингредиенты:</Text>
        {ingredients.map((ingredient, index) => (
          <View key={index} className="p-2 pt-0 flex-row items-center">
            <Text className="mr-2 text-sm">{index + 1}.</Text>
            <InputForm
              signatureText="Ингредиент"
              placeholderText="Лук"
              value={ingredient.name}
              onChangeText={(text) => {
                const updatedIngredients = [...ingredients];
                updatedIngredients[index].name = text;
                setIngredients(updatedIngredients);
              }}
              className="flex-1"
            />
            <InputForm
              signatureText="Кол-во"
              placeholderText="5 шт."
              value={ingredient.quantity}
              onChangeText={(text) => {
                const updatedIngredients = [...ingredients];
                updatedIngredients[index].quantity = text;
                setIngredients(updatedIngredients);
              }}
              className="w-24 ml-2"
            />
          </View>
        ))}
        <ButtonDefoult
          onPress={addIngredient}
          text="Добавить ингредиент"
          buttonState="blue"
          btnStyle={{ marginTop: 10 }}
        />
      </View>

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
              onChangeText={(text) => {
                const updatedSteps = [...steps];
                updatedSteps[index].description = text;
                setSteps(updatedSteps);
              }}
            />
            <PhotoCard
              onPress={() => {}}
              photo={step.photo}
              onPickPhoto={(uri) => {
                const updatedSteps = [...steps];
                updatedSteps[index].photo = uri;
                setSteps(updatedSteps);
              }}
              className="mt-4"
            />
          </View>
        ))}
        <ButtonDefoult
          onPress={addStep}
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
