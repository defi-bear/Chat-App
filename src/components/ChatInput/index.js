import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import Colors from 'theme/Colors';
import sendImg from 'images/send.png';

export default function ChatInput({onSend, step}) {
  const [chatText, setChatText] = useState('');
  const [errorText, setErrorText] = useState('');
  if (!step) {
    return null;
  }
  const {validation, paths, style} = step;

  const handleSend = () => {
    if (Array.isArray(validation)) {
      if (validation.indexOf(chatText) === -1) {
        setErrorText('Please input one of ' + validation.join(', '));
      } else {
        if (typeof paths === 'object') {
          send(paths[chatText]);
        } else {
          send(paths);
        }
      }
    } else if (typeof validation === 'string') {
      if (!chatText.match(new RegExp(validation))) {
        setErrorText('Please input the correct value');
      } else {
        send(paths);
      }
    } else {
      send(paths);
    }
  };

  const send = (path) => {
    setErrorText('');
    onSend(chatText, path);
    setChatText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={chatText}
          style={styles.input}
          editable={!!validation}
          secureTextEntry={style === 'password'}
          autoCapitalize="none"
          placeholder="Type here..."
          onChangeText={(text) => {
            setChatText(text);
            setErrorText('');
          }}
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Image source={sendImg} style={styles.sendImg} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: Colors.header,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: Colors.border,
    height: 60,
    paddingHorizontal: 15,
    paddingBottom: 20,
    marginRight: 10,
    flex: 1,
  },
  button: {
    width: 90,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    shadowOpacity: 5,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'rgba(79,147,254,0.4)',
    elevation: 2,
  },
  errorText: {
    color: Colors.error,
    marginTop: 5,
  },
  sendImg: {
    width: 25,
    height: 25,
  },
});
