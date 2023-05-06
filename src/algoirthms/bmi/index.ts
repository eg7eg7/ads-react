enum UnitSystem {
  Metric = "metric",
  Imperial = "imperial",
}

interface BMICalculationParams {
  weight: number;
  height: number;
  unitSystem: UnitSystem;
}

// BMI less than 18.5: Underweight
// BMI between 18.5 and 24.9: Normal weight
// BMI between 25 and 29.9: Overweight
// BMI greater than or equal to 30: Obese

/**
 *
 * @param param
 * @returns
 */
export function calculateBMI({
  weight,
  height,
  unitSystem,
}: BMICalculationParams): number {
  if (unitSystem === UnitSystem.Metric) {
    const heightM = height / 100;
    const bmi = weight / heightM ** 2;
    return bmi;
  } else if (unitSystem === UnitSystem.Imperial) {
    const heightIn = height;
    const weightLbs = weight;
    const bmi = (weightLbs / heightIn ** 2) * 703;
    return bmi;
  } else {
    throw new Error("Invalid unit system");
  }
}
