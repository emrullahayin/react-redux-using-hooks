const initialState = {
  counter: 0
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: ++state.counter };
    case "DECREMENT":
      return { counter: --state.counter };
    default:
      return state;
  }
}

export default rootReducer;
