import React from "react";

function Film ({url, name}) {
    return (
        <li>
            <a href={url}>{name}</a>
        </li>
    )
};

export default Film;