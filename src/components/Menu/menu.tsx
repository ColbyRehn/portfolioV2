import React from "react";
import './menu.scss';

const Menu:React.FC = () => {

    return (
        <button id="burger-menu" aria-label="Open menu">
              <div className="burger-line" />
              <div className="burger-line" />
              <div className="burger-line" />
        </button>
    );
}

export default Menu;
