// Components
import Header from './components/Header';
import Tasks from './components/Tasks';
// Hooks
import { useState } from 'react';

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Read Bomdod Namaz',
			day: 'Nov 11st at 5:40',
			reminder: true,
		},
		{
			id: 2,
			text: 'Little Workout and Grabe a Coffee',
			day: 'Nov 11st at 6:30',
			reminder: false,
		},
		{
			id: 3,
			text: "Math Revising with Sardor's Video",
			day: 'Nov 11st at 7:00',
			reminder: true,
		},
		{
			id: 4,
			text: 'Do All Exercises on "Chiziqli va 2-darajali tenglamalar Sistemasi"',
			day: 'Nov 11st at 9:00',
			reminder: true,
		},
		{
			id: 5,
			text: 'Read Peshin Namaz',
			day: 'Nov 11st at 1:00',
			reminder: true,
		},
	]);

	// Delete Task

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return (
		<div className='container'>
			<Header />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} />
			) : (
				<p className='no-tasks'>
					Whoops😥! <b>NO TASKS</b> to show. Please, <b>ADD</b> new one!
				</p>
			)}
		</div>
	);
}

export default App;
