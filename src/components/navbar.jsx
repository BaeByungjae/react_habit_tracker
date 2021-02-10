import React,{memo} from 'react';

const Navbar = memo((props) => {
    return (
        <div className="navbar">
            <i className="fas fa-leaf navbar-icon"></i>
            <span className="navbar-text">Habit Tracker</span>
            <span className="navbar-count">{props.count}</span>
        </div>
    );
});

export default Navbar;