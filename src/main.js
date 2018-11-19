import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';
import searchEnterTrigger from './SearchTrigger';

searchEnterTrigger();

const album = spotify.album.getAlbum("2TsL9NFMTknpXO7P962oyj");
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');


album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));


