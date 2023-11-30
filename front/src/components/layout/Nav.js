import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul class="holder">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Inicio</NavLink></li>
                    <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined}>Quíenes Somos</NavLink></li>
                    <li><NavLink to="/productos" className={({ isActive }) => isActive ? "activo" : undefined}>Productos</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;