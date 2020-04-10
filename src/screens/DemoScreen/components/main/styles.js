import { StyleSheet } from 'react-native';
import { DROP_ZONE_HEIGHT } from '../../../../utils/Constants';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        marginTop: 32,
        marginVertical: 12,
        textAlign: "center",
        color: "#ffffff",
        fontSize: 24,
        fontWeight: "bold"
    },
    circleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 16,
        marginTop: DROP_ZONE_HEIGHT
    }
});