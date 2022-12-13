import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import React from 'react'
import Client from '../services/api'
import { BASE_URL } from '../services/api'
import PlayerApp from '../components/MediaPlayer'

const Playlist = ({ authenticated, user }) => {
  const [myPlayList, setMyPlaylist] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const getMySongs = async () => {
      const response = await Client.get(`${BASE_URL}userpage/${id}`)
      setMyPlaylist(response.data[0].songs)
    }
    getMySongs()
  }, [])

  return user && authenticated ? (
    <div>
      <ul className="songs">
        {myPlayList.map((songs) => (
          <div className="songs">
            <li key={songs.id}>
              <img src={songs.img} alt="image" />
              <h3>{songs.artists_name}</h3>
              <h4>{songs.genre}</h4>
              <form>
                <button>Remove</button>
              </form>
            </li>
          </div>
        ))}
      </ul>
      <PlayerApp />
    </div>
  ) : (
    <div>
      <h1>Please login to your account or Signup</h1>
    </div>
  )
}

export default Playlist
