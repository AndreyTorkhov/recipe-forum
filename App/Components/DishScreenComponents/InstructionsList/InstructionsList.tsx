import { useEffect, useState } from "react";
import { Text, View, Image, ActivityIndicator } from "react-native";
import { InstructionService } from "../../../Services/instructionServices";

interface Step {
  id: number;
  step_number: number;
  description: string;
  image?: string;
}

const InstructionsList = ({ stepIds }: { stepIds: number[] }) => {
  const [steps, setSteps] = useState<Step[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSteps = async () => {
      setLoading(true);
      try {
        const fetchedSteps = await Promise.all(
          stepIds.map((id) =>
            InstructionService.getInstructionById(id).then((res) => res.data)
          )
        );
        setSteps(fetchedSteps);
      } catch (error) {
        console.error("Ошибка загрузки шагов:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSteps();
  }, [stepIds]);

  if (loading) {
    return <ActivityIndicator size="large" color="#70B9BE" />;
  }

  return (
    <View className="p-4 h-auto">
      {steps.map((step) => (
        <View
          key={step.id}
          className="bg-white py-4 px-4 mb-4 rounded-lg shadow-lg shadow-sky-200"
        >
          <Text className="font-bold text-lg mb-2">Шаг {step.step_number}</Text>
          <Text className="text-gray-800 mb-4">{step.description}</Text>
          {step.image && (
            <Image
              source={{ uri: step.image }}
              className="w-full h-40 rounded-lg"
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default InstructionsList;
