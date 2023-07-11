import React from "react";

function Link ({name, url}) {
    return (
        <ul>
            <li>
                <a href = {url}>{name}</a>
            </li>
        </ul>
    )
};

export default Link;