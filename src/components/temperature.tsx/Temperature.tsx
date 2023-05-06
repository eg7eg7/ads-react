import { useEffect, useState } from "react";
import {
  convertTemperature,
  TemperatureUnit,
} from "../../algoirthms/temprature/index";

const CELSIUS_MINIMUM = -273.15;
const FAHRENHEIT_MINIMUM = -128.6;
const KELVIN_MINIMUM = 0;

function Temperature() {
  const [fromValue, setFromValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<TemperatureUnit>(
    TemperatureUnit.Celsius
  );
  const [toUnit, setToUnit] = useState<TemperatureUnit>(
    TemperatureUnit.Fahrenheit
  );
  const [output, setOutput] = useState<number>(0);

  useEffect(() => {
    const result = convertTemperature(fromValue, fromUnit, toUnit);
    setOutput(result);
  }, [fromValue, fromUnit, toUnit]);
  const ChangeFromValue = (value: number) => {
    if (isNaN(value)) return;

    if (fromUnit === TemperatureUnit.Celsius && value < CELSIUS_MINIMUM) {
      value = CELSIUS_MINIMUM;
    }

    if (fromUnit === TemperatureUnit.Kelvin && value < KELVIN_MINIMUM) {
      value = KELVIN_MINIMUM;
    }

    if (fromUnit === TemperatureUnit.Fahrenheit && value < FAHRENHEIT_MINIMUM) {
      value = FAHRENHEIT_MINIMUM;
    }
    setFromValue(value);
  };

  const UnitSelection = (
    currentValue: TemperatureUnit,
    onSelect: (value: TemperatureUnit) => void
  ) => {
    return (
      <>
        <select
          name="unit_select"
          onChange={(e) => {
            onSelect(e.target.value as TemperatureUnit);
          }}
          value={currentValue}
        >
          <option value={TemperatureUnit.Celsius}>
            {TemperatureUnit.Celsius}
          </option>
          <option value={TemperatureUnit.Fahrenheit}>
            {TemperatureUnit.Fahrenheit}
          </option>
          <option value={TemperatureUnit.Kelvin}>
            {TemperatureUnit.Kelvin}
          </option>
        </select>
      </>
    );
  };
  return (
    <>
      <p>
        From{" "}
        {UnitSelection(fromUnit, (unit: TemperatureUnit) => setFromUnit(unit))}
      </p>
      <input
        type="number"
        value={fromValue}
        onChange={(e) => {
          const value: number = parseFloat(e.target.value);
          ChangeFromValue(value);
        }}
      />
      <p>
        To {UnitSelection(toUnit, (unit: TemperatureUnit) => setToUnit(unit))}
      </p>
      <textarea disabled value={output}></textarea>
    </>
  );
}

export default Temperature;
