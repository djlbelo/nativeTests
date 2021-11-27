/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  Button,
  FlatList,
  Pressable,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {

  const [name, setName] = useState(' ');
  const [submitted, setSubmited] = useState(false)
  const onPressHandler = () => {
    setSubmited(!submitted);
  };
 
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Insira o seu nome: 
      </Text>
      <TextInput
        //multiline
        style={styles.input}
        placeholder = 'e.g Duarte'
        onChangeText = {(value) => setName(value)}
        /* //para passwords
        secureTextEntry */
      />

      {/* <Button
        color = '#DAF'
        title = {submitted ? 'Limpar' : 'Submeter'}
        onPress = {onPressHandler}
        disabled = {submitted}
      />  */}

      {/* <TouchableOpacity
        onPress = {onPressHandler}
        style={styles.button}
        activeOpacity = {0.5}
      >
        <Text style={styles.text}>
          {submitted ?
            'Limpar'
            : 
            'Submeter'
          }
        </Text>
      </TouchableOpacity> */}

      <Pressable
        onPress = {onPressHandler}
        //onLongPress = {onPressHandler}
        android_ripple = {{color: '#DAF7A6'}}
        style={({ pressed }) => [
          {backgroundColor: pressed ? '#ddd' : '#DAF'},
        ]}
      >
        <Text style={styles.text}>
          {submitted ?
            'Limpar'
            : 
            'Submeter'
          }
        </Text>
      </Pressable>
      {submitted ?
        <Text style={styles.text}>
          Estás registado como: {name}
        </Text>
        :
        null
      }
    </View>
  )
};


const styles = StyleSheet.create({
 body: {
   flex:1,
   backgroundColor: '#fff',
   alignItems: 'center'
 },
 text: {
  color:'#000',
  fontSize: 20,
  margin: 10,
 },
 input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#DAB',
    borderRadius: 5,
    margin: 10,
 },
 button: {
   backgroundColor: '#DAF',
   width: 150,
   height: 50,
   alignItems: 'center',
 }
});

export default App;
