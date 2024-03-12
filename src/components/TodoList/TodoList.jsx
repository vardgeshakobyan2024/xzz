import TodoBody from '../TodoBody/TodoBody';
import TodoInput from '../TodoInput/TodoInput';
import './todoList.css';

const TodoList = () => {
    return (
        <div className="todoList">
            <TodoInput />
            <TodoBody />
        </div>
    )
}

export default TodoList;