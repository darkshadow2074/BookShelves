export const categoryReducer = (state, action) => {
  switch (action.type) {
    case "currently-reading": {
      return {
        ...state,
        currentlyRead: [...state.currentlyRead, { ...action.payload }],
        wantToRead:
          action.payload.category === "want to read"
            ? state.wantToRead.filter((ele) => ele.id !== action.payload.id)
            : [...state.wantToRead],
        notWantToRead:
          action.payload.category === "none"
            ? state.notWantToRead.filter((ele) => ele.id !== action.payload.id)
            : [...state.notWantToRead],
      };
    }
    case "want to read": {
      return {
        ...state,
        currentlyRead:
          action.payload.category === "currently-reading"
            ? state.currentlyRead.filter((ele) => ele.id !== action.payload.id)
            : [...state.currentlyRead],
        wantToRead: [...state.wantToRead, { ...action.payload }],
        notWantToRead:
          action.payload.category === "none"
            ? state.notWantToRead.filter((ele) => ele.id !== action.payload.id)
            : [...state.notWantToRead],
      };
    }
    case "None": {
      return {
        ...state,
        currentlyRead:
          action.payload.category === "currently-reading"
            ? state.currentlyRead.filter((ele) => ele.id !== action.payload.id)
            : [...state.currentlyRead],
        wantToRead:
          action.payload.category === "want to read"
            ? state.wantToRead.filter((ele) => ele.id !== action.payload.id)
            : [...state.wantToRead],
        notWantToRead: [...state.notWantToRead, { ...action.payload }],
      };
    }
    default: {
    }
  }
};
