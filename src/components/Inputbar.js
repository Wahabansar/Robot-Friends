import React from "react";

const Inputbar = ({ searchChange }) => {
  return (
    <div className="text-center">
      <label>
        <strong className="logo1"> Robo Friends </strong>
      </label>
      <br />
      <input
        className="SearchBar"
        type="search"
        placeholder="search"
        onChange={searchChange}
      />
    </div>
  );
};

export default Inputbar;
