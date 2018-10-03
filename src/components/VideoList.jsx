import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => {
      var vd = props.videos;
      console.log(vd);
      return (
          <div className="video-list" >
            {vd.map(videoObject => <VideoListEntry video={videoObject} videoClick={props.videoClick}/>)}
          </div>
      )
      
};
  

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
