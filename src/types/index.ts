export type Component = () => JSX.Element;

export interface ICalculatorSettings {
  tags: string[];
  name: string;
  component: Component | undefined;
  details: {
    link: string;
  };
}
