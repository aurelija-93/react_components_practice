import React from "react";

function Film ({url, name}) {
    return (
        <ul>
            <li>
                <a href={url}>{name}</a>
            </li>
        </ul>
    )
};

export default Film;