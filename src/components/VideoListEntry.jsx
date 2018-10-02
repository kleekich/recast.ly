class VideoListEntry extends React.component (
  constructor(props) {
    super(props);
    this.state = {
      done:false;
    };
  }
  onVideoClick() {
    
  }
  
  render(){
    return (
      <div className="videoItem" onClick={this.onVideoClick.bind()}>
        <div className="video-list-entry media">
          <div className="media-left media-middle">
            <img className="media-object" src={this.props.videoObject.snippet.thumbnails.default.url} alt="" />
          </div>
          <div className="media-body">
            <div className="video-list-entry-title">{this.props.videoObject.snippet.title}</div>
            <div className="video-list-entry-detail">{this.props.videoObject.snippet.description}</div>
          </div>
        </div>
      </div>
    )
  }
  
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
