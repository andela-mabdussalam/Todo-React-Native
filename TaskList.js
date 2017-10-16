import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ListView, TouchableHighlight, Text } from 'react-native';
import TaskRow from './TaskRow';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#F7F7F7',
    flex: 1,
    justifyContent: 'flex-start',
  },
  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600'

  }
});
class TaskList extends React.Component {
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    };
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(todo) {
    return (
      <TaskRow todo={todo} />
    );
  }
  render() {
    return (
    <View style={styles.container}>
      <ListView
       dataSource={this.state.dataSource}
       key={this.props.todos}
       renderRow={this.renderRow}
      />
      <TouchableHighlight
        onPress={this.props.onAddStarted}
        style={styles.button}>
        <Text style={styles.buttonText}>
          Add one
        </Text>
      </TouchableHighlight>
    </View>
    );
  }
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onAddStarted: PropTypes.func.isRequired,
};
export default TaskList;
