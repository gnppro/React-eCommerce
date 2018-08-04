import axios from 'axios'

const ADD_TOKEN = 'ADD_TOKEN';
const ITEMS = 'ITEMS';

export const addToken = (token) => ({ type: ADD_TOKEN, payload: token });
export const addDataItems = (data) => ({ type: ITEMS, payload: data });

// export function asyncCallItems(dispatch) {
//     return dispatch 
//     axios.get('https://bedu.safemeet.space/items')
//         .then(({ data })=> {
//             console.log(data);
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
//   }
function asyncCallItems() {
    return dispatch => {
        axios.get('https://bedu.safemeet.space/items')
        .then((res) => {
            let data = res.data
            dispatch(addDataItems(data));
            console.log(addDataItems);
        })
        .catch(function (error) {
        console.log(error);
        });   
    };
  }

const intialState = {
    token: localStorage.getItem('token'),
    data: localStorage.getItem('data'),
}

export default (state = intialState, action) => {
    console.log('state', state);
    console.log('action', action);
    switch (action.type) {
        case ADD_TOKEN:
            localStorage.setItem('token', action.payload);
            return {...state, token: action.payload};
        case ITEMS:
            return { ...state, data: action.payload };
        default:
            return state
    }
}



