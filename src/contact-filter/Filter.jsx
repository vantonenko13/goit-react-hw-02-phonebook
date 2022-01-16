import React from "react";

import PropTypes from "prop-types";

const Filter = ({ value, onChangeHandler }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" name="filter" value={value} onChange={onChangeHandler} />
      </label>
    </div>
  );
};

Filter.propTypes = { value: PropTypes.string, onChangeHandler: PropTypes.func.isRequired };

export default Filter;
