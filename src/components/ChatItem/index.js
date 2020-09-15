import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from 'theme/Colors';

export default function ChatItem({item}) {
  const {question, answer, style} = item;

  const getAnswer = () => {
    if (style) {
      return new Array(answer.length).fill('*').join('');
    }
    return answer;
  };

  if (!item.user) {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{`${item.supporter}:`}</Text>
        <Text style={styles.text}>{question}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.userName}>{'You:'}</Text>
        <Text style={styles.text}>{getAnswer()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  name: {
    fontSize: 18,
    color: Colors.secondary,
  },
  userName: {
    fontSize: 18,
    color: Colors.primary,
  },
  text: {
    color: Colors.text,
  },
});
