import React, { Component } from 'react'
import { SafeAreaView, StatusBar, Text } from 'react-native';
import DemoScreen from './screens/DemoScreen/components/main';

class App extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <DemoScreen />
                </SafeAreaView>
            </>
        )
    }
}

export default App
