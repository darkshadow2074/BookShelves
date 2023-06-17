import { BookShelveRoute } from "./BookShelveRoute";
import { Header } from "./Header";

export const BookShelves = () => {
  return (
    <div className="book_shelve_container">
      <Header />
      <BookShelveRoute />
    </div>
  );
};
