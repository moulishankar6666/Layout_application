import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const MusicTrackItem = props => {
  const {trackItem, onClickDelete} = props
  const {id, imageUrl, name, genre, duration} = trackItem
  const onClickDeleteIcon = () => {
    onClickDelete(id)
  }

  return (
    <li className="track-list-item">
      <div className="track-list-info">
        <img alt="track" src={imageUrl} />
        <div className="title-and-genre">
          <p className="title">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="track-list-duration">
        <p className="duration">{duration}</p>
        <button
          data-testid="delete"
          className="button"
          type="button"
          onClick={onClickDeleteIcon}
        >
          <AiOutlineDelete size={20} />
        </button>
      </div>
    </li>
  )
}

export default MusicTrackItem
