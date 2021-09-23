import React, { FunctionComponent, useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { App } from './screensSettings';



type BarProps = {
  backgroundColor: string
};

const MyStatusBar: FunctionComponent<BarProps> = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={'#e0e0e0'} {...props} />
    </SafeAreaView>
  </View>
);




export default () => {

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar backgroundColor={'#ababab'} />
      <View style={{ flex: 1 }}>
          <App />
      </View>
    </View>
  );
};

export const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

