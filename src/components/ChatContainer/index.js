import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import ChatItem from 'components/ChatItem';
import ChatInput from 'components/ChatInput';

export default function ChatContainer({steps, initialStep, supporter}) {
  const [oldSteps, setOldSteps] = useState([]);
  const flatRef = useRef(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(initialStep);

  useEffect(() => {
    const step = steps.filter((eachStep) => eachStep.id === initialStep);
    const stepIndex = steps.indexOf(step[0]);
    setOldSteps(step);
    setCurrentStepIndex(stepIndex);
  }, [steps, initialStep]);

  const onSend = (text, nextStep) => {
    const currentStep = steps[currentStepIndex];
    const oStep = [...oldSteps];

    const userStep = {
      ...currentStep,
      id: 'user' + currentStep.id,
      user: true,
      answer: text,
    };
    oStep.push(userStep);

    const step = steps.filter((eachStep) => eachStep.id === nextStep);
    const stepIndex = steps.indexOf(step[0]);
    oStep.push(step[0]);
    setCurrentStepIndex(stepIndex);

    setOldSteps(oStep);
    setTimeout(() => scrollToEnd(), 200);
  };

  const scrollToEnd = () => {
    if (flatRef.current) {
      flatRef.current.scrollToEnd({animated: true});
    }
  };

  const platformBehavior = Platform.OS === 'ios' ? 'padding' : 'height';
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 66 : 66;
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <FlatList
          ref={flatRef}
          data={oldSteps}
          renderItem={({item}) => <ChatItem item={{...item, supporter}} />}
          keyExtractor={(item) => '' + item.id}
          onLayout={scrollToEnd}
        />
      </View>

      <KeyboardAvoidingView
        behavior={platformBehavior}
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <ChatInput onSend={onSend} step={steps[currentStepIndex]} />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollStyle: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 30,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 10,
  },
});
