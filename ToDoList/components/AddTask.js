import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      onAddTask(taskTitle.trim());
      setTaskTitle('');
    }
  };

  return (
    <View style={styles.addTaskContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter new task"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};


const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});
export default AddTask;
