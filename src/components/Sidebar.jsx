import React from "react";

import { FaListUl } from "react-icons/fa";
import { categories } from "../constants/list";
import { createQueryObject } from "../helpers/helpers";

function Sidebar({ setQuery, query }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className="border-2 border-blue-600 rounded-lg w-48 ">
      <div className="flex items-center pl-3 py-4 border-b-2 border-blue-600 font-bold">
        <FaListUl />
        <p className="ml-1">Category</p>
      </div>
      <ul onClick={categoryHandler} className="">
        {categories.map((item) => (
          <li
            key={item.id}
            className={`px-3 py-2 border-b border-blue-600 last:border-none flex items-center cursor-pointer hover:bg-blue-300 ${item.type.toLowerCase() === query.category
                ? 'bg-blue-600/70'
                : null}`}
          >
            <img className="mr-1 h-4 " src={item.icon} alt="" />
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
