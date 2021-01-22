import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import * as Speech from 'expo-speech';

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      text: ''
    }
  }
  render(){
    return(
      <View>
        <Text>Please type in the text you want as speech.</Text>
        <TextInput 
        value= {this.state.text}
        onChangeText={(text)=>{
          this.setState({text: text})
        }}/>
        <TouchableOpacity onPress={()=>{
          this.speak(this.state.text)
        }}>
          <Text> Text to speech </Text>
        </TouchableOpacity>
      </View>
    )
  }
  speak=()=>{
    Speech.speak(this.state.text);
  }
}
