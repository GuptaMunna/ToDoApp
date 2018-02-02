import React, { Component } from 'react';
import { Alert, Text, AppRegistry, Button, StyleSheet, View, Image, ScrollView } from 'react-native';

export default class FlexDimensionsBasics extends Component {
	render() {
		return (
			<ScrollView>
				<Text style={{ fontSize: 24, color: 'black' }}>Scroll me plz</Text>
				<Image
					style={{ height: 300, width: 400, alignItems: 'center' }}
					source={{
						uri:
							'http://content.gulte.com/content/2011/09/photos/actress/Kajal%20Agarwal/normal/Kajal%20Agarwal_175.jpg',
					}}
				/>
				<Image
					style={{ height: 300, width: 400, alignItems: 'center' }}
					source={{
						uri:
							'http://content.gulte.com/content/2011/09/photos/actress/Kajal%20Agarwal/normal/Kajal%20Agarwal_175.jpg',
					}}
				/>
				<Image
					style={{ height: 300, width: 400, alignItems: 'center' }}
					source={{
						uri:
							'http://content.gulte.com/content/2011/09/photos/actress/Kajal%20Agarwal/normal/Kajal%20Agarwal_175.jpg',
					}}
				/>
				<Image
					style={{ height: 300, width: 400, alignItems: 'center' }}
					source={{
						uri:
							'http://content.gulte.com/content/2011/09/photos/actress/Kajal%20Agarwal/normal/Kajal%20Agarwal_175.jpg',
					}}
				/>
				<Image
					style={{ height: 300, width: 400, alignItems: 'center' }}
					source={{
						uri:
							'http://content.gulte.com/content/2011/09/photos/actress/Kajal%20Agarwal/normal/Kajal%20Agarwal_175.jpg',
					}}
				/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	buttonContainer: {
		margin: 20,
	},
	alternativeLayoutButtonContainer: {
		margin: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
AppRegistry.registerComponent('ToDoApp', () => FlexDimensionsBasics);
