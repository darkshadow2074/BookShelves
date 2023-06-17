import { createContext, useContext, useReducer } from "react";
import { categoryReducer } from "../reducer/CategoryReducer";
import { categoryInitialState } from "../reducer/initialState";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categoryData, dispatch] = useReducer(
    categoryReducer,
    categoryInitialState
  );
  return (
    <CategoryContext.Provider value={{ categoryData, dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCustomCategoryHook = () => useContext(CategoryContext);
