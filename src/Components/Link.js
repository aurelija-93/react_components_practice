import React from "react";

function Link ({name, url}) {
    return (
        <li>
            <a href = {url}>{name}</a>
        </li>
    )
};

export default Link;