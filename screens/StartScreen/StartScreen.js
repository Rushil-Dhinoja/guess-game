import React, { useState } from 'react';
import propTypes from 'prop-types';
import {
	View,
	StyleSheet,
	Text,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';
import Card from '../../components/Card/Card';
import Colors from '../../constants/colors';
import Input from '../../components/Input/Input';
import NumberContainer from '../../components/NumberContainer/NumberContainer';
import globalStyles from '../../constants/globalStyles';
import CustomButton from '../../components/CustomButton/CustomButton';

const StartScreen = (props) => {
	const { onStartGame } = props;

	const [enteredValue, setEnteredValue] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();

	const numberInputHandler = (inputText) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''));
	};

	const closeKeyboard = () => {
		Keyboard.dismiss();
	};

	const resetInputValue = () => {
		setEnteredValue('');
		setConfirmed(false);
	};

	const confirmInputHandler = () => {
		const chosenNumber = +enteredValue;
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Invalid Number',
				'Number has to be number between 1 and 99',
				[{ text: 'Okay', style: 'destructive', onPress: resetInputValue }]
			);
			return;
		}
		console.log('here');
		setConfirmed(true);
		setSelectedNumber(chosenNumber);
		setEnteredValue('');
		Keyboard.dismiss();
	};

	let confirmedOutput;
	if (confirmed) {
		confirmedOutput = (
			<Card style={styles.summaryContainer}>
				<Text style={globalStyles.bodyText}>You Selected</Text>
				<NumberContainer>{selectedNumber}</NumberContainer>
				<CustomButton onPress={() => onStartGame(selectedNumber)}>
					START GAME
				</CustomButton>
			</Card>
		);
	}

	return (
		<TouchableWithoutFeedback onPress={closeKeyboard}>
			<View style={styles.screen}>
				<Text style={{ ...styles.title, ...globalStyles.title }}>
					Start a New Game
				</Text>
				<Card style={styles.inputContainer}>
					<Text style={globalStyles.bodyText}>Select a Number</Text>
					<Input
						blurOnSubmit
						keyboardType='number-pad'
						maxLength={2}
						style={styles.input}
						onChangeText={numberInputHandler}
						value={enteredValue}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button
								title='Reset'
								onPress={() => resetInputValue()}
								color={Colors.accent}
							/>
						</View>
						<View style={styles.button}>
							<Button
								title='Confirm'
								onPress={() => confirmInputHandler()}
								color={Colors.primary}
							/>
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
	);
};

StartScreen.propTypes = {
	onStartGame: propTypes.func,
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingTop: 10,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
	},

	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	button: {
		width: 100,
	},
	input: {
		width: 50,
		textAlign: 'center',
	},
	summaryContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
});

export default StartScreen;
