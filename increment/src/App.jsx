import { useState } from "react";
import Child from "./Child";
function App() {
  const [count, setCount] = useState(0);

  const increament = () => setCount(count + 1);

  return (
    <div className="p-4">
      <div>The count is:{count}</div>
      <button
        className="bg-amber-500 rounded p-1 text-white"
        onClick={increament}
      >
        Parent Add
      </button>
      <Child count={count} onIncreament={increament} />
    </div>
  );
}

export default App;
