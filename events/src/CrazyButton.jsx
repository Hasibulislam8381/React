import PropTypes from "prop-types";
function Button({ message, children }) {
  function handleClick(event, message) {
    console.log(event.target);

    console.log(message);
  }
  return (
    <button
      onClick={(event) => handleClick(event, message)}
      className="bg-purple-700 text-white rounded px-2 py-1 cursor-pointer"
    >
      {children}
    </button>
  );
}

function CrazyButton() {
  return (
    <div className="flex gap-1.5">
      <Button message="dancing back">Dance</Button>
      <Button message="jumping back">Jump</Button>
    </div>
  );
}

Button.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CrazyButton;
