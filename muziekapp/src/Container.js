import React from 'react';
import InputFields from './Components/Inputfield-song'
import MusicList from './Components/MusicList'


class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            MusicList: [
                { id: 1, title: "Your Song", artist: "Elton John", genre: "Pop", rating: "3" },
                { id: 2, title: "Ice Ice Baby", artist: "Vanilla Ice", genre: "Hip-Hop", rating: "1" }

            ],
            isUnsorted: true

        }

    };
    // Sort(event) {
    //     const { MusicList } = this.state
    //     let newMusicList = MusicList.sort(rating)
    //     this.setState({
    //         MusicList: newMusicList
    //     })
    // }


    render() {

        const clickItem = (event) => {
            console.log("clicked", event.target);
            //console.log(bla);
            this.setState({
                MusicList: this.state.MusicList.concat({
                    id: 1,
                    title: this.state.title,
                    artist: this.state.artist,
                    genre: this.state.genre,
                    rating: this.state.rating
                })
            });

        }

        const sortByRating = (event) => {
            console.log("clicked", this.state.MusicList.sort((a, b) => a.rating > b.rating ? 1 : -1));
            this.setState({
                MusicList: this.state.MusicList.sort((a, b) => a.rating > b.rating ? 1 : -1)
            });
        }
        const sortByTitle = (event) => {
            console.log("clicked", this.state.MusicList.sort((a, b) => a.title > b.title ? 1 : -1));
            this.setState({
                MusicList: this.state.MusicList.sort((a, b) => a.title > b.title ? 1 : -1)
            });
        }
        const sortByArtist = (event) => {
            console.log("clicked", this.state.MusicList.sort((a, b) => a.artist > b.artist ? 1 : -1));
            this.setState({
                MusicList: this.state.MusicList.sort((a, b) => a.artist > b.artist ? 1 : -1)
            });
        }
        const sortByGenre = (event) => {
            console.log("clicked", this.state.MusicList.sort((a, b) => a.genre > b.genre ? 1 : -1));
            this.setState({
                MusicList: this.state.MusicList.sort((a, b) => a.genre > b.genre ? 1 : -1)
            });
        }

        return (
            <div>

                <div className="toevoegen"><InputFields key="bla" OnClick={clickItem} state={this.state} />
                    <button
                        className="Submit"
                        onClick={clickItem}>Toevoegen
                </button>
                </div>
                <h1 className="Header">Mijn lijst</h1>
                <div className="Top-div">
                    <div className="Top" id="title">Titel</div>
                    <div className="Top" id="artist">Artiest</div>
                    <div className="Top" id="genre">Genre</div>
                    <div className="Top" id="rating">Rating</div>

                </div>
                <br></br>
                <MusicList items={this.state.MusicList} />
                <div className="buttons">
                    <button className="sort" onClick={sortByRating}>Sorteren op rating</button>
                    <button className="sort" onClick={sortByTitle}>Sorteren op titel</button>
                    <button className="sort" onClick={sortByArtist}>Sorteren op artiest</button>
                    <button className="sort" onClick={sortByGenre}>Sorteren op genre</button>
                </div>
            </div >


        )

    }
}


export default Container;