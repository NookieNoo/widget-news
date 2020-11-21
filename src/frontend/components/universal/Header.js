import React from "react";
import logo from "@images/logo.jpg";

function Header(props) {
    return (
        <a href="#" id="logoLink">
            <img src={logo} alt="widgetNews" />
        </a>
    );
}

export default Header;