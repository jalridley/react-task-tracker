// npm i react-icons to get the icons then restart server
// FaTimes is the X icon from font  awesome and it acts like a component <FaTimes />
import { FaTimes } from 'react-icons/fa';

const task = ({ task, onDelete, onToggle }) => {
    return (
        <div
            className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)}
        >
            <h3>
                {task.text}{' '}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

export default task;
