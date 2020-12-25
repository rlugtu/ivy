import React from 'react'

const Navbar = () => {
    return (
        <div className="navBarContainer">
            <div className="profilePicContainer">
                <h1>Profile Pic</h1>
            </div>
            <ul className="navOptions">
                <li>
                    Dashboard
                </li>
                <li>
                    Calendar
                </li>
                <li>
                    Lists
                </li>
                <li>
                    Notes
                </li>
            </ul>
        </div>
    )
}

export default Navbar