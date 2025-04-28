function TextInput() {
  function handleChange(event) {
    console.log(event.target.valueAsNumber);
  }
  return (
    <div>
      <input
        className="border-red-700 border-2 rounded-2xl p-2"
        onChange={handleChange}
        type="number"
      />
    </div>
  );
}

export default TextInput;
