import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles';
import PropTypes from 'prop-types';

const DropZone = (props) => {
    const { dropZoneHeight, dropZoneColor } = props;
    return (
        <View style={[styles.dropZone, {
            backgroundColor: dropZoneColor,
            height: dropZoneHeight
        }]}>
            <Text style={styles.heading}>
                Drop circles here to change colors
                </Text>
        </View>
    )
}

DropZone.propTypes = {
    dropZoneHeight: PropTypes.number.isRequired,
    dropZoneColor: PropTypes.string.isRequired
};

DropZone.defaultProps = {
    dropZoneHeight: 200,
    dropZoneColor: '#000000'
};



export default DropZone
