/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { Input } from 'react-native-elements';
import signUp from './signUp';

type Props = {};
class App extends Component<Props> {


   render() {
    return (
      <View  style={styles.container} >
        <Text style={styles.welcome}>Welcome!</Text>
        <Button
          title = "Log In"
          buttonStyle = {styles.buttons}
        />
         <View style={{backgroundColor:'#F5FCFF',padding:10}}>
            </View>
        <Button
          title = "Sign Up"
          buttonStyle = {styles.buttons}
             />
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
  backcontainer: {
     //flex: 1,
     justifyContent: 'center',
     alignItems: 'flex-start',
     backgroundColor: '#F5FCFF',
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  },
  cardText: {
      fontSize: 15,
      textAlign: 'center',
      margin: 10,
      color: '#000000',
    },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttons: {
    backgroundColor: "#38DFCD",
    width: 150,
    height: 30,
  },
  backbutton: {
      backgroundColor: "#4A8FBC",
      width: 150,
      height: 30,
    },
  supportbutton: {
        backgroundColor: "#4A8FBC",
        alignSelf: 'flex-end',
        width: 150,
        height: 30,
      },
});
export default App
