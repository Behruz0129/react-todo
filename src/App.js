// Components
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Main from './components/Main';
// Hooks
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
	// Default Value
	const [tasks, setTasks] = useState([]);

	// Add Tasks Form
	const [text, setText] = useState('');
	const [day, setDay] = useState('');
	const [reminder, setReminder] = useState(false);

	const [currentID, setCurrentID] = useState('');
	const [isEditing, setIsEditing] = useState(false);

	// Add Task
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 1000) + 1;
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	};

	// Delete Task
	const deleteTask = (id) => {
		!isEditing && setTasks(tasks.filter((task) => task.id !== id));
	};

	// Toggle Reminder
	const toggleReminder = (id) => {
		!isEditing &&
			setTasks(
				tasks.map((task) =>
					task.id === id ? { ...task, reminder: !task.reminder } : task
				)
			);
	};

	// Edit Task
	const onEdit = (task) => {
		setIsEditing(true);
		setText(task.text);
		setDay(task.day);
		setReminder(task.reminder);
		setCurrentID(task.id);
	};

	const editTask = (e, id) => {
		e.preventDefault();

		if (!text.trim()) {
			alert('Please add a task');
			return;
		}

		if (!day.trim()) {
			alert('Please add a day');
			return;
		}

		setTasks(
			tasks.map((task) =>
				task.id === id
					? { ...task, reminder: reminder, text: text, day: day }
					: task
			)
		);

		setText('');
		setDay('');
		setReminder(false);
		setIsEditing(false);
	};

	return (
		<div className='container'>
			<Header />
			<Routes>
				<Route
					path='/'
					element={
						<Main
							addTask={addTask}
							editTask={editTask}
							text={text}
							setText={setText}
							day={day}
							setDay={setDay}
							reminder={reminder}
							setReminder={setReminder}
							currentID={currentID}
							isEditing={isEditing}
							tasks={tasks}
							deleteTask={deleteTask}
							toggleReminder={toggleReminder}
							onEdit={onEdit}
						/>
					}
				/>
				<Route path='about' element={<About />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
