
var searchYouTube = ({query, key, max = 5}, callback) => {
  // TODO
  //options = {query:'dog', 'max': 5; key}
  console.log("Called");
   $.get('https://www.googleapis.com/youtube/v3/search', {
    'maxResults': max,
    'part': 'snippet',
    'q': query,
    'type': 'video',
    'key': key
   })
    .done(({items}) => {
       if (callback) {
        callback(items);
      }
    })
}
  

export default searchYouTube;
