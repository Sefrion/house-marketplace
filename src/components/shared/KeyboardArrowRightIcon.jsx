import PropTypes from 'prop-types';

function KeyboardArrowRightIcon({ fill, width, height }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			height={`${height}`}
			width={`${width}`}
			fill={`${fill}`}
		>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z' />
		</svg>
	);
}

KeyboardArrowRightIcon.propTypes = {
	fill: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
};

export default KeyboardArrowRightIcon;
