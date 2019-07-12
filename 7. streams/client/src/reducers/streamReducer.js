import _ from 'lodash'

export default (state = {}, action) => {
    switch(action.type){
        case 'FETCH_STREAMS':
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case 'FETCH_STREAM':
            return {...state, [action.payload.id]: action.payload };
            // making new state agar fetch karna hai to actions me jo response bheja hai uska id ke sath uska data bhej dia  {id: data}
        case 'CREATE_STREAM':
            return {...state, [action.payload.id]: action.payload };
        case 'EDIT_STREAM':
            return {...state, [action.payload.id]: action.payload };
        case 'DELETE_STREAM':
            return _.omit(state, action.payload);
            // omit already new state me ye actions karta hai toh ...state karne ki zaroorat nahi padhi
        default:
            return state
    }
}