// Setting up initial search term as empty
const initialState = "";

// SLICE OBJECT // Defining possible actions in reducer
const searchTermReducer = (state = initialState, action) => {
  switch (action.type) {
    // Setting search term based on what's typed
    case "searchTerm/setSearchTerm":
      return action.payload;
    // Clearing search term
    case "searchTerm/clearSearchTerm":
      return "";
    // Always return search content
    default:
      return state;
  }
};

// SELECTORS //
export function setSearchTerm(term) {
  return {
    type: "searchTerm/setSearchTerm",
    payload: term,
  };
}

export function clearSearchTerm() {
  return {
    type: "searchTerm/clearSearchTerm",
  };
}

// Retrieving the search term slice
export const selectSearchTerm = (state) => state.searchTerm;

export default searchTermReducer;
