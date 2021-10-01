import PropTypes from 'prop-types';
import Button from './Button';

// destructure props keyword argument to title
const Header = ({ title }) => {
    const onClick = () => {
        console.log('click');
    };

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Add" onClick={onClick} />
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
