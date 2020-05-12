import React, { useEffect, useState } from "react"
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TextInput,
	TouchableOpacity,
	FlatList,
	Keyboard,
	SafeAreaView,
} from "react-native"
import { connect } from "react-redux"
import { textValue, addToList } from "./SRC/Redux/Actions"
import TodoComp from "./SRC/Components/TodoComp"

var AppToDo = (props) => {
	var [date, setDate] = useState(null)
	var [month, setMonth] = useState(null)

	var engMonths = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"July",
		"Aug",
		"Sept",
		"Oct",
		"Nov",
		"Dec",
	]

	useEffect(() => {
		var today = new Date()
		var dateEff = today.getDate()
		var monthEff = today.getMonth()
		setDate(dateEff)

		engMonths.map((x, y) => {
			if (y === monthEff) {
				setMonth(x)
			}
		})
	}, [])

	return (
		<SafeAreaView style={todoStyle.container}>
			<StatusBar barStyle="dark-content" />

			<View style={todoStyle.titleView}>
				<Text style={{ fontWeight: "100", marginTop: 20, letterSpacing: 8 }}>
					{date},{month}
				</Text>
				<Text style={{ fontSize: 35, fontWeight: "bold", marginTop: 10 }}>
					To-Do List
				</Text>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						paddingVertical: 5,
						marginTop: 20,
					}}
				>
					<TextInput
						keyboardType="web-search"
						style={todoStyle.textInput}
						value={props.inputValue}
						onChangeText={(x) => {
							props.textValue(x)
						}}
						onSubmitEditing={(x) => {
							if (x.nativeEvent.text !== "") {
								props.addToList(x.nativeEvent.text)
								props.textValue("")
							}
						}}
					/>

					<TouchableOpacity
						onPress={() => {
							if (props.inputValue !== "") {
								props.addToList(props.inputValue)
								props.textValue("")
								Keyboard.dismiss()
							}
						}}
						style={todoStyle.addButton}
					>
						<Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
							+
						</Text>
					</TouchableOpacity>
				</View>
			</View>

			<FlatList
				showsVerticalScrollIndicator={false}
				data={props.todoList}
				keyExtractor={(x, y) => {
					return "" + y
				}}
				renderItem={(data) => {
					return <TodoComp allDataProp={data} />
				}}
			/>
		</SafeAreaView>
	)
}

const todoStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	titleView: {
		backgroundColor: "white",
		shadowOffset: { width: 1, height: 5 },
		shadowColor: "black",
		shadowOpacity: 0.2,
		paddingVertical: 20,
		paddingHorizontal: "5%",
		marginBottom: 11,
	},
	textInput: {
		borderColor: "black",
		borderWidth: 1,
		height: 40,
		width: "80%",
		borderRadius: 20,
		paddingHorizontal: 15,
	},
	addButton: {
		backgroundColor: "#00c6ff",
		height: 40,
		width: 40,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
		padding: 0,
	},
})

var mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps, {
	textValue: textValue,
	addToList: addToList,
})(AppToDo)
