import React, {Component} from 'react';

import {StyleSheet, View, Image, Button, Platform} from 'react-native';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            imageURL: 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg'
        }
    }
    Load_New_Image = () => {
        this.setState(
            {imageURL: 'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg'}
        )
    }
    render() {
        return (
            <View style={styles.MainContainer}>
                <Image
                    source={{
                        uri: this.state.imageURL
                    }}
                    style={styles.imageStyle}/>
                <Button
                    title="Click Here To Load Image From Different Source"
                    onPress={this.Load_New_Image}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingTop: (Platform.OS) === 'ios'
            ? 20
            : 0,
        margin: 10
    },
    imageStyle: {
        width: 200,
        height: 300,
        resizeMode: 'center'
    }
});