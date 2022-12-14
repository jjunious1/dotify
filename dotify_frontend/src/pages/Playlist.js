import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import React from 'react'
import Client from '../services/api'
import { BASE_URL } from '../services/api'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

const Playlist = ({ authenticated, user }) => {
  const [myPlayList, setMyPlaylist] = useState([])
  const [playlist, setPlayList] = useState([])
  const [currentTrack, setTrackIndex] = React.useState(0)
  const [remove, setRemoveSong] = useState({
    musicId: 0,
    userId: parseInt(user.id)
  })
  let { id } = useParams()

  useEffect(() => {
    const getMySongs = async () => {
      const response = await Client.get(`${BASE_URL}userpage/${id}`)
      setMyPlaylist(response.data[0].songs)
      console.log(response.data)
      response.data[0].songs.map((song) => {
        playlist.push({ ['src']: song.music_file })
      })
    }
    getMySongs()
  }, [remove])

  const handleChange = (e) => {
    setRemoveSong({ ...remove, ['musicId']: e.target.value })
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

  const runSongs = () => {
    if (playlist !== null) {
      return playlist
    } else {
      return playlist[currentTrack].src
    }
  }

  return user && authenticated ? (
    <div>
      <ul>
        {myPlayList.map((songs) => (
          <div className="songs">
            <li key={songs.id}>
              <img src={songs.img} alt="image" />
              <h3>{songs.artists_name}</h3>
              <h4>{songs.genre}</h4>
              <form onSubmit={removeLike}>
                <button value={parseInt(songs.id)} onClick={handleChange}>
                  Remove
                </button>
              </form>
            </li>
          </div>
        ))}
      </ul>
      {playlist ? (
        <div className="container" id="footer">
          <AudioPlayer
            volume="0.5"
            autoPlay={false}
            src={playlist[currentTrack].src}
            showSkipControls
            onClickNext={handleClickNext}
            onEnded={handleEnd}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  ) : (
    <div>
      <h1>Please login to your account or Signup</h1>
    </div>
  )
}

export default Playlist

//referenced this for an audio player https://github.com/lhz516/react-h5-audio-player
