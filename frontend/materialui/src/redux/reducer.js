const initialState = 1; //initializing the state

const changeANumber = function changeTheThingIWant(
  state = initialState,
  action
) {
  switch (action.type) {
    case "ACTION1":
      return (state = action.state);
    default:
      return state;
  }
};

export default changeANumber;
