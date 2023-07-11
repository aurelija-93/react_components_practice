import React from "react";
import FilmList from "../Components/FilmList";
import Link from "../Components/Link";

function FilmBox() {
    return (
        <div className="App">
            <h1>Upcoming Film Releases for UK</h1>
            <FilmList />
            <Link />
        </div>
    )
};

export default FilmBox;