import { useDispatch, useSelector } from 'react-redux';
import './todoInput.css';
import { actionGetInputValue, actionResetInputValue, selectorText } from '../../store/slices/text/action';
import { actionAddNewItem} from '../../store/slices/toDos/action';

const TodoInput = () => {
    const dispatch = useDispatch();
    const text = useSelector(selectorText);

    const handlerSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === "") return;

        dispatch(actionAddNewItem(text));
        dispatch(actionResetInputValue())
    }

    return (
        <>
            <h3>TODO LIST</h3>

            <form onClick={handlerSubmit}>
                <input type="text" placeholder="type task..." value={text} onChange={(e) => {
                    dispatch(actionGetInputValue(e.target.value))
                }}/>
                <button>Add Task</button>
            </form>
        </>
    )
}

export default TodoInput;