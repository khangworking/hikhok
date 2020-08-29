import React from 'react';
import './App.css';
import Video from './Video'
import { useState, useEffect } from 'react';
import db from './firebaseConfig';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection('videos').orderBy('createdAt', 'desc').onSnapshot(snapshot => setVideos(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))))
  }, [])
  return (
    <div className="App">
      <div className="wrapper">
        {
          videos.map(({ url, channel, description, likes, song, messages, shares, id }) =>
            <Video key={id} id={id} channel={channel} description={description} likes={likes} shares={shares} song={song} messages={messages} url={url} />)
        }
      </div>
    </div>
  );
}

export default App;
