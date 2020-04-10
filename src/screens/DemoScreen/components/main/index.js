import React, { Component } from "react";
import { View } from "react-native";
import DraggableCircle from "../../../../commonComponents/DraggableCircle";
import Utils from "../../../../utils/Utils";
import DropZone from "../DropZone";
import styles from './styles';
import { DROP_ZONE_HEIGHT } from "../../../../utils/Constants";

export default class DemoScreen extends Component {

    constructor(props) {
        super(props);
        let randomColor = Utils.getRandomColor();
        this.state = {
            dropZoneColor: randomColor
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <DropZone
                    dropZoneHeight={DROP_ZONE_HEIGHT}
                    dropZoneColor={this.state.dropZoneColor}
                />
                {this.renderCircles()}
            </View>
        );
    }

    renderCircles = () => {
        let circleArray = [1, 2, 3];
        return (
            <View style={styles.circleContainer}>
                {
                    circleArray.map((item, index) => this.renderCircle(item, index))
                }
            </View>
        );
    }

    renderCircle = (item, index) => {
        return (
            <DraggableCircle
                key={`${String(index)}`}
                label={item}
                dropZoneColor={this.state.dropZoneColor}
                onReleasedOnDropZone={this.onReleasedOnDropZone}
                dropZoneHeight={DROP_ZONE_HEIGHT} />
        )
    }

    onReleasedOnDropZone = (circleColor) => {
        this.setState({
            dropZoneColor: circleColor
        });
    }
}

