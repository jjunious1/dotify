import { useState, useEffect } from 'react'
import Client from '../services/api'
import { BASE_URL } from '../services/api'
import { useParams } from 'react-router-dom'
import PlayerApp from '../components/MediaPlayer'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import React from 'react'

const Browse = ({ authenticated, user }) => {
  const { id } = useParams()
  const [songs, setSongs] = useState([])
  const [playlist, setPlayList] = useState('')
  const [likeSong, setLikedSong] = useState({
    musicId: 0,
    userId: parseInt(id)
  })

  useEffect(() => {
    const getSongs = async () => {
      const response = await Client.get(`${BASE_URL}music`)
      console.log(response)
      setSongs(response.data)
    }
    getSongs()
  }, [])

  const addLikedSong = async (e) => {
    setLikedSong({ ...likeSong, ['musicId']: parseInt(e.target.value) })
  }

  const addLike = async (e) => {
    const add = await Client.post(`${BASE_URL}userpage`, likeSong)
    console.log(add)
  }

  const playSong = (e) => {
    setPlayList(e.target.value)
  }

  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <div>
        <ul>
          {songs.map((song) => (
            <div className="songs">
              <li key={song.id}>
                <img src={song.img} alt="image" />
                <button value={song.music_file} onClick={playSong}>
                  Play
                </button>
                <h3>{song.artists_name}</h3>
                <h4>{song.genre}</h4>
                <form onSubmit={addLike}>
                  <button type="submit" value={song.id} onClick={addLikedSong}>
                    Like
                  </button>
                </form>
              </li>
            </div>
          ))}
        </ul>
        <div className="container" id="footer">
          <AudioPlayer
            volume="0.5"
            autoPlay={false}
            src={playlist}
            showSkipControls
            // onClickNext={handleClickNext}
            // onEnded={handleEnd}
          />
        </div>
      </div>
    )
  }
  const publicOptions = (
    <div>
      <h3 className="browse_text">Please login or register to play music!</h3>
      <div>
        <ul>
          {songs.map((song) => (
            <div className="songs">
              <li key={song.id}>
                <img className="img_wrap" src={song.img} alt="image" />
                <h3>{song.artists_name}</h3>
                <h4>{song.genre}</h4>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div>{authenticated && user ? authenticatedOptions : publicOptions}</div>
  )
}

export default Browse
