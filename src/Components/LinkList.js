import React from "react";
import Link from "./Link";

function LinkList ({linksData}) {

    const LinkNodes = linksData.map(function(link) {
        return (
            <Link key = {link.id} name = {link.name} url = {link.url} />
        )
    })

    return (
        <>
            {LinkNodes}
        </>
    )
};

export default LinkList;