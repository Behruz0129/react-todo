// Import image
import hero from '../image/hero.png';

const About = () => {
	return (
		<div className='about'>
			<img src={hero} alt='hero' />
			<div className='wrapper'>
				<div className='col-1'>
					<h1>Details</h1>
					<div className='details'>
						<div>
							<span className='subtitle'>Project Name: </span>
							<span>"Pomo-List"</span>
						</div>
						<div>
							<span className='subtitle'>Last Update: </span>
							<span>12/6/2021</span>
						</div>
						<div>
							<span className='subtitle'>Creator: </span>
							<span>@behruzberdiyev</span>
						</div>
						<div>
							<span className='subtitle'>Made with </span>
							<span>ReactJS & 💜</span>
						</div>
					</div>
				</div>
				<div className='col-2'>
					<h1>Description</h1>
					<div className='details'>
						As you can see, on this website you can do a lot of work on your
						daily, monthly and annual tasks. That is, you can create, edit, and
						delete them. Beyond that, you can add notes to any post you want.
						All you have to do is double-click on the task. Use our Pomo-Task
						app with great design, because it makes your job easier.
						<br />
						<br />
						By the way, this version is the very first version of the program.
						Work is currently underway to update the program and correct
						deficiencies. If you have any suggestions, I will be glad to see you
						at @berdiyev_behruz in the telegram. Wait for the new version😉!
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
