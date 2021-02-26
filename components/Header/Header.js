import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import Colors from '../../constants/colors';
import globalStyles from '../../constants/globalStyles';

const Header = (props) => {
	const { title } = props;

	return (
		<View style={styles.header}>
			<Text style={{ ...styles.headerTitle, ...globalStyles.title }}>
				{title}
			</Text>
		</View>
	);
};

Header.propTypes = {
	title: propTypes.string.isRequired,
};

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 80,
		paddingTop: 26,
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		color: '#000',
		fontSize: 18,
	},
});

export default Header;
