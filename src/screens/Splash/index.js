import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Colors from 'theme/Colors';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => navigation.navigate('ChatScreen'), 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat App Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.text,
    fontSize: 35,
  },
});
