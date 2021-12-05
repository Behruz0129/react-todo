import { BiRightArrowAlt } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';

const AddTask = ({
	onAdd,
	onEdit,
	day,
	setDay,
	text,
	setText,
	reminder,
	setReminder,
	id,
	isEditing,
}) => {
	const onSubmit = (e) => {
		e.preventDefault();

		if (!text.trim()) {
			alert('Please add a task');
			return;
		}

		if (!day.trim()) {
			alert('Please add a day');
			return;
		}

		onAdd({ text, day, reminder });

		setText('');
		setDay('');
		setReminder(false);
	};

	return (
		<form
			className='add-form'
			onSubmit={isEditing ? (e) => onEdit(e, id) : onSubmit}>
			<input
				className='add-task'
				type='text'
				placeholder='Add Task'
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<input
				className='set-day-time'
				type='text'
				placeholder='Set Day & Time'
				value={day}
				onChange={(e) => setDay(e.target.value)}
			/>
			<button
				className={`ntf ${reminder ? 'active' : ''}`}
				onClick={(e) => {
					setReminder(!reminder);
					e.preventDefault();
				}}>
				<IoMdNotificationsOutline />
			</button>
			<button className='add' type='submit'>
				<BiRightArrowAlt />
			</button>
		</form>
	);
};

export default AddTask;
