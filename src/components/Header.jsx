import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import "./Header.css";
export const Header = () => {
  return (
    <div className="navbar">
      <div className="title">Book Shelves</div>
      <div className="search-link">
        <NavLink to="/search">
          <AiOutlineSearch />
          Explore
        </NavLink>
      </div>
    </div>
  );
};
