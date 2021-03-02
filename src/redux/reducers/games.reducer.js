const INITIAL_STATE = {
  popular: [],
  new: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return state;
  }
};

// Action --> An object that describes what were trying to do
// Dispatch --> Sends our action to the reducer and updates state
// Thunk --> Allows us to use asynchronous code

export default gamesReducer;
