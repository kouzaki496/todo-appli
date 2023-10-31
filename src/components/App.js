import React, { useState, useEffect } from "react";
import axios from "axios";
import { ulid } from "ulid";

const todoDataUrl = "http://localhost:3100/todos"; //モックサーバーのURL


function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState([]);

  //コンポーネント：タイトル
  const TodoTitle = ({ title, as }) => {
    if (as === "h1") return <h1>{title}</h1>;
    if (as === "h2") return <h2>{title}</h2>;

    return <p>{title}</p>
  }

  //コンポーネント：TODOリスト
  const TodoItem = ({ todo }) => {
    return (
      <li>
        {todo.content}
        <button
          onClick={ () => toggleTodoListItemStatus(todo.id, todo.done)}
        >{todo.done ? "未完了にする" : "完了にする"}</button>
        <button
          onClick={ () => handleDeleteTodoListItem(todo.id) }
        >削除</button>
      </li>
    )
  };


  const TodoList = ({ todoList }) => {
    return (
      <ul>
        {todoList.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(todoDataUrl);
      setTodoList(response.data);
      console.log(`[response.data]${JSON.stringify(response.data)}`);
    };
    fetchData();
  }, []);

  console.log("TODOリスト:", todoList);

  //未完了リスト
  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  console.log("未完了TODOリスト:", inCompletedList);

  //完了リスト
  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  //インプットフォームの状態を管理
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
    console.log(`[onChangeTodoText]todoText:${todoText}`);
  };

  //リストの追加
  const handleAddTodoListItem = () => {
    if (todoText === "")
    return;
    const newTodo = {
      "id": ulid(),
      "content": todoText,
      "done": false
    };
    setTodoList([...todoList, newTodo]);
    //追加した後は、フォームを空にする
    setTodoText("");
    };

  //リストの削除
  const handleDeleteTodoListItem = (id) => {
    const newTodo = [...todoList];
    console.log(`[handleDeleteTodoListItem]id:${id}`);
    console.log(`[handleDeleteTodoListItem:]todoList:${JSON.stringify(todoList)}`);

    const isDeleteTodo = (todoList) => todoList.id === id;
    const deleteTodoIndex = todoList.findIndex(isDeleteTodo);
    console.log(`[handleDeleteTodoListItem]deleteTodoIndex:${deleteTodoIndex}`);

    newTodo.splice(deleteTodoIndex, 1);
    console.log(`[handleDeleteTodoListItem]newTodo:${JSON.stringify(newTodo)}`);

    setTodoList(newTodo);
  };

  //ステータスの変更
  const toggleTodoListItemStatus = (id, done) => {

    const todoItem = todoList.find((item) => item.id === id);
    const newTodoItem = { ...todoItem, done: !done } //doneを反転
    console.log(`[toggleTodoListItemStatus]newTodoItem:${JSON.stringify(newTodoItem)}`);

    const newTodoList = todoList.map((item) => {

      return item.id !== id ? item : newTodoItem;

    });

    setTodoList(newTodoList);
    console.log(`[toggleTodoListItemStatus]newTodoList:${JSON.stringify(newTodoList)}`);

  };


  console.log("完了TODOリスト:", completedList);

  return (
    <>

    <TodoTitle title="TODOアプリ" as="h1" />
    <input value={todoText} onChange={onChangeTodoText}></input>
    <button
      onClick={ handleAddTodoListItem }
    >+ リストを追加</button>
    <p>入力したテキスト: {todoText}</p>

    <TodoTitle title="未完了リスト" as="h2" />
    <TodoList todoList={inCompletedList} />

    <TodoTitle title="完了リスト" as="h2" />
    <TodoList todoList={completedList} />

    </>
  );
}

export default App;