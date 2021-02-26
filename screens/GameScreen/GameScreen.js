import React, { useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';
import {
	Button,
	StyleSheet,
	View,
	Text,
	Alert,
	ScrollView,
	FlatList,
} from 'react-native';
import NumberContainer from '../../components/NumberContainer/NumberContainer';
import Card from '../../components/Card/Card';
import globalStyles from '../../constants/globalStyles';
import CustomButton from '../../components/CustomButton/CustomButton';
import { MaterialIcons } from '@expo/vector-icons';

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	const randomNumber = Math.floor(Math.random() * (max - min) + min);
	if (randomNumber === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return randomNumber;
	}
};

const GameScreen = (props) => {
	const initialGuess = generateRandomBetween(1, 100, userChoice);
	const { userChoice, onGameOver } = props;

	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [pastGuesses, setPastGuesses] = useState([initialGuess]);
	const currentLow = useRef(1);
	const currentHigh = useRef(100);
	// Use Effect is executed after the component is rendered
	useEffect(() => {
		if (currentGuess === userChoice) {
			onGameOver(pastGuesses.length);
		}
	}, [currentGuess, userChoice, onGameOver]);

	const nextGuessHandler = (direction) => {
		if (
			(direction === 'lower' && currentGuess < userChoice) ||
			(direction === 'greater' && currentGuess > userChoice)
		) {
			Alert.alert('Misleading', 'You know that this is wrong...', [
				{ text: 'Sorry!', style: 'cancel' },
			]);
			return;
		}
		if (direction === 'lower') {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess + 1;
		}
		const nextNumber = generateRandomBetween(
			currentLow.current,
			currentHigh.current,
			currentGuess
		);
		setCurrentGuess(nextNumber);
		setPastGuesses([nextNumber, ...pastGuesses]);
	};

	return (
		<View style={styles.screen}>
			<Text style={{ ...globalStyles.title }}>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<CustomButton onPress={() => nextGuessHandler('lower')}>
					<MaterialIcons name='remove' size={20} />
				</CustomButton>
				<CustomButton onPress={() => nextGuessHandler('greater')}>
					<MaterialIcons name='add' size={20} />
				</CustomButton>
			</Card>
			<View style={styles.scrollViewContainer}>
				<ScrollView contentContainerStyle={styles.scrollView}>
					{pastGuesses.map((guess, index) => (
						<View style={styles.listItem} key={index}>
							<Text>#{pastGuesses.length - index}</Text>
							<Text>{guess}</Text>
						</View>
					))}
				</ScrollView>
				{/* <FlatList data={pastGuesses} renderItem={} /> */}
			</View>
		</View>
	);
};

GameScreen.propTypes = {
	userChoice: propTypes.number,
	onGameOver: propTypes.func,
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 400,
		maxWidth: '80%',
	},
	scrollViewContainer: {
		marginVertical: 20,
		width: '100%',
		flex: 1,
		justifyContent: 'center',
	},
	scrollView: {
		alignItems: 'center',
	},
	listItem: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		width: '50%',
		borderColor: '#ccc',
		padding: 15,
		marginVertical: 10,
		borderWidth: 1,
		backgroundColor: 'white',
		fontSize: 16,
		borderRadius: 10,
	},
});

export default GameScreen;
