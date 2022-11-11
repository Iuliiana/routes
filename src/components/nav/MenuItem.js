import React from 'react';
import {NavLink} from "react-router-dom";

const MenuItem = (props) => {
    const {
        path,
        name
    } = props
    return (
        <>
            <NavLink className="menu__item" to={path}>{name}</NavLink>
        </>
    );
}
export {MenuItem};