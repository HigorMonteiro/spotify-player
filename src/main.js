import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';

const albums = spotify.search.albums('Projota');
const albumList = document.getElementById('albums-list');

const album = spotify.album.getAlbum("2TsL9NFMTknpXO7P962oyj");
const albumInfo = document.getElementById('album-info');

albums.then(data => renderAlbums(data.albums.items, albumList));
album.then(data => renderAlbumInfo(data, albumInfo));


albums.then(data => console.log(data.albums.items, albumList));

