export var textValue = (value) => {
	return { type: "TEXT_VAL", payload: value }
}

export var addToList = (valueAdd) => {
	return { type: "ADD", payload: valueAdd }
}

export var removeFromList = (valueRemoved) => {
	return { type: "REMOVE", payload: valueRemoved }
}
