import React from 'react';
import {Outlet} from "react-router-dom";
import {navigation} from "../../data/nav";
import {MenuItem} from "./MenuItem";

const Menu = () => {
    return (
        <>
            <nav className="menu">
                {
                    navigation.map(navItem => {
                        return <MenuItem key={navItem.id} {...navItem}/>
                    })
                }
            </nav>
            <div className="wrapper">
                <Outlet/>
            </div>
        </>
    );
}

export {Menu};