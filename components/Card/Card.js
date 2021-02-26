import React from 'react';
import propTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
	const { children, style } = props;
	return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
	card: {
		// width: 300,
		// maxWidth: '80%',
		// alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 6,
		shadowOpacity: 0.26,
		backgroundColor: 'white',
		elevation: 5,
		padding: 20,
		borderRadius: 10,
	},
});

Card.propTypes = {
	style: propTypes.object,
};

export default Card;
