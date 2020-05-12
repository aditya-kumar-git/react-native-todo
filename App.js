import React from "react"
import { Provider } from "react-redux"
import myStore from "./SRC/Redux/Store"
import AppToDo from "./AppToDo"

var App = () => {
	return (
		<Provider store={myStore}>
			<AppToDo />
		</Provider>
	)
}

export default App
