import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, TextInput } from 'react-native';

const Input = (props) => {
	const { style } = props;

	return <TextInput {...props} style={{ ...styles.input, ...style }} />;
};

Input.propTypes = {
	style: propTypes.object,
	blurOnSubmit: propTypes.bool,
	keyboard: propTypes.string,
	maxLength: propTypes.number,
	onChangeText: propTypes.func,
	value: propTypes.string,
};

const styles = StyleSheet.create({
	input: {
		height: 30,
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		marginVertical: 10,
	},
});

export default Input;
