import Button from "./Button";
import CrazyButton from "./CrazyButton";
import TextInput from "./TextInput";

function App() {
  return (
    <div className="grid gap-2 items-center p-4 justify-center">
      <Button />
      <TextInput />
      <CrazyButton />
    </div>
  );
}

export default App;
