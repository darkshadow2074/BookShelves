import { AiOutlineArrowLeft } from "react-icons/ai";
import { books } from "../db/db";
import { BookCard } from "./BookCard";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const SearchPage = () => {
  const [input, setInput] = useState("");
  const [data, setList] = useState([]);
  const handleSearchChange = (e) => {
    setList(
      books.filter(
        (ele) =>
          ele.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          ele.author.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  return (
    <div className="searchpage-container">
      <div className="search">
        <NavLink to="/">
          <AiOutlineArrowLeft />
        </NavLink>
        <input onChange={handleSearchChange} type="text" />
      </div>
      {data.length > 0 && (
        <div className="list">
          {data.map((ele) => (
            <BookCard key={ele.id} {...ele} />
          ))}
        </div>
      )}
    </div>
  );
};
