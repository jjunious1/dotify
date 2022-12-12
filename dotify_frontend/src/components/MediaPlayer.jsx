import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import {useState} from 'react'
import React from 'react'
import { useEffect } from 'react'

//referenced this for an audio player https://github.com/lhz516/react-h5-audio-player

const PlayerApp = (props) => {
  const [playlist, setPlaylist]= useState([])
  const [currentTrack, setTrackIndex] = React.useState(0)
  const handleClickNext = () => {
      console.log('click next')
        setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    };
  
  const handleEnd = () => {
    console.log('end')
    setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
  }

  useEffect(() => {
    const createPlaylist = () => {
        setPlaylist(...playlist, props.songs)
        console.log(playlist)
    }
    createPlaylist()
  },[])
  return (
      <div className="container" id="footer">
        <AudioPlayer
          volume="0.5"
          // src={playlist[currentTrack].src}
          showSkipControls
          onClickNext={handleClickNext}
          onEnded={handleEnd}
        />
      </div>
    );
}

export default PlayerApp
