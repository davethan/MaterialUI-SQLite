export function startGettingPostsData() {
  return dispatch => {
    return fetch('http://localhost:3001/allPosts/')
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
        dispatch(loadTileData(data));
    });
  };
}

export function loadTileData(data) {
  return {
    type: "GET_TILE_DATA",
    state: data
  };
}

export function startGettingMusicPostsData() {
  return dispatch => {
    return fetch('http://localhost:3001/allMusicPosts/')
    .then(response => response.json())
    .then(data => {
        dispatch(loadMusicPostsData(data));
    });
  };
}

export function loadMusicPostsData(data) {
  return {
    type: "GET_MUSIC_POSTS_DATA",
    state: data
  };
}

export function startDeletingPost(postId) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      const formData = new FormData();
      formData.append("postId", postId);

      req.open("POST", "http://localhost:3001/delete");
      req.send(formData);
    });
  };
}

export function setStateOfMenu(stateofMenu){
  return {
    type: "SET_STATE_OF_MENU",
    state: stateofMenu
  }
}
