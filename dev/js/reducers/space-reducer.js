import {
  createNewSpace
} from '../resources/index'

export default function (state=null, action) {
  switch(action.type) {
    case 'CREATE_NEW_SPACE':
      createNewSpace(action.payload)
  }
  return state;
}
