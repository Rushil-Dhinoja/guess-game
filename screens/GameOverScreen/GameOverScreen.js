import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import globalStyles from '../../constants/globalStyles';
import colors from '../../constants/colors';
import CustomButton from '../../components/CustomButton/CustomButton';
const GameOverScreen = (props) => {
	const { roundsNumber, userNumber, resetGame } = props;

	return (
		<View style={styles.screen}>
			<Text style={globalStyles.title}>The Game is Over</Text>
			<Image
				style={styles.image}
				source={require('../../assets/success.png')}
			/>
			{/* For Linking web image 
			<Image
				style={styles.image}
				source={{uri: link}}
			/> */}
			<Text style={{ ...globalStyles.bodyText, ...styles.lastText }}>
				Your Phone needed{' '}
				<Text style={styles.highlightText}>{roundsNumber}</Text> to guess the
				number <Text style={styles.highlightText}>{userNumber}</Text>
			</Text>

			<CustomButton onPress={resetGame}>NEW GAME</CustomButton>
		</View>
	);
};

GameOverScreen.propTypes = {
	roundsNumber: propTypes.number,
	userNumber: propTypes.number,
	resetGame: propTypes.func,
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 250,
		height: 250,
		borderRadius: 500,
		marginVertical: 10,
	},
	lastText: {
		marginBottom: 10,
		fontSize: 16,
		width: '80%',
		textAlign: 'center',
	},
	highlightText: {
		color: colors.primary,
		fontFamily: 'open-sans',
	},
});

export default GameOverScreen;
