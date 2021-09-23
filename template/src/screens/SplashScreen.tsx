import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { FontSize } from '../utils/TextFonts';

type Props = {
    navigation: NavigationScreenProp<any, any>
};

const SplashScreen: FunctionComponent<Props> = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Splash Screen</Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: FontSize(40)
    }
})