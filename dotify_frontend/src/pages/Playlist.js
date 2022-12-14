import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import { BASE_URL } from '../services/api'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
//referenced this for an audio player https://github.com/lhz516/react-h5-audio-player

const Playlist = ({ authenticated, user }) => {
  const [myPlayList, setMyPlaylist] = useState([])
  const [playlist, setPlayList] = useState([])
  const [currentTrack, setTrackIndex] = useState(0)
  const [remove, setRemoveSong] = useState({
    musicId: 0,
    userId: parseInt(user.id)
  })
  let { id } = useParams()

  useEffect(() => {
    const getMySongs = async () => {
      const response = await Client.get(`${BASE_URL}userpage/${id}`)
      setMyPlaylist(response.data[0].songs)
      response.data[0].songs.map((song) => {
        playlist.push(song.music_file)
      })
    }
    getMySongs()
  }, [remove, id, playlist])

  const selectSong = (event) => {
    setRemoveSong({ ...remove, [event.target.id]: event.currentTarget.value })
  }

  const removeLike = async (e) => {
    e.preventDefault()
    await Client.delete(`${BASE_URL}userpage`, remove)
  }

  const handleClickNext = () => {
    console.log('click next')
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    )
  }

  const handleEnd = () => {
    console.log('end')
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    )
  }

  return user && authenticated ? (
    <div>
      <ul>
        {myPlayList.map((songs) => (
          <div className="songs">
            <li key={songs.id}>
              <img src={songs.img} alt="artist" />
              <h3>{songs.artists_name}</h3>
              <h4>{songs.genre}</h4>
              <form onSubmit={removeLike}>
                <button value={parseInt(songs.id)}>Remove</button>
              </form>
            </li>
          </div>
        ))}
      </ul>
      <div className="container" id="footer">
        <AudioPlayer
          volume="0.5"
          src={playlist[currentTrack]}
          showSkipControls
          onClickNext={handleClickNext}
          onEnded={handleEnd}
        />
      </div>
    </div>
  ) : (
    <div>
      <h1>Please login to your account or Signup</h1>
    </div>
  )
}

export default Playlist
