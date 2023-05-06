import { ICalculatorSettings } from "../../types/index";
import "./CalculatorFrame.css";

function CalculatorFrame({ settings }: { settings: ICalculatorSettings }) {
  return (
    <>
      <div>{settings.name}</div>
      {settings.component && <settings.component></settings.component>}
    </>
  );
}

export default CalculatorFrame;
