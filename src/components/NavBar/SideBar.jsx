import React from "react";
import { slide as Menu } from "react-burger-menu";
import './SideBar.css'


export default props => {



    return (
        <Menu {...props}>
            <a className="menu-item" href="/">
                HOME
            </a>

            <a className="menu-item" href="/products">
                ALL PRODUCTS
            </a>

            <a className="menu-item" href="/category/homedecor">
                HOME DECOR
            </a>

            <a className="menu-item" href="/category/plantaccessories">
                PLANT ACCESORIES
            </a>

            <a className="menu-item" href="/category/furniture">
                FURNITURE
            </a>

            <a className="menu-item" href="/category/lighting">
                LIGHTNING
            </a>

            <a className="menu-item" href="/category/mirrors">
                MIRRORS
            </a>

            <a className="menu-item" href="/category/kitchenware">
                KITCHENWARE
            </a>
        </Menu>
    );
};