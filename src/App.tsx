import { Button } from "./components/Buttons";
import { RadioGroup } from "./components/RadioGroup";
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.page}>
      <Button variant="secondary">Button</Button>
      <Button variant="primary">Button 222222222222</Button>
      <RadioGroup
        defaultValue="first"
        name="ui-kit-radio"
        options={[
          { label: "RadioGroup", value: "first" },
          { label: "RadioGroup", value: "second" },
          { label: "RadioGroup", value: "disabled", disabled: true },
        ]}
      />
    </main>
  );
}

export default App;
