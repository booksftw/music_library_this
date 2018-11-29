var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function() {
    var playListArray = Object.entries(library['playlists']);
    var lengthOfPlayLists = playListArray.length;

    for (var i = 0; i < lengthOfPlayLists; i++) {
      var playlistIndex = playListArray[i][0];
      var playListName = playListArray[i][1].name;
      var playListNumberOfTracks = playListArray[i][1].tracks.length;

      var finalString = `${playlistIndex}: ${playListName} - ${playListNumberOfTracks} tracks`;
      console.log(finalString);
    }
  },

  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function(){
    var tracksArray = Object.entries(library['tracks']);
    var lengthOfTracklist = tracksArray.length;

    for (var i = 0; i < lengthOfTracklist; i++) {
      var tracklistName = tracksArray[i][0];
      var trackName = tracksArray[i][1].name;
      var trackArtist = tracksArray[i][1].artist;
      var trackAlbum = tracksArray[i][1].album;

      var finalString = `${tracklistName}: ${trackName} by ${trackArtist} (${trackAlbum})`;
      console.log(finalString);

    }
  },

  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function(playlistId){
    var libArray = Object.entries(library);
    var matchedTracksArray;

    var lengthOfMatchedTracks = matchedTracksArray;

    var tracksArray = Object.entries(library['tracks']);
    var lengthOfTracklist = tracksArray.length;

    // Find the playlist that matches playlistId
    var playListArray = Object.entries(library['playlists']);
    var lengthOfPlayLists = playListArray.length;
    for (var i = 0; i < lengthOfPlayLists; i++) {
      var playlistIndex = playListArray[i][0];

      //Found a match
      if (playlistIndex == playlistId) {
        var matchedPlaylistId = playListArray[i][1].id;
        var matchedPlaylistName = playListArray[i][1].name;
        var matchedPlayListNumberOfTracks = playListArray[i][1].tracks.length;;

        var finalStringForPlaylist = `${playlistIndex}: ${matchedPlaylistName} - ${matchedPlayListNumberOfTracks} tracks`;
        // PRINT TO SCREEN
        console.log(finalStringForPlaylist);

        var matchedPlayListArray = playListArray[i][1];
        matchedTracksArray = matchedPlayListArray.tracks;
      }
    }

    // Get the tracks values that match playlist
    for (track in tracksArray) {
      if (track in matchedTracksArray) {
        var tracklistId = tracksArray[track][1].id;
        var tracklistName = tracksArray[track][1].name;
        var tracklistArtist = tracksArray[track][1].artist;
        var tracklistAlbum = tracksArray[track][1].album;;

        var finalTrackString = `${tracklistId}: ${tracklistName} by ${tracklistArtist} (${tracklistAlbum})`;
        console.log(finalTrackString);
      }
    }
  },

  // adds an existing track to an existing playlist
  addTrackToPlaylist: function(trackId, playlistId){
    var playListArray = Object.entries(library['playlists']);
    var lengthOfPlayLists = playListArray.length;

    for (var i = 0; i < lengthOfPlayLists; i++) {

      if (playlistId === playListArray[i][0]){
        var playListTracksObj = playListArray[i][1].tracks;
        playListTracksObj.push(trackId);

        library.playlists[playlistId].tracks = playListTracksObj;
        console.log('Success, track added.' ,library.playlists[playlistId].tracks);

      }
    }
  },

  // generates a unique id
  // (use this for addTrack and addPlaylist)
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  // adds a track to the library
  addTrack: function(name, artist, album) {
    var newTrack = {};

    var uniqueId = this.uid();

    newTrack[uniqueId] = {};
    newTrack[uniqueId].id = uniqueId;
    newTrack[uniqueId].name = name;
    newTrack[uniqueId].artist =artist;
    newTrack[uniqueId].album = album;

    library.tracks = Object.assign(library.tracks, newTrack);
    console.log('Success Added Tracks');
    console.log(library.tracks);
  },

  // adds a playlist to the library
  addPlaylist: function(name, tracksArray) {
    var newPlaylist = {};

    var uniqueId = this.uid();

    newPlaylist[uniqueId] = {};
    newPlaylist[uniqueId].id = uniqueId;
    newPlaylist[uniqueId].name = name;
    newPlaylist[uniqueId].tracks = tracksArray;

    library.playlists = Object.assign(library.playlists, newPlaylist);
    console.log('Success Added Playlists');
    console.log(library.playlists);
  },

  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri")
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  printSearchResults: function(query) {

  }

}

////////////////////////// Function Calls
//
//
library.printPlaylists();
library.printTracks();
library.printPlaylist('p01');
library.addTrackToPlaylist('t01','p02');
library.addTrack('Wowz','Nick','awesome_album');
library.addPlaylist('AmazingName', ['t01']);
