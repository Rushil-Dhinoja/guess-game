import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import Header from './components/Header/Header';
import StartScreen from './screens/StartScreen/StartScreen';
import GameScreen from './screens/GameScreen/GameScreen';
import GameOverScreen from './screens/GameOverScreen/GameOverScreen';

function App() {
	const [userNumber, setUserNumber] = useState();
	const [guessRounds, setGuessRounds] = useState(0);

	const [loaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});

	if (!loaded) {
		return null;
	}

	const configureNewGame = () => {
		setGuessRounds(0);
		setUserNumber(null);
	};

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};

	const gameOverHandler = (numOfRounds) => {
		console.log(numOfRounds);
		console.log('here');
		setGuessRounds(numOfRounds);
	};

	let content = <StartScreen onStartGame={startGameHandler} />;
	if (userNumber && guessRounds <= 0) {
		content = (
			<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
		);
	} else if (guessRounds > 0) {
		content = (
			<GameOverScreen
				userNumber={userNumber}
				roundsNumber={guessRounds}
				resetGame={configureNewGame}
			/>
		);
	}
	return (
		<View style={styles.container}>
			<StatusBar style='light' />
			<Header title='Gusess a Number' />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
export default App;
