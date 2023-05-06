import { useEffect, useState } from "react";
import { calculateBMI, UnitSystem } from "../../algoirthms/bmi/index";

function BMI() {
  const [weight, setWeight] = useState<number>(75);
  const [height, setHeight] = useState<number>(175);
  const [result, setResult] = useState<number>(0);
  useEffect(() => {
    if (weight <= 0 || height <= 0) return;

    const result = calculateBMI({
      weight: weight,
      height: height,
      unitSystem: UnitSystem.Metric,
    });
    setResult(result);
  }, [weight, height]);

  const ChangeWeight = (value: number) => {
    if (isNaN(value)) return;
    if (value < 0) value = 0;
    setWeight(value);
  };

  const ChangeHeight = (value: number) => {
    if (isNaN(value)) return;
    if (value < 0) value = 0;
    setHeight(value);
  };

  return (
    <>
      <p>
        Weight:{" "}
        <input
          type="number"
          value={weight}
          placeholder="Weight (KG)"
          onChange={(e) => {
            const value: number = parseFloat(e.target.value);
            ChangeWeight(value);
          }}
        />
      </p>
      <p>
        Height:{" "}
        <input
          type="number"
          value={height}
          placeholder="Height (CM)"
          onChange={(e) => {
            const value: number = parseFloat(e.target.value);
            ChangeHeight(value);
          }}
        />
      </p>
      <p>BMI: {<textarea disabled value={result}></textarea>}</p>

      <p>BMI less than 18.5: Underweight</p>
      <p> BMI between 18.5 and 24.9: Normal weight</p>
      <p>BMI between 25 and 29.9: Overweight </p>
      <p>BMI greater than or equal to 30: Obese</p>
    </>
  );
}

export default BMI;
