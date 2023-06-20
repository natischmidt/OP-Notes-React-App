import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';


const MyButton = ({ onPress, style, text }) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

MyButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
};


export default MyButton;