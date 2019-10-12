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
