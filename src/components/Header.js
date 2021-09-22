import PropTypes from 'prop-types';

// destructure props keyword argument to title
const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
};

// default prop
Header.defaultProps = {
    title: 'Task Tracker',
};

//how to use proptypes
Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
