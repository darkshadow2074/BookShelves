import { useCustomCategoryHook } from "../context/categoryContext";
import { BookCard } from "./BookCard";

export const HomePage = () => {
  const { categoryData } = useCustomCategoryHook();
  return (
    <div className="homepage">
      <div className="currently-reading-container">
        <h1>Currently Reading</h1>
        <div className="category-data">
          {categoryData?.currentlyRead.map((ele) => (
            <BookCard key={ele.id} {...ele} />
          ))}
        </div>
      </div>
      <div className="want-to-read-container">
        <h1>Want To Read</h1>
        <div className="category-data">
          {categoryData?.wantToRead.map((ele) => (
            <BookCard key={ele.id} {...ele} />
          ))}
        </div>
      </div>
    </div>
  );
};
