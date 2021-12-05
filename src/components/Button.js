import PropTypes from 'prop-types';

const Button = ({ color, text }) => {
	return (
		<button style={{ backgroundColor: color, color: '#fff' }} className='btn'>
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: '#fff',
};

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
};

export default Button;
