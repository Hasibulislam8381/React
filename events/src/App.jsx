import BubbleForm from "./BubbleForm";
import Button from "./Button";
import CrazyButton from "./CrazyButton";
import TextInput from "./TextInput";
import ToolBar from "./ToolBar";

function App() {
  return (
    <div className="grid gap-2 items-center p-4 justify-center">
      <Button />
      <TextInput />
      <CrazyButton />
      <ToolBar />
      <BubbleForm />
    </div>
  );
}

export default App;
