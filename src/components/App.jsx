import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchYouTube: props.searchYouTube,
      selectedVideo: {
            kind: 'youtube#searchResult',
            etag: 'abQHWywil_AkNqdqji7_FqiK-u4/Ykxo_CqKu8F8kcm-iNgL332gQTY',
            id: {
              kind: 'youtube#video',
              videoId: '4ZAEBxGipoA'
            },
            snippet: {
              publishedAt: '2015-08-02T20:52:58.000Z',
              channelId: 'UCJbPGzawDH1njbqV-D5HqKw',
              title: 'React JS Tutorial for Beginners - 1 - Introduction',
              description: 'My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg',
                  width: 120,
                  height: 90
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/mqdefault.jpg',
                  width: 320,
                  height: 180
                },
                high: {
                  url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/hqdefault.jpg',
                  width: 480,
                  height: 360
                }
              },
              channelTitle: 'thenewboston',
              liveBroadcastContent: 'none'
            }
      }
    };
    this.videoClick = this.videoClick.bind(this);
  };
  
  videoClick(video) {
    this.setState({selectedVideo: video});
  };  

  //console.log(this.state.selectedVideo);
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer className='video-player' video={this.state.selectedVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videoClick={this.videoClick}/> 
          </div>
        </div>
      </div>
    )
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
