import React, { useState, useEffect, useRef } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Message from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import db from "./firebaseConfig";

function VideoSidebar({ likes, messges, shares, id }) {
  const [liked, setLiked] = useState(false)
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    let videoRef = db.collection('videos').doc(id);
    let newVal;
    if (liked) {
      newVal = likes + 1
    } else {
      newVal = likes - 1
    }
    videoRef.update({ likes: newVal })
  }, [liked])

  return (
    <div className='sidebar'>
      <div className='section favorite'>
        {
          liked ?
            <FavoriteIcon fontSize="large" onClick={e => setLiked(false)} /> :
            <FavoriteBorderIcon fontSize="large" onClick={e => setLiked(true)} />
        }
        <p>{likes}</p>
      </div>
      <div className='section comment'>
        <Message fontSize="large" />
        <p>{messges}</p>
      </div>
      <div className='section share'>
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar;