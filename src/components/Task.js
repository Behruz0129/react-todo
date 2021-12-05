import { BiTrash, BiEdit } from 'react-icons/bi';

const Task = ({ task, onDelete, onToggle, onEdit }) => {
	return (
		<div
			className={`task ${task.reminder ? 'reminder' : ''}`}
			onDoubleClick={() => onToggle(task.id)}>
			<div className='text-place'>
				<h3>{task.text}</h3>
				<p>
					<sub>{task.day}</sub>
				</p>
			</div>
			<div className='icon-place'>
				<BiEdit onClick={() => onEdit(task)} />
			</div>
			<div className='icon-place'>
				<BiTrash onClick={() => onDelete(task.id)} />
			</div>
		</div>
	);
};

export default Task;
