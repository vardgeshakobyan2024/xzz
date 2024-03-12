import { useSelector } from 'react-redux';
import './todoBody.css';
import { selectorToDos } from '../../store/slices/toDos/action';
import TodoItem from '../TodoItem/TodoItem';

const TodoBody = () => {
    const toDos = useSelector(selectorToDos);

    return (
        <div className="todoBody">
            {
                toDos.map((el) => {
                    return (
                        <TodoItem 
                            key={el.id}
                            task={el.task}
                            id={el.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default TodoBody;