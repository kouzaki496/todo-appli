import  { Title } from "./Title";
import  { TodoItem } from "./TodoItem";

export const TodoList = ({
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
  title,
  as
}) => {
  return (
    <>
      {todoList.length !== 0 && (
        <>
          <Title title={title} as={as} />
          <ul>
            {todoList.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                toggleTodoListItemStatus={toggleTodoListItemStatus}
                deleteTodoListItem={deleteTodoListItem}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};