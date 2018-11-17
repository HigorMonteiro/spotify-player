import spotify from './Spotify';
import renderAlbums from './AlbumList';

const albums = spotify.search.albums('Projota');
const albumList = document.getElementById('albums-list')

albums
  .then(data => renderAlbums(data.albums.items, albumList));


albums.then(data => console.log(data.albums.items, albumList));

