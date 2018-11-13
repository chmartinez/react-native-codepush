/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import codePush from 'react-native-code-push';
import { Button, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
/**
 * EL PASO 6.1 NO FUNCIONO. LA APP NUNCA ME PIDIO HACER UN UPDATE FORZADO
 * https://codeburst.io/react-native-updates-with-vs-app-center-codepush-3d56ef07f1c4
 * VER ESTO!
 */
export default class App extends Component<Props> {
  onPress = () => alert('CodePush is in da house!');

  onCodePushTrigger = () => {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Button title="Check this out!" onPress={this.onPress} />
        <TouchableOpacity onPress={this.onCodePushTrigger}>
          <Text>Check for updates</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
