import PropTypes from 'prop-types';
import Button from './Button';
import { Link } from 'react-router-dom';
// image
import logo from '../image/logo.png';

const Header = ({ title, onAdd }) => {
	return (
		<header className='header'>
			<div className='left'>
				<img className='logo' src={logo} alt='logo' />
				<h1>{title}</h1>
			</div>
			<div className='right'>
				<Link to='/about' className='link'>
					About
				</Link>
				<Link to='/'>
					<Button color='#3d4ac0' text='Tasks' />
				</Link>
			</div>
		</header>
	);
};

Header.defaultProps = {
	title: 'Pomo-List',
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
