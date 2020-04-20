import React from 'react';
import List from './List'

function MusicList(props) {
    console.log("MusicList", props)
    return (
        <div>
            <List items={props.items} />
        </div>
    )

}

export default MusicList;