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
   
    <div class="card" style="width: 18rem;">
    <img src="${this.albumArt}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="${this.title}">Card title</h5>
      <p class="
      ">${this.album} <p>${this.artist}</p> ${this.price}.</p>
      <audio controls src="${this.preview}"></audio>
      <a href="#" class="btn btn-primary" onclick="app.songsController.addSong('${this._id}')">Press Me</button></a>
    </div>
  </div>

        `;
  }

  get playlistTemplate() {
    return `
    <div class="card" style="width: 18rem;">
    <img src="${this.albumArt}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="${this.title}">Card title</h5>
      <p class="
      ">${this.album} <p>${this.artist}</p> ${this.price}.</p>
      <audio controls src="${this.preview}"></audio>
      <a href="#" class="btn btn-primary" onclick="app.songsController.removeSong('${this._id}')">Delete Me</button></a>
    </div>
  </div>
        `;
  }
}

{
  /* <p>${this._id}</p> */
}
