import React from 'react';
import { useNavigate } from 'react-router-dom';
import useGetProducts from "../../utils/hooks/useGetProducts";
import './NavLink.scss';

function NavLink({ Text, setFilterValue }) {
    const navigate = useNavigate();
    const handleFilter = (filter) => {
        setFilterValue(filter);
        navigate('/');
    }

    return (
        <li
            onClick={() => handleFilter(Text.toLowerCase())}
            className="NavLink"
        >
            <p>{Text}</p>
        </li>
    );
}

export default NavLink