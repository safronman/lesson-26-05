import { Button } from "./components/Buttons";
import { RadioGroup, RadioGroupItem } from "./components/RadioGroup";
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.page}>
      <Button variant="secondary">Button</Button>
      <Button variant="primary">Button 222222222222</Button>
      <RadioGroup defaultValue="first" name="ui-kit-radio">
        <RadioGroupItem value="first">RadioGroup</RadioGroupItem>
        <RadioGroupItem value="second">RadioGroup</RadioGroupItem>
        <RadioGroupItem value="disabled" disabled>
          RadioGroup
        </RadioGroupItem>
      </RadioGroup>
    </main>
  );
}

export default App;
