import { combineReducers } from "redux";

const getPostsDataReducer = function getPostsData(
  postsData = null,
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
  tileData = null,
  action
) {
  switch (action.type) {
    case "GET_TILE_DATA":
      return (tileData = action.state);
    default:
      return tileData;
  }
};

const getMusicPostsDataReducer = function getMusicPostsData(
  musicPostData = null,
  action
) {
  switch (action.type) {
    case "GET_MUSIC_POSTS_DATA":
      return (musicPostData = action.state);
    default:
      return musicPostData;
  }
};

const stateOfMenuReducer = function setStateOfMenu(
  stateofMenu = false,
  action
){
  switch (action.type) {
    case "SET_STATE_OF_MENU":
      return (stateofMenu = action.state)
    default:
      return stateofMenu
  }
}

const rootReducer = combineReducers({
  getPostsDataReducer,
  getTileDataReducer,
  getMusicPostsDataReducer,
  stateOfMenuReducer
});
export default rootReducer;
