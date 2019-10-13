import { combineReducers } from "redux";

const initialState = null; //initializing the state

const getPostsDataReducer = function getPostsData(
  postsData = initialState,
  action
) {
  switch (action.type) {
    case "GET_POSTS_DATA":
      return (postsData = action.state);
    default:
      return postsData;
  }
};

const getTileDataReducer = function getTileData(
  tileData = initialState,
  action
) {
  switch (action.type) {
    case "GET_TILE_DATA":
      return (tileData = action.state);
    default:
      return tileData;
  }
};

const rootReducer = combineReducers({
  getPostsDataReducer,
  getTileDataReducer
});
export default rootReducer;
