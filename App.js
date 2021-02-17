import React, { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import Goalnput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelButton = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add goal" onPress={() => setIsAddMode(true)} />
      <Goalnput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        cancel={cancelButton}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 60,
  },
  containerText: {
    marginTop: 60,
    marginBottom: 30,
    alignItems: "center",
  },
  outputTextStyle: {
    borderWidth: 1,
    borderColor: "#3498db",
    backgroundColor: "#3498db",
    padding: 30,
    width: "60%",
    textAlign: "center",
    color: "white",
    borderRadius: 30,
  },
});
