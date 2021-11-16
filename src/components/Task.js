import { BiTrash } from 'react-icons/bi';

const Task = ({ task, onDelete }) => {
	return (
		<div className='task'>
			<div className='text-place'>
				<h3>{task.text}</h3>
				<p>
					<sub>{task.day}</sub>
				</p>
			</div>
			<div className='icon-place'>
				<BiTrash onClick={() => onDelete(task.id)} />
			</div>
		</div>
	);
};

export default Task;
