import PropTypes from 'prop-types';
import Button from './Button';

// destructure props keyword argument to title
const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd}
            />
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
