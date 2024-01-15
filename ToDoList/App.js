import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from '.components/ToDoList';

const App = () => {

  const initialTasks = ['Buy groceries', 'Walk the dog', 'Read a book'];

  return (
    <SafeAreaView style={styles.container}>
      {}
      <ToDoList initialTasks={initialTasks} />
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
