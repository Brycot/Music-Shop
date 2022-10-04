import React from 'react';
import useGetProducts from "../../utils/hooks/useGetProducts";
import './NavLink.scss';

function NavLink({ Text }) {
    const { setFilterValue } = useGetProducts();

    const handleMenu = (payload) => {
        setFilterValue(payload);
        console.log(payload);
    };
    return (
        <li onClick={() => handleMenu(Text.toLowerCase())} className="NavLink">
            <p>{Text}</p>
        </li>
    );
}

export default NavLink