import { PixelRatio } from "react-native";

export const FontSize = (size: number) => {
    return PixelRatio.getFontScale() * size;
};

export const FontFamily = {
    RobotoSlabBold: { 'fontFamily': 'Roboto-Bold' },
    RobotoSlabSemiBold: { 'fontFamily': 'Roboto-Medium' },
    RobotoSlabRegular: { 'fontFamily': 'Roboto-Regular' },
    RobotoSlabLight: { 'fontFamily': 'Roboto-Light' },
    PlayfairDisplayBold: { 'fontFamily': 'PlayfairDisplay-Bold' },
    PlayfairDisplaySemiBold: { 'fontFamily': 'PlayfairDisplay-SemiBold' },
    PlayfairDisplayRegular: { 'fontFamily': 'PlayfairDisplay-Medium' },
    PlayfairDisplayLight: { 'fontFamily': 'PlayfairDisplay-Regular' },
}