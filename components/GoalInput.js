import React, { useState } from "react";

import { Button, StyleSheet, View, TextInput, Modal, Text } from "react-native";

const GoalInput = (props) => {
  const [outputText, setOutputText] = useState("");

  const goalInputHandler = (outputText) => {
    setOutputText(outputText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(outputText);
    setOutputText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.containerTwoColumns}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Goals App</Text>
          <Text>Please enter your goal below</Text>
        </View>
        <TextInput
          placeholder="Enter goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={outputText}
        ></TextInput>
        <View style={styles.buttonView}>
          <Button
            title="Add goal"
            color="#27ae60"
            onPress={addGoalHandler}
            style={styles.button}
          ></Button>
           <Button 
          title="Cancel" 
          color="red" 
          onPress={props.cancel}
          style={styles.button}
          />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  containerTwoColumns: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 15,
    width: "60%",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  titleView: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "60%",
    marginTop: 10
  },
  button: {
    width: "40%"
  },
});
