const INITIAL_STATE = {
  movies: null,
};

export const movieState = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: [...action.payload] };

    default:
      return state;
  }
};
