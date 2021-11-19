import React from "react";

const Inputbar = ({ searchChange }) => {
  return (
    <div className="text-center">
      <label>
        <strong className="logo1"> Wahab Friends </strong>
      </label>
      <br />
      <input
        class="SearchBar"
        type="search"
        placeholder="search"
        onChange={searchChange}
      />
    </div>
  );
};

export default Inputbar;
