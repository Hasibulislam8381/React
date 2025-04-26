function Child({ count, onIncreament }) {
  return (
    <div>
      <div>Child count:{count}</div>
      <button
        className="bg-amber-500 rounded p-1 text-white"
        onClick={onIncreament}
      >
        Child Add
      </button>
    </div>
  );
}

export default Child;
