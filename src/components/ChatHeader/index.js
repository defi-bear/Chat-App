import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Colors from 'theme/Colors';

export default function ChatHeader({name, avatar_url}) {
  return (
    <View style={styles.main}>
      <Image
        source={{uri: avatar_url}}
        style={styles.avatarImg}
        resizeMode="contain"
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.header,
  },
  avatarImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    color: Colors.secondary,
  },
});
