import firebase from '../firebase';

const toFirebase = (state={}, action) => {
  console.log('reducer hit!');
  switch(action.type) {
    case 'STORE':
      firebase.database().ref('newName').push(action.name)
    default:
      return state;
  }
}


export default toFirebase;
