const initialState = null; //initializing the state

const changeANumber = function changeTheThingIWant(
  state = initialState,
  action
) {
  switch (action.type) {
    case "GET_POSTS_DATA":
      return (state = action.state);
    default:
      return state;
  }
};

export default changeANumber;
