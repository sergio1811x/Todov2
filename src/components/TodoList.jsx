import { VStack, Spinner } from "@chakra-ui/react";
import TodoItem from "./TodoItem";
import TotalCount from "./TotalCount";
import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ALL_TODO, DELETE_TODO, UPDATE_TODO } from "../apollo/todos";

const TodoList = () => {
  const { loading, error, data } = useQuery(ALL_TODO);
  const [toggleTodo, { error: updateError }] = useMutation(UPDATE_TODO);
  const [removeTodo, { error: deleteError }] = useMutation(DELETE_TODO, {
    update(cache, { data: { removeTodo } }) {
      cache.modify({
        fields: {
          allTodos(currentTodos = []) {
            return currentTodos.filter(
              (todo) => todo.__ref !== `Todo:${removeTodo.id}`
            );
          },
        },
      });
    },
  });

  if (loading) {
    return <Spinner />;
  }
  if (error || updateError || deleteError) {
    return <h1>Error...</h1>;
  }
  //sadsadsad
  //sadsadsaddsa
  //sadsadsad
  //sadsadsaddsa //sadsadsad
  //   //sadsadsaddsa //sadsadsad
  //   //sadsadsaddsa

  return (
    <>
      <VStack spacing={2} mt={4}>
        {data.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </VStack>
      <TotalCount />
    </>
  );
};

export default TodoList;
