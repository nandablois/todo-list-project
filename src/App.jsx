import { useState } from "react";
import "./App.css";
import Todo from "./components/todo";
import TodoForm from "./components/todo-form";
import Search from "./components/search";

export default function App() {
  const [todos, setTodo] = useState([
    {
      id: 1,
      text: "Ir ao mercado",
      category: "casa",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Marcar consulta médica",
      category: "saúde",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Criar projeto todo list",
      category: "Portifólio",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodo(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodo(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodo(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <div className="todo-list">
        {todos .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}
