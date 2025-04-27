function TextInput() {
  function handleChange() {
    console.log("Text Change");
  }
  return (
    <div>
      <input
        className="border-red-700 border-2 rounded-2xl p-2"
        onChange={handleChange}
        type="text"
      />
    </div>
  );
}

export default TextInput;
