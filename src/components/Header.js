import PropTypes from 'prop-types';

// destructure props keyword argument to title
const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <button className="btn">Add</button>
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

// CSS style in js or inline <div style={{color: 'red', backgroundColor: 'black'}}></div>
const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
};

export default Header;
