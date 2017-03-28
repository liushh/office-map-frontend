import axios from 'axios';


export function updateArrayElement(array, element) {
  return array.map((item) => {
    if (item.id !== element.id) {
      return item;
    }
    return {
      ...item,
      ...element
    }
  });
}

export function fetchDeskSpaceState(callback) {
  axios.get('http://54.245.174.44/desk_space_state')
       .then(result => {
          callback(JSON.parse(result.request.response).desk_space_state);
        });
  // axios.get('http://54.69.220.17/desk_space_state')
  //      .then(result => {
  //         callback(JSON.parse(result.request.response));
  //       });
}

export function updateDeskSpaceState(state) {
  // axios.post('http://54.69.220.17/desk_space_state', {
  //         desk_space_state: state,
  //       })
  //      .then(function (response) {
  //         // console.log(response);
  //      })
  //      .catch(function (error) {
  //         // console.log(error);
  //      });
  axios.post('http://127.0.0.1:5000/desk_space_state', {
          desk_space_state: state,
        })
       .then(function (response) {
          // console.log(response);
       })
       .catch(function (error) {
          // console.log(error);
       });
}
