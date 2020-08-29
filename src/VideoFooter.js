import React from "react";
import './VideoFooter.css';
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import grey from '@material-ui/core/colors/grey';
import Ticker from 'react-ticker';

function VideoFooter({ channel, description, song }) {
  return (
    <div className='video-footer'>
      <div className='video-text'>
        <h4>@{channel}</h4>
        <p>{description}</p>
        <div className="music">
          <MusicNoteIcon fontSize="small" className='music-icon' style={{ color: grey[50] }} />
          <Ticker mode="smooth" className='ticker'>
            {({ index }) => <>
              <h5>{song}</h5>
            </>
            }
          </Ticker>
        </div>
      </div>
      <img src='https://static.thenounproject.com/png/934821-200.png' className='record' alt='' />
    </div>
  )
}

export default VideoFooter