import React from 'react';

function InputFields(props) {
    console.log("inputfield", props)
    const state = props.state;

    const updateTitle = (event) => {
        state.title = event.target.value;
    }
    const updateArtist = (event) => {
        state.artist = event.target.value;
    }
    const updateGenre = (event) => {
        state.genre = event.target.value;
    }
    const updateRating = (event) => {
        state.rating = event.target.value;
    }
    return (
        <form className="input" onClick={props.onClick}>
            <input
                className="title-input"
                placeholder="Titel"
                onChange={updateTitle}
            ></input>
            <input
                className="artist-input"
                placeholder="Artiest"
                onChange={updateArtist}
            ></input>
            <input
                className="genre-input"
                placeholder="Genre"
                onChange={updateGenre}
            ></input>
            <input
                className="rating-input"
                placeholder="Rating"
                onChange={updateRating}
            ></input>
        </form>
    )

}


export default InputFields;