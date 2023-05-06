import { useState } from "react";
import "./App.css";
import { ICalculatorSettings } from "./types/index";
import CalculatorFrame from "./components/calculator-frame/CalculatorFrame";
import Temperature from "./components/temperature.tsx/Temperature";
import AnimalYears from "./components/animal-years/AnimalYears";
import BMI from "./components/bmi/BMI";

const calculators: ICalculatorSettings[] = [
  {
    name: "Temperature Unit Converter",
    tags: [],
    component: Temperature,
    details: {
      link: "",
    },
  },
  {
    name: "Animal Year Converter",
    tags: [],
    component: AnimalYears,
    details: {
      link: "",
    },
  },
  {
    name: "BMI Calculator",
    tags: [],
    component: BMI,
    details: {
      link: "",
    },
  },
  // {
  //   name: "example4",
  //   tags: [],
  //   component: undefined,
  //   details: {
  //     link: "",
  //   },
  // },
];

function App() {
  const [selected, setSelected] = useState(calculators[0]);

  return (
    <>
      <h1>Calculators Heaven</h1>
      <div className="card">
        <p>Please select a calculator</p>
        {calculators.map((calculator) => (
          <button
            onClick={() => setSelected(calculator)}
            id={calculator.name}
            style={{ margin: 3 }}
          >
            {calculator.name}
          </button>
        ))}
        <div style={{ marginTop: 50 }}>
          <CalculatorFrame settings={selected}></CalculatorFrame>
        </div>
      </div>
      <p className="read-the-docs">
        Created by Eden Dupont {new Date().getFullYear()}
      </p>
    </>
  );
}

export default App;
