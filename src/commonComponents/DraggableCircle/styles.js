import { StyleSheet } from 'react-native';
import { CIRCLE_RADIUS } from '../../utils/Constants';

export default StyleSheet.create({
    circle: {
        backgroundColor: "skyblue",
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS,
        alignItems: 'center',
        justifyContent: 'center'
    }
});