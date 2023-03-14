import { Checkbox, Text, CloseButton, HStack } from "@chakra-ui/react";
import React from "react";

const TodoItem = ({ id, title, completed, toggleTodo, removeTodo }) => {
  return (
    <HStack spacing={3}>
      <Checkbox
        isChecked={completed}
        onChange={() =>
          toggleTodo({
            variables: {
              id,
              completed: !completed,
            },
          })
        }
      />
      <Text>{title}</Text>
      <CloseButton
        onClick={() =>
          removeTodo({
            variables: {
              id,
            },
          })
        }
      />
    </HStack>
  );
};

export default TodoItem;
