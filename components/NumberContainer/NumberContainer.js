import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';
import globalStyles from '../../constants/globalStyles';
const NumberContainer = (props) => {
	const { children } = props;
	return (
		<View style={styles.container}>
			<Text style={{ ...styles.number, ...globalStyles.bodyText }}>
				{children}
			</Text>
		</View>
	);
};

NumberContainer.propTypes = {};

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: Colors.accent,
		padding: 10,
		borderRadius: 10,
		marginVertical: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	number: {
		color: Colors.accent,
		fontSize: 22,
	},
});

export default NumberContainer;
