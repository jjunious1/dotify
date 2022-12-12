// import AudioPlayer from 'react-h5-audio-player'
// import 'react-h5-audio-player/lib/styles.css'
// import {useState} from 'react'

// //referenced this for an audio player

// const PlayerApp = () => {
//   const [playlist, setPlaylist]= useState([])
//   const [currentTrack, setTrackIndex] = React.useState(0)
//   const handleClickNext = () => {
//       console.log('click next')
//         setTrackIndex((currentTrack) =>
//             currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
//         );
//     };
  
//   const handleEnd = () => {
//     console.log('end')
//     setTrackIndex((currentTrack) =>
//             currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
//         );
//   }
//   <AudioPlayer
//           volume="0.5"
//           src={playlist[currentTrack].src}
//           showSkipControls
//           onClickNext={handleClickNext}
//           onEnded={handleEnd}
//           // Try other props!
//         />
//   return (
//       <div className="container">
//       </div>
//     );
// }

// export default PlayerApp
