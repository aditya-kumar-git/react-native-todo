import { createStore } from "redux"
import allReducers from "./Reducers"

var myStore = createStore(allReducers)

export default myStore
