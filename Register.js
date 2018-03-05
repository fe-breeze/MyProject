import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class Register extends React.Component {
  render() {
    return <View style={styles.container}>
      <Text>Register page</Text>
      <Text>Register page</Text>
      <Text>Register page</Text>
    </View>
  }
}
