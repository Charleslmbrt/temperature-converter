import { Text, TouchableOpacity } from "react-native";

// CSS
import { s } from "./ButtonConvert.css";

interface ButtonConvertProps {
  unit: string;
  onPress: () => void;
}

export function ButtonConvert({ unit, onPress }: ButtonConvertProps) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.text}>Convertir en {unit}</Text>
    </TouchableOpacity>
  );
}
