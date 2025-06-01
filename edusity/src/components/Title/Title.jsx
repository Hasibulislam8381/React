import React from "react";
import PropTypes from "prop-types";
function Title({ subtitle, title }) {
  return (
    <div className="text-center mb-10">
      <p className="text-sm text-gray-500 uppercase tracking-widest">
        {subtitle}
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
        {title}
      </h1>
    </div>
  );
}

Title.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
