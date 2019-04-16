import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { Input } from 'react-native-elements';


type Props = {};
class signUp extends Component<Props> {


   render() {
    return (
          <View style={styles.container}>
                <Text style={styles.welcome}>Sign Up!</Text>
                <Input
                    placeholder='Email'
                />
                 <View style={{backgroundColor:'#F5FCFF',padding:10}}>
                            </View>
                <Input
                    placeholder='Username'
                        />
                 <View style={{backgroundColor:'#F5FCFF',padding:10}}>
                            </View>
                <Input
                    placeholder='Password'
                 />
                <View style={{backgroundColor:'#F5FCFF',padding:10}}>
                           </View>
                 <Input
                    placeholder='Confirm Password'
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
  welcome: {
    fontSize: 20,
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
    backgroundColor: "#ff8f3a",
    width: 150,
    height: 30,

  }
});
export default signUp
