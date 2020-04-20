import React from 'react';

function ListItem(props) {
    console.log(props, "ListItems")



    return (
        <li
            key={props.item.id}
            className="list-item"
        >
            <div className="title">{props.item.title}</div>
            <div className="artist">{props.item.artist}</div>
            <div className="genre">{props.item.genre}</div>
            <div className="rating">{props.item.rating}</div>
        </li>
    )




}


export default ListItem;