import { useCallback, useRef } from "react";
import { Animated, Dimensions, Easing, StyleProp, ViewStyle } from "react-native";

export const cardWidth = Math.floor(Math.min(Dimensions.get('screen').width * 0.85, 400));
export const cardMinHeight = Math.floor(Dimensions.get('screen').height * 0.26);
export const cardMaxHeight = Math.floor(Dimensions.get('screen').height * 0.65);
export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;

export const TrollyHandler = (): [Animated.Value, Animated.Value, () => void, (callback: () => void) => void] => {

    const fadeAnim : Animated.Value = useRef(new Animated.Value(0)).current;
    const panAnim : Animated.Value = useRef(new Animated.Value(screenHeight)).current;

    const showSelf = useCallback(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            useNativeDriver: true,
            duration: 350
        }).start();
        Animated.timing(panAnim, {
            toValue: 0,
            useNativeDriver: true,
            duration: 500
        }).start();
    }, [])
    const hideSelf = useCallback((callback: () => void) => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            useNativeDriver: true,
            duration: 350
        }).start();
        Animated.timing(panAnim, {
            toValue: screenHeight,
            useNativeDriver: true,
            duration: 500
        }).start(() => {
            callback();
        });
    }, []);
    return [fadeAnim, panAnim, showSelf, hideSelf];
}

export const CardContainerTools = () => {

    const panAnim: Animated.Value = useRef(new Animated.Value(cardMinHeight)).current;

    const expand = useCallback((callback?: () => void) => {
        Animated.timing(panAnim, { toValue: cardMaxHeight, useNativeDriver: false, duration: 500, easing: Easing.bezier(0, 1.14, .72, 1.02) }).start(() => {
            callback && callback();
        });
    }, []);

    const shrink = useCallback((callback?: () => void) => {
        Animated.timing(panAnim, { toValue: cardMinHeight, useNativeDriver: false, duration: 500, easing: Easing.bezier(0, 1.14, .72, 1.02) }).start(() => {
            callback && callback();
        });
    }, []);
    const containerCardStyle : StyleProp<ViewStyle>|any = {
        backgroundColor: 'white',
        height: panAnim,
        width: cardWidth,
        borderRadius: 24,
    };
    return [containerCardStyle, expand, shrink];
}
