import React from "react";

function Footer(props) {
    const { isLogged } = props;
    return (
        <div id="footer">
            <span>
                CMS to SimpleMVC © 2020. Все права принадлежат всем. ;)
        </span>
            {' '}
            <a href="#">
                {isLogged ? 'Log out' : 'Log in'}
            </a>

        </div>
    );
}

export default Footer;