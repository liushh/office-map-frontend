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

export function fetchDeskSpaceState(callback, officeId) {
  // axios.get('http://54.245.174.44/desk_space_state')
  //      .then(result => {
  //         callback(JSON.parse(result.request.response).desk_space_state);
  //       });
  // const url = 'http://127.0.0.1:5000/desk_space_state';
  const url = 'http://54.245.174.44/desk_space_state';
  const url_param = {
    params: {
      office_id: officeId
    }
  };
  axios.get(url, url_param)
       .then(result => {
          callback(JSON.parse(result.request.response).desk_space_state);
        });
}

export function createSpace(selectedEmptySpaces, officeId) {
  const url = 'http://127.0.0.1:5000/space';
  axios.post(url, {
            office_id: officeId,
            owner_name: "Liusha",
            owner_id: "owner_id",
            team: "engineering",
            space_type: "employee_desk",
            basic_units: selectedEmptySpaces
        })
       .then(function (response) {
          // console.log(response);
       })
       .catch(function (error) {
          // console.log(error);
       });
  // axios.post('http://54.245.174.44/desk_space_state', {
  //         desk_space_state: state,
  //         office_id: officeId
  //       })
  //      .then(function (response) {
  //         // console.log(response);
  //      })
  //      .catch(function (error) {
  //         // console.log(error);
  //      });
}
