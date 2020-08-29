import React, { useRef, useState, useEffect } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ url, channel, description, song, likes, messages, shares, id }) {
  const [playing, setPlaying] = useState(true)
  const videoRef = useRef(null);
  const onVideoPressed = () => {
    if (playing) {
      videoRef.current.play()
      setPlaying(false)
    } else {
      videoRef.current.pause()
      setPlaying(true)
    }
  }
  useEffect(() => {
    let observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting === true) {
        videoRef.current.play()
        setPlaying(false)
      } else {
        videoRef.current.pause()
        setPlaying(true)
      }
    }, { threshold: [1] })
    observer.observe(videoRef.current)
  }, [])
  return (
    <div className='video'>
      <video onClick={onVideoPressed} className='player' ref={videoRef} loop src={url}></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar id={id} likes={likes} messges={messages} shares={shares} />
    </div>
  );
}

export default Video