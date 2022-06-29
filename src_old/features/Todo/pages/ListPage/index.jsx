import React, { useState } from "react";
import PropTypes from "prop-types";
import Todolist from "../../components/Todolist";
import TodoForm from "../../components/TodoForm";

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];
  const [todoList, setTodolist] = useState(initTodoList);
  const [todoStatus, setTodoStatus] = useState("all");

  const handleClickItem = (todo, idx) => {
    console.log(todo, idx);
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };
    setTodolist(newTodoList);
  };
  const handleShowAllClick = () => {
    setTodoStatus("all");
  };
  const handleShowCompletedClick = () => {
    setTodoStatus("completed");
  };
  const handleShowNewClick = () => {
    setTodoStatus("new");
  };
  const todoFiltered = todoList.filter((todo) => {
    return todoStatus === "all" || todoStatus === todo.status;
  });
  const handleTodoFormSubmit = (values) => {
    console.log("form submit: ", values);
    const newItem = {
      id: todoList.length + 1,
      title: values.title,
      status: "new",
    };
    const newTodoList = [...todoList, newItem];
    setTodolist(newTodoList);
  };
  return (
    <div>
      <h3>Todo Form</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <Todolist todoList={todoFiltered} onTodoClick={handleClickItem} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Complete</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
