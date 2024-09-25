import { UNITS } from "@/constants/constants";

function getOppositeUnit(unit: string) {
  return unit === UNITS.celcius ? UNITS.faranheit : UNITS.celcius;
}

function convertTemperature(temperature: number, unit: string) {
  if (unit === UNITS.celcius) {
    return Number.parseFloat(((temperature - 32) / 1.8).toFixed(1));
  }
  return Number.parseFloat((temperature * 1.8 + 32).toFixed(1));
}

function isColdTemperature(temperature: string, unit: string) {
  if (unit === UNITS.celcius) {
    return Number(temperature) <= 0;
  } else {
    return Number(temperature) <= 32;
  }
}

export { getOppositeUnit, convertTemperature, isColdTemperature };
