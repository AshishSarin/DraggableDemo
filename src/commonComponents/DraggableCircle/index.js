import React, { Component } from "react";
import { PanResponder, Animated, Text } from "react-native";
import Utils from "../../utils/Utils";
import styles from './styles';

export default class DraggableCircle extends Component {

    constructor(props) {
        super(props)
        let randomColor = Utils.getRandomColor();
        this.state = {
            circelPan: new Animated.ValueXY(),
            circleColor: randomColor
        };
        this.initPanReponder();
    }

    initPanReponder() {
        this.panValue = { x: 0, y: 0 }
        this.state.circelPan.addListener((value) => this.panValue = value);

        this.circlePanResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onPanResponderMove: (e, gestureState) => {
                Animated.event([
                    null,
                    {
                        dx: this.state.circelPan.x,
                        dy: this.state.circelPan.y
                    }
                ], {useNativeDriver: false})(e, gestureState);
            },

            onPanResponderRelease: (e, gesture) => {
                if (this.isCircleInDropArea(gesture)) {
                    this.interChangeColor();
                }
                this.moveToInitialPosition();
            }
        });
        this.state.circelPan.setValue({ x: 0, y: 0 })
    }

    interChangeColor = () => {
        let prevCircleColor = this.state.circleColor;
        this.setState({
            circleColor: this.props.dropZoneColor
        }, () => {
            this.props.onReleasedOnDropZone?.(prevCircleColor);
        }
        );
    }

    moveToInitialPosition = () => {
        Animated.spring(this.state.circelPan, {
            useNativeDriver: true,
            toValue: { x: 0, y: 0 },
            friction: 6,
        }).start();
    }

    isCircleInDropArea(gesture) {
        const { dropZoneHeight } = this.props;
        return gesture.moveY < dropZoneHeight;
    }

    render() {
        const circelPanStyle = {
            transform: this.state.circelPan.getTranslateTransform()
        }
        return (
            <Animated.View
                {...this.circlePanResponder.panHandlers}
                style={[circelPanStyle, styles.circle,
                    {
                        backgroundColor: this.state.circleColor
                    }
                ]} >
                <Text>
                    {this.props?.label || ""}
                </Text>
            </Animated.View>
        );
    }
}
