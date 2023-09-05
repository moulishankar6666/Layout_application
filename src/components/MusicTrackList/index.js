import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import MusicTrackItem from '../MusicTrackItem'

import './index.css'

class MusicTrackList extends Component {
  constructor(props) {
    super()
    this.state = {search: '', filteredList: props.trackList}
  }

  userInput = event => {
    this.setState({search: event.target.value})
  }

  onClickDelete = id => {
    const {filteredList} = this.state
    const updatedPlayList = filteredList.filter(eachItem => eachItem.id !== id)
    console.log(updatedPlayList)
    this.setState({filteredList: updatedPlayList})
  }

  render() {
    const {filteredList, search} = this.state
    const playList = filteredList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div className="music-playlist-container">
        <div className="music-playlist-banner">
          <h1>Ed Sheeran</h1>
          <p>Singer</p>
        </div>
        <div className="search-bar-main-container">
          <h1>Songs Playlist</h1>
          <div className="search-bar-container">
            <input
              onChange={this.userInput}
              type="search"
              placeholder="Search"
            />
            <AiOutlineSearch size={20} />
          </div>
        </div>
        {playList.length > 0 ? (
          <ul className="trackList-container">
            {playList.map(trackItem => (
              <MusicTrackItem
                key={trackItem.id}
                trackItem={trackItem}
                onClickDelete={this.onClickDelete}
              />
            ))}
          </ul>
        ) : (
          <div className="no-songs-found-container">
            <p>No Songs Found</p>
          </div>
        )}
      </div>
    )
  }
}
export default MusicTrackList
