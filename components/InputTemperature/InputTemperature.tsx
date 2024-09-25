import { TextInput, View, Text } from "react-native";

// CSS
import { s } from "./InputTemperature.css";

interface InputTemperatureProps {
  defaultValue: string;
  onChangeText: (text: string) => void;
  unit: string;
}

export function InputTemperature({
  defaultValue,
  onChangeText,
  unit,
}: InputTemperatureProps) {
  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        keyboardType="numbers-and-punctuation"
        defaultValue={defaultValue}
        maxLength={4}
        onChangeText={onChangeText}
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}
