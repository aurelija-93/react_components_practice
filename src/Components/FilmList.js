import React from "react";
import Film from "./Film";

function FilmList({filmsData}) {

    const filmNodes = filmsData.map(function(film) {
        return (
            <Film key = {film.id} name = {film.name} url = {film.url} />
        )
    })
    return (
        <>
            {filmNodes}
        </>
    )
};

export default FilmList;