import AddTask from './AddTask';
import Tasks from './Tasks';

const Main = ({
	onEdit,
	tasks,
	toggleReminder,
	addTask,
	editTask,
	text,
	setText,
	day,
	setDay,
	reminder,
	setReminder,
	currentID,
	isEditing,
	deleteTask,
}) => {
	return (
		<div>
			<AddTask
				onAdd={addTask}
				onEdit={editTask}
				text={text}
				setText={setText}
				isEditing={isEditing}
				day={day}
				setDay={setDay}
				reminder={reminder}
				setReminder={setReminder}
				id={currentID}
			/>

			<div className='tasks'>
				{tasks.length > 0 ? (
					<Tasks
						tasks={tasks}
						onDelete={deleteTask}
						onToggle={toggleReminder}
						onEdit={onEdit}
					/>
				) : (
					<div className='no-tasks'>
						<h1>Whoops!</h1>
						<p>
							<b>NO TASKS</b> to show. Please, <b>ADD</b> new one!
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Main;
