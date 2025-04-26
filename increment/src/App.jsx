import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const increament = () => setCount(count + 1);

  return (
    <>
      <div>The count is:{count}</div>
      <button className="bg-amber-500 rounded p-1 text-white" onClick={increament}>
        Parent
      </button>
    </>
  );
}

export default App;
