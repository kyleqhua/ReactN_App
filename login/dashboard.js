import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { Input } from 'react-native-elements';
import { Card} from 'react-native-elements';
import {Modal,TouchableHighlight, Alert} from 'react-native';



type Props = {};
class dashboard extends Component<Props> {

 constructor(props) {
    super(props);
    this.state = {
        modalVisible: false,
      };
     }

      setModalVisible(visible) {
         this.setState({modalVisible: visible});
       }

    dialogue() {
        if (this.state.dialogueBcx) {
                return (
                    <Card>
                        <Input placeholder = "Send us a message!" />
                        <View style={{backgroundColor:'#F5FCFF',padding:10}}>
                                    </View>
                        <Button
                            title = "Submit"
                            buttonStyle = {styles.buttons}
                            onPress
                                 />
                    </Card>
                  );
          }
    }

   render() {
    return (
           <View style={styles.container}>
                <Modal
                         animationType="slide"
                         transparent={false}
                         visible={this.state.modalVisible}
                         onRequestClose={() => {
                           Alert.alert('Modal has been closed.');
                         }}>
                        <View style={styles.container}>
                           <Card>
                               <Input placeholder = "Send us a message!" />
                               <View style={{backgroundColor:'#F5FCFF',padding:10}}>
                                           </View>
                               <Button
                                   title = "Submit"
                                   buttonStyle = {styles.buttons}
                                  onPress={() => {
                                                  this.setModalVisible(!this.state.modalVisible);
                                                }}
                                        />
                           </Card>
                         </View>
                       </Modal>
               <View style={styles.backcontainer}>
                             <Button
                                title = "Back"
                                buttonStyle = {styles.backbutton}
                                     />
                                </View>
               <Text style={styles.welcome}>Welcome person@gmail.com!</Text>
               <Card>
                     <Text style={styles.cardText}>
                         You have 100000 pesos.
                     </Text>
                     <Button
                         buttonStyle={{ backgroundColor:'#818EEA', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                         title='Withdraw'
                         onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                  }}
                          />
               </Card>
                <View style={{backgroundColor:'#F5FCFF',padding:210}}>
                                           </View>
               <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'space-between',}}>
                <Button
                    buttonStyle={styles.supportbutton}
                    title='Support'
                    onPress={() => {
                         this.setModalVisible(!this.state.modalVisible);
                       }}/>
                </View >
           </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'stretch',
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
export default dashboard
