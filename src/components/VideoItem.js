import './VideoItem.css';

function VideoItem({ video, onVideoSelect }) {
  const handleSelectedVideo = () => onVideoSelect(video);

  return (
    <div onClick={handleSelectedVideo} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
