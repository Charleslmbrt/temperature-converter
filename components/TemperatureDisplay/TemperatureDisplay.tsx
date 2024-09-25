import { Text, View } from "react-native";

// CSS
import { s } from "./TemperatureDisplay.css";

interface TemperatureDisplayProps {
  temperature: number;
  unit: string;
}

export function TemperatureDisplay({
  temperature,
  unit,
}: TemperatureDisplayProps) {
  return (
    <View style={s.container}>
      <Text style={s.text}>{temperature}</Text>
      <Text style={s.text}>{unit}</Text>
    </View>
  );
}
