import { ImageBackground, View } from "react-native";
import { useEffect, useState } from "react";

// Constants
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT } from "./constants/constants";

// Images
import hotBackground from "./assets/images/hot.png";
import coldBackground from "./assets/images/cold.png";

// CSS
import { s } from "./App.css";

// Components
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";

// Hooks
import {
  getOppositeUnit,
  convertTemperature,
  isColdTemperature,
} from "./hooks/temperature-services";

export default function App() {
  const [temperatureValue, setTemperatureValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [currentBackground, setCurrentBackground] = useState();

  const oppositeUnit = getOppositeUnit(currentUnit);

  function handleInputValue(value: string) {
    return setTemperatureValue(Number(value) || 0);
  }

  function handleCurrentBackground() {
    const valueAsNumber = Number.parseFloat(temperatureValue.toString());
    if (!isNaN(valueAsNumber)) {
      const isCold = isColdTemperature(valueAsNumber.toString(), currentUnit);
      setCurrentBackground(isCold ? coldBackground : hotBackground);
    }
  }

  useEffect(() => {
    handleCurrentBackground();
  }, [temperatureValue, currentUnit]);

  return (
    <>
      <ImageBackground source={currentBackground} style={s.container}>
        <View style={s.workspace}>
          <TemperatureDisplay
            temperature={convertTemperature(temperatureValue, oppositeUnit)}
            unit={oppositeUnit}
          />
          <InputTemperature
            onChangeText={handleInputValue}
            defaultValue={DEFAULT_TEMPERATURE.toString()}
            unit={currentUnit}
          />
          <ButtonConvert
            unit={currentUnit}
            onPress={() => setCurrentUnit(oppositeUnit)}
          />
        </View>
      </ImageBackground>
    </>
  );
}
