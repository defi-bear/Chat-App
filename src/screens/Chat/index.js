import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, Alert} from 'react-native';

import ChatHeader from 'components/ChatHeader';
import ChatContainer from 'components/ChatContainer';
import {getChatDataUrl} from 'utils/urls';

export default function Chat() {
  const [chatData, setChatData] = useState([]);
  useEffect(() => {
    getChatData();
  }, [getChatData]);

  const getChatData = useCallback(() => {
    fetch(getChatDataUrl, {
      method: 'GET',
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setChatData(data);
      })
      .catch((err) => {
        if (err) {
          Alert.alert(
            '',
            "There's problem on your network or server url changed.",
          );
        }
      });
  }, []);

  return (
    <View style={styles.container}>
      <ChatHeader
        avatar_url="https://static.dribbble.com/users/33377/avatars/normal/60c0d8b679b898c79bc43826dacda62e.jpg?1535047351"
        name="Marlanne Singer"
      />
      <ChatContainer steps={chatData} initialStep={1} supporter="Marianne" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#4f93fe',
    fontSize: 35,
  },
});
