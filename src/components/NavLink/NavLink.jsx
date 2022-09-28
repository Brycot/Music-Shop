import React from 'react'
import './NavLink.scss'

function NavLink({onClick, Text }) {
    return (
        <li className='NavLink'>
            <a href={onClick}>{Text}</a>
        </li>
    );
}

export default NavLink