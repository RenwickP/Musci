export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return `
    <button type="button" class="btn btn-primary" onclick="app.songsController.addSong('${this._id}')">Press Me</button>
    <img src="${this.albumArt}" >
    <audio controls src="${this.preview}"></audio>
<p>${this.album}</p>
<p>${this.artist}</p>
<p>${this.title}</p>
<p>${this._id}</p>


        `;
  }

  get playlistTemplate() {
    return `
    <img src="${this.albumArt}" >
    <p>${this.title}</p>
    <p>${this._id}</p>

        `;
  }
}
