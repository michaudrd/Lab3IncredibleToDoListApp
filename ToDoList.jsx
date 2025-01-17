import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  Button
} from "react-native";

function ToDoList({tasks}) {
    return (
        <ScrollView>
          {tasks.map((task, index) => (
            <Pressable key={index}>
              <View>
                <Text>{task}</Text>
              </View>
            </Pressable>
          ))}
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
  });

export default ToDoList;