import React from "react";
import { useEffect, useState } from "react";

function StateChangeEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Add Count</button>
    </div>
  );
}

export default StateChangeEffect;
