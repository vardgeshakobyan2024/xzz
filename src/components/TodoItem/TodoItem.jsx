import { useDispatch } from 'react-redux';
import './todoItem.css';
import { actionDeleteItem } from '../../store/slices/toDos/action';

const TodoItem = ({task, id}) => {
    const dispatch = useDispatch();

    return (
        <div className="item">
            <p>{task}</p>
            <div className="btns">
                <i className="fa-solid fa-trash" onClick={() => {
                    dispatch(actionDeleteItem(id));
                }}></i>
            </div>
        </div>
    )
}

export default TodoItem;