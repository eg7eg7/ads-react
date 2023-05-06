import { useEffect, useState } from "react";
import {
  AnimalType,
  convertAnimalAge,
} from "../../algoirthms/animal-years/index";

function AnimalYears() {
  const [fromValue, setFromValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<AnimalType>(AnimalType.LargeDog);
  const [toUnit, setToUnit] = useState<AnimalType>(AnimalType.Human);
  const [output, setOutput] = useState<number>(0);

  useEffect(() => {
    const result = convertAnimalAge(
      {
        age: fromValue,
        type: fromUnit,
      },
      toUnit
    );
    setOutput(result);
  }, [fromValue, fromUnit, toUnit]);

  const ChangeFromValue = (value: number) => {
    if (isNaN(value)) return;

    if (value < 0) value = 0;
    setFromValue(value);
  };

  const UnitSelection = (
    currentValue: AnimalType,
    onSelect: (value: AnimalType) => void
  ) => {
    return (
      <>
        <select
          name="unit_select"
          onChange={(e) => {
            onSelect(e.target.value as AnimalType);
          }}
          value={currentValue}
        >
          {Object.values(AnimalType).map((value: AnimalType) => {
            return (
              <>
                <option id={value} value={value}>
                  {value}
                </option>
              </>
            );
          })}
        </select>
      </>
    );
  };
  return (
    <>
      <p>
        From {UnitSelection(fromUnit, (unit: AnimalType) => setFromUnit(unit))}{" "}
        years
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
        To {UnitSelection(toUnit, (unit: AnimalType) => setToUnit(unit))} years
      </p>
      <textarea disabled value={output}></textarea>

      <p>
        Small dog = dog under 15kg, Average dog = dog from 15 to 45 kg, Big dog
        = dog over 45 kg
      </p>
    </>
  );
}

export default AnimalYears;
