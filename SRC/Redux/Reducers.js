import { combineReducers } from "redux"

var one = () => {
	return 1
}

var todoList = (iniState = ["Trial", "Trial TWO"], action) => {
	switch (action.type) {
		case "ADD": {
			return [...iniState, action.payload]
		}
		case "REMOVE": {
			return iniState.filter((item, index) => {
				return index !== action.payload
			})
		}
		default: {
			return iniState
		}
	}
}

var inputValue = (iniState = "", action) => {
	switch (action.type) {
		case "TEXT_VAL": {
			return action.payload
		}
		default: {
			return iniState
		}
	}
}

var allReducers = combineReducers({
	one: one,
	todoList: todoList,
	inputValue: inputValue,
})
export default allReducers
