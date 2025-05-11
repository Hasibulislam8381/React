import React from "react";
import { useEffect, useState } from "react";
function Basics() {
  const [data, setData] = useState(null);
  useEffect(() => {
    // Get data from APi
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h2>Fetched Data</h2>
      {data ? <p>{data?.title}</p> : <p>Loading...</p>} {/* fixed */}
    </div>
  );
}

export default Basics;
