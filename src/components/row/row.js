import React from 'react';
import propTypes from "prop-types";
import './row.css';

const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  );
};

Row.propTypes = {
  left: propTypes.node,
  right: propTypes.node
}

export default Row;
