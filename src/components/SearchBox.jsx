import React, { useEffect } from "react";

import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helpers/helpers";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = (e) => {
    e.preventDefault()
    setQuery((query) => createQueryObject(query, { search }));
  };

  useEffect(() => {
    if(search === ""){
      setQuery((query) => createQueryObject(query, { search }));
    }
  }, [search])

  return (
    <form action="" onSubmit={searchHandler}>
      <div className="w-[350px] flex ml-10">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
          className=" w-full p-2 outline-none rounded-s border-2 border-blue-600"
        />
        <button
          type="submit"
          className="bg-blue-600 p-2 px-3 text-white rounded-e"
        >
          <ImSearch />
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
