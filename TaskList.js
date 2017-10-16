import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TaskList extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Text>Best app ever!</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TaskList;
