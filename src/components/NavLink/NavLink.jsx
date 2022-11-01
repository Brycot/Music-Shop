import React from 'react';
import useGetProducts from "../../utils/hooks/useGetProducts";
import './NavLink.scss';

function NavLink({ Text, setFilterValue }) {


    return (
        <li
            onClick={() => setFilterValue(Text.toLowerCase())}
            className="NavLink"
        >
            <p>{Text}</p>
        </li>
    );
}

export default NavLink