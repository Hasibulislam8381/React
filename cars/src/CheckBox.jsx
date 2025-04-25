function CheckBox({ checked, onChange }) {
  return (
    <label className="ml-2 flex items-center space-x-1">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>Show Premium Only</span>
    </label>
  );
}

export default CheckBox;
