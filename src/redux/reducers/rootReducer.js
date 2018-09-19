import { combineReducers } from 'redux'

const userName = ( state = '', action ) => {

	return ( action.type === "UPDATE_USER_NAME" ) ?
		action.payload :
		state
}

const reducer = combineReducers({
	userName,
});

const rootReducer = (state, action) => {
    return reducer(state, action)
}

export default rootReducer;