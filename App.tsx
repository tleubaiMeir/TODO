import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  let [todos, setTodos] = useState([
    {
      title: 'Todo 1',
      content: 'Сделать дз по React Native'
    }
  ]);
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.text}>Заголовок: </Text>
        <TextInput style={styles.input} value={title} onChange={(e) => {
          setTitle(e.target.value);
        }}/>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.text}>Содержание: </Text>
        <TextInput style={styles.input} value={content} onChange={(e) => {
          setContent(e.target.value);
        }}/>
      </View>
      <Button title="Добавить заметку" onPress={(e) => {
        e.preventDefault();
        todos.push({title, content});
        setTodos([...todos]);
      }}/>
      <View style={styles.todoList}>
        {todos.map((item, index) => {
          return <View key={index} style={styles.todo}>
            <Text style={styles.todo_content}>{item.title}</Text>
            <Text style={styles.todo_content}>{item.content}</Text>
            <Button title='Удалить' onPress={(e) => {
              e.preventDefault();
              todos.splice(index, 1);
              setTodos([...todos]);
            }}/>
          </View>
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  inputBox: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    width: 100
  },
  todoList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10
  },
  todo: {
    textAlign: 'center',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    width: 200,
  },
  todo_content: {
    flex: 1,
    flexWrap: 'wrap',
  },
});
