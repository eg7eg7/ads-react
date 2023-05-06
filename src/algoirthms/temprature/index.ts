export enum TemperatureUnit {
  Celsius = "Celsius",
  Fahrenheit = "Fahrenheit",
  Kelvin = "Kelvin",
}

function toCelsius(value: number, fromUnit: TemperatureUnit): number {
  switch (fromUnit) {
    case TemperatureUnit.Celsius:
      return value;
    case TemperatureUnit.Fahrenheit:
      return ((value - 32) * 5) / 9;
    case TemperatureUnit.Kelvin:
      return value - 273.15;
    default:
      throw new Error(`Unsupported temperature unit: ${fromUnit}`);
  }
}

function fromCelsius(value: number, toUnit: TemperatureUnit): number {
  switch (toUnit) {
    case TemperatureUnit.Celsius:
      return value;
    case TemperatureUnit.Fahrenheit:
      return (value * 9) / 5 + 32;
    case TemperatureUnit.Kelvin:
      return value + 273.15;
    default:
      throw new Error(`Unsupported temperature unit: ${toUnit}`);
  }
}

/**
 *
 * @param value
 * @param fromUnit
 * @param toUnit
 * @returns
 */
export function convertTemperature(
  value: number,
  fromUnit: TemperatureUnit,
  toUnit: TemperatureUnit
): number {
  const celsius = toCelsius(value, fromUnit);
  return fromCelsius(celsius, toUnit);
}
