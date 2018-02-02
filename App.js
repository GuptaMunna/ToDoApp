import React from 'react';
import { StyleSheet, TextInput, Text, View, ScrollView, Button } from 'react-native';
import Note from './components/notes';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			noteArray: [],
			noteText: '',
		};
	}

	render() {
		let notes = this.state.noteArray.map((val, key) => {
			return <Note key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key)} />;
		});

		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>- NOTER -</Text>
				</View>
				<ScrollView style={styles.scrollContainer}>{notes}</ScrollView>

				<View style={styles.footer} />
				<Button title="Add" style={styles.addButton} onPress={() => {}} />
			</View>
		);
	}
	deleteNote(key) {
		this.state.noteArray.splice(key, 1);
		this.setState({ noteArray: this.state.noteArray });
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		backgroundColor: '#E91E63',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 5,
		borderBottomColor: '#ddd',
	},
	scrollContainer: {
		flex: 1,
		marginBottom: 100,
	},

	headerText: {
		color: 'white',
		fontSize: 18,
		padding: 26,
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 10,
	},
	addButton: {
		position: 'absolute',
		zIndex: 11,
		right: 20,
		bottom: 0,
		backgroundColor: '#E91E63',
		width: 70,
		height: 70,
		borderRadius: 35,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 8,
	},
	textInput: {
		alignSelf: 'stretch',
		color: '#fff',
		padding: 20,
		right: 80,
		backgroundColor: '#252525',
		borderTopWidth: 2,
		borderTopColor: '#ededed',
	},
});
