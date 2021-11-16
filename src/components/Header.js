import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
	return (
		<header className='header'>
			<h1>{title}</h1>
			<div className='right'>
				<p className='link'>About</p>
				<Button color='#3d4ac0' text='New' />
			</div>
		</header>
	);
};

Header.defaultProps = {
	title: 'Notion CB',
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
// 	color: 'green',
// 	backgroundColor: 'black',
// };

export default Header;
