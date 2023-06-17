import { Route, Routes } from "react-router-dom";
import { SearchPage } from "./SearchPage";
import { HomePage } from "./HomePage";

import "./Body.css";
export const BookShelveRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
};
