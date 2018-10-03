import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js'

class App extends React.Component {
    
  constructor(props) {
    
    super(props);
    this.state = {
      selectedVideo: exampleVideoData[0],
      searchedVideos: exampleVideoData
    };
    this.videoClick = this.videoClick.bind(this);
    
    // this.props.searchYouTube({'q':'react','max':5,'key':YOUTUBE_API_KEY}, this.handleSearch.bind(this));
    
  };
  
  componentDidMount() {
    this.getYouTubeVideos('dogs');    
    
  }
  
  getYouTubeVideos(query) {
    var options = {
      key:YOUTUBE_API_KEY,
      query:query
    };
    this.props.searchYouTube(options, (videos) => 
      this.setState({
        selectedVideo:videos[0],
        searchedVideos:videos
      })
    )
  }
  
  
  videoClick(video) {
    this.setState({selectedVideo: video});
  };
  
  handleSearch(response) {
    var videos = response;
    this.setState({searchedVideos: videos});
  }  

  //console.log(this.state.selectedVideo);
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div className="search">
              <Search handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
              </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer className='video-player' video={this.state.selectedVideo} />
          </div>
          <div className="col-md-5">
              <VideoList videos={this.state.searchedVideos} videoClick={this.videoClick}/> 
          </div>
        </div>
      </div>
    )
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
