import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2 tc">
      <input
        className="pa3 ba b--red bg-white-20 tc"
        type="search"
        placeholder="search fund name"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
