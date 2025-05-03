import React, { useState } from "react";

function BubbleForm() {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(query);
    setQuery("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border px-1 py-2"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="bg-sky-500 py-2 px-1 ml-1" type="submit" />
      </form>
    </div>
  );
}

export default BubbleForm;
