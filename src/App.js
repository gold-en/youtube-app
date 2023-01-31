import { useEffect } from 'react';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchYoutubeVideos from './api';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleFormSubmit = async term => {
    const response = await searchYoutubeVideos(term);

    setVideos(response);

    setSelectedVideo(response[0]);
  };

  useEffect(() => {
    handleFormSubmit('TED on atomic habits');
  }, []);

  const handleSelectedVideo = video => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={handleFormSubmit} />
      <div className=" phone ui grid">
        <div className=" phone ui row">
          <div className=" phone1 eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="phone1 five wide column">
            <VideoList videos={videos} onVideoSelect={handleSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
