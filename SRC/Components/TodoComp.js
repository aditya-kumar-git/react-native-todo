import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { removeFromList } from "../Redux/Actions"
import { connect } from "react-redux"

var TodoComp = (props) => {
	var [red, setRed] = useState(0)
	var [green, setGreen] = useState(0)
	var [blue, setBlue] = useState(0)

	useEffect(() => {
		setRed(Math.floor(Math.random() * 255 + 1))
		setGreen(Math.floor(Math.random() * 255 + 1))
		setBlue(Math.floor(Math.random() * 255 + 1))
	}, [])
	return (
		<View style={singleStyle.theView}>
			<Text>{props.allDataProp.item}</Text>
			<TouchableOpacity
				onPress={() => {
					props.removeFromList(props.allDataProp.index)
				}}
				style={{
					backgroundColor: `rgb( ${red} , ${green} , ${blue} )`,
					height: 25,
					width: 25,
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 50,
					padding: 0,
				}}
			>
				<MaterialIcons style={singleStyle.deleteIcon} name="delete" />
			</TouchableOpacity>
		</View>
	)
}

var singleStyle = StyleSheet.create({
	theView: {
		backgroundColor: "white",
		marginVertical: 10,
		alignSelf: "center",
		width: "90%",
		paddingVertical: 15,
		paddingHorizontal: 10,
		shadowColor: "black",
		shadowOpacity: 0.2,
		shadowOffset: { height: 5 },
		borderRadius: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	deleteIcon: {
		fontSize: 20,
		color: "white",
	},
})

var mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps, { removeFromList: removeFromList })(
	TodoComp
)
