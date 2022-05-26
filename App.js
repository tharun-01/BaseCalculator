import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {getContent, inWords} from './utils';

const App = () => {
  const [textInput, setTextInput] = useState('');
  const [inWordsSelected, setInWordsSelected] = useState(false);
  console.log(textInput);
  const content = getContent(textInput);
  console.log(content);
  const changeToWords = () => {
    setInWordsSelected(prev => !prev);
  };
  console.log(inWordsSelected);
  return (
    <View style={styles.backgroundStyle}>
      <TouchableOpacity onPress={changeToWords}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: inWordsSelected ? 'grey' : 'white',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: '700',
              fontWeight: inWordsSelected ? '500' : '700',
            }}>
            Show in Words?
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 50,
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: '700',
            fontSize: 16,
            top: 10,
            paddingRight: 5,
          }}>
          Base Pay:
        </Text>
        <TextInput
          style={styles.baseTextInputBoy}
          keyboardType="numeric"
          textAlign="center"
          onChangeText={setTextInput}
        />
      </View>
      <Text
        style={{
          color: 'white',
          fontSize: 15,
          width: '70%',
          lineHeight: 20,
          marginTop: 10,
        }}>
        {inWords(textInput)}
      </Text>
      <View
        style={{
          marginTop: 50,
          alignItems: 'center',
          paddingHorizontal: 25,
        }}>
        {content.map(item => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingVertical: 20,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '700',
                  fontSize: 20,
                  width: '30%',
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: '600',
                  width: '70%',
                }}>
                {inWordsSelected ? item.amountInWord : item.amount}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  baseTextInputBoy: {
    borderBottomWidth: 1,
    letterSpacing: 10,
    fontSize: 20,
    color: 'white',
    paddingBottom: 5,
    width: '80%',
    borderColor: 'white',
    fontWeight: '700',
  },
});

export default App;
