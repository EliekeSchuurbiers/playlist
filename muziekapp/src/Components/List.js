import React from 'react';
import ListItem from './ListItem'

function List(props) {
    console.log("List", props)
    return (
        <div>
            <ul className="list">
                {props.items.map(item => <ListItem key={item.id} item={item} />)}
            </ul>

        </div>

    )
}

export default List;