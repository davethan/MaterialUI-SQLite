export function startGettingPostsData() {
  return dispatch => {
    return fetch('http://localhost:3001/allTheDB/')
    .then(response => response.json())
    .then(data => {
        dispatch(loadPostsData(data)); //trigger the action
    });
  };
}

export function loadPostsData(data) {
  return {
    type: "GET_POSTS_DATA",
    state: data
  };
}

export function startGettingTileData() {
  return dispatch => {
    return fetch('http://localhost:3001/tileImages/')
    .then(response => response.json())
    .then(data => {
        dispatch(loadTileData(data)); //trigger the action
    });
  };
}

export function loadTileData(data) {
  return {
    type: "GET_TILE_DATA",
    state: data
  };
}

export function setStateOfMenu(stateofMenu){
  console.log(stateofMenu)
  return {
    type: "SET_STATE_OF_MENU",
    state: stateofMenu
  }
}
