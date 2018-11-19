import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';


const albums = spotify.search.albums('Projota');
const albumList = document.getElementById('albums-list');

const album = spotify.album.getAlbum("2TsL9NFMTknpXO7P962oyj");
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');


albums.then(data => renderAlbums(data.albums.items, albumList));

album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));

albums.then(data => console.log(data.albums.items, albumList));

