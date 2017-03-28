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
  axios.get('http://127.0.0.1:5000/desk_space_state')
       .then(result => {
          callback(JSON.parse(result.request.response));
        });
  // axios.get('http://52.24.173.81/desk_space_state')
  //      .then(result => {
  //         callback(JSON.parse(result.request.response));
  //       });
}

export function updateDeskSpaceState(state) {
  // axios.post('http://52.24.173.81/desk_space_state', {
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
