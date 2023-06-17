import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useCustomCategoryHook } from "../context/categoryContext";
export const BookCard = ({ id, title, author, img, category }) => {
  const [showModal, setShowModal] = useState(false);
  const { dispatch } = useCustomCategoryHook();
  const handleActionClick = (val, payloadData) => {
    setShowModal((prevData) => !prevData);
    if (payloadData !== val) dispatch({ type: val, payload: payloadData });
  };
  return (
    <div className="book-card">
      <div className="card">
        <img src={img} alt={title} />
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <div
          className="select-category"
          onClick={() => setShowModal((prevData) => !prevData)}
        >
          <AiFillCaretDown />
          {showModal && (
            <div className="show-action-box-modal">
              <div className="actions">
                <p className="small-title">Move to ...</p>
                <div className="options">
                  <p
                    onClick={() => {
                      setShowModal((prevData) => !prevData);
                      handleActionClick("currently-reading", {
                        id,
                        title,
                        author,
                        img,
                        category,
                      });
                    }}
                  >
                    Currently Reading
                  </p>
                  <p
                    onClick={() => {
                      setShowModal((prevData) => !prevData);
                      handleActionClick("want to read", {
                        id,
                        title,
                        author,
                        img,
                        category,
                      });
                    }}
                  >
                    Want to read
                  </p>
                  <p
                    onClick={() => {
                      setShowModal((prevData) => !prevData);
                      handleActionClick("None", {
                        id,
                        title,
                        author,
                        img,
                        category,
                      });
                    }}
                  >
                    None
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
