import { useState, useEffect } from 'react'
import Client from '../services/api'
import { BASE_URL } from '../services/api'

const Browse = ({ authenticated, user, handleLogout }) => {
  const [genres, setGenres] = useState([])
  const [songs, setSongs] = useState([])

  useEffect(() => {
    const getSongs = async () => {
      const response = await Client.get(`${BASE_URL}music`)
      console.log(response)
      setSongs(response.data)
    }
    getSongs()
  }, [])
  return (
    <div>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <h3>{song.artists_name}</h3>
            <h4>{song.genre}</h4>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Browse
