const hash = window.location.hash
.substring(1)
.split('&')
.reduce(function (initial, item) {
  if (item) {
    var parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});
window.location.hash = '';

// Set token
let _token = hash.access_token;

const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = '2059ac459b3c47d49c492a2a7b7f4734';
const redirectUri = 'https://kpjbuchik.github.io/TuneAlmanac/';
const scopes = [
  'user-read-email','user-library-read'

];

// If there is no token, redirect to Spotify authorization
if (!_token) {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
}

var count = 0

$(document).ready(function () {
    console.log("ready")
    getPlaylists();
    getPlaylistTracks();
    getUserProfile();
    getAlbumTracklist();
    getNewReleases()
});
//get user image
function getUserProfile() {


    var queryUrl = "https://api.spotify.com/v1/me/"

    $.ajax({
        url: queryUrl,
        type: "GET",
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
        success: function (response) {
            console.log("1" + response)
            $(".user-name").text(response.display_name)
            $(".user-image").attr("src", response.images[0].url)
        }
    });


}
// $(".home").on("click",function(){

// getTop()

// })

$(document).ready(

    function getNewReleases() {

        var queryUrl = "https://api.spotify.com/v1/browse/new-releases"


        $.ajax({
            url: queryUrl,
            type: "GET",
            beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
            success: function (response) {
    
            console.log(response)
            // for (let i = 0; i < 6 + 1; i++) {

            $(".recent-album-cover").attr("src", response.albums.items[0].images[0].url)
            $(".recent-album-cover").attr("value", response.albums.items[0].id)

            $(".new-release-album-name1").html(response.albums.items[0].name)
            $(".new-release-artist-name1").html(response.albums.items[0].artists[0].name)

            $(".recent-album-cover2").attr("src", response.albums.items[1].images[0].url)
            $(".recent-album-cover2").attr("value", response.albums.items[1].id)

            $(".new-release-album-name2").html(response.albums.items[1].name)
            $(".new-release-artist-name2").html(response.albums.items[1].artists[0].name)


            $(".recent-album-cover3").attr("src", response.albums.items[2].images[0].url)
            $(".recent-album-cover3").attr("value", response.albums.items[2].id)
            $(".new-release-album-name3").html(response.albums.items[2].name)
            $(".new-release-artist-name3").html(response.albums.items[2].artists[0].name)


            $(".recent-album-cover4").attr("src", response.albums.items[3].images[0].url)
            $(".recent-album-cover4").attr("value", response.albums.items[3].id)
            $(".new-release-album-name4").html(response.albums.items[3].name)
            $(".new-release-artist-name4").html(response.albums.items[3].artists[0].name)


            $(".recent-album-cover5").attr("src", response.albums.items[4].images[0].url)
            $(".recent-album-cover5").attr("value", response.albums.items[4].id)
            $(".new-release-album-name5").html(response.albums.items[4].name)
            $(".new-release-artist-name5").html(response.albums.items[4].artists[0].name)

            $(".recent-album-cover6").attr("src", response.albums.items[5].images[0].url)
            $(".recent-album-cover6").attr("value", response.albums.items[5].id)
            $(".new-release-album-name6").html(response.albums.items[5].name)
            $(".new-release-artist-name6").html(response.albums.items[5].artists[0].name)




        }
    })
}
)


$(document).ready(

    function getTop() {

        var queryUrl = "https://api.spotify.com/v1/me/albums?limit=50&offset=5"


        $.ajax({
            url: queryUrl,
            type: "GET",
            beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
            success: function (response) {
            console.log(response)

            var check = Math.floor(Math.random() * 20)
            var check2 = Math.floor(Math.random() * 20)
            var check3 = Math.floor(Math.random() * 20)
            var check4 = Math.floor(Math.random() * 20)
            var check5 = Math.floor(Math.random() * 20)
            var check6 = Math.floor(Math.random() * 20)
            var check7 = Math.floor(Math.random() * 20)
            var check8 = Math.floor(Math.random() * 20)
            $(".album-picks-for-you1").attr("src", response.items[check].album.images[0].url)
            $(".album-picks-for-you1").attr("value", response.items[check].album.id)
            $(".picks-album1").html(response.items[check].album.name)
            $(".picks-artist1").html(response.items[check].album.artists[0].name)

            $(".album-picks-for-you2").attr("src", response.items[check2].album.images[0].url)
            $(".album-picks-for-you2").attr("value", response.items[check2].album.id)
            $(".picks-album2").html(response.items[check2].album.name)
            $(".picks-artist2").html(response.items[check2].album.artists[0].name)


            $(".album-picks-for-you3").attr("src", response.items[check3].album.images[0].url)
            $(".album-picks-for-you3").attr("value", response.items[check3].album.id)
            $(".picks-album3").html(response.items[check3].album.name)
            $(".picks-artist3").html(response.items[check3].album.artists[0].name)

            $(".album-picks-for-you4").attr("src", response.items[check4].album.images[0].url)
            $(".album-picks-for-you4").attr("value", response.items[check4].album.id)
            $(".picks-album4").html(response.items[check4].album.name)
            $(".picks-artist4").html(response.items[check4].album.artists[0].name)

            $(".album-picks-for-you5").attr("src", response.items[check5].album.images[0].url)
            $(".album-picks-for-you5").attr("value", response.items[check5].album.id)
            $(".picks-album5").html(response.items[check5].album.name)
            $(".picks-artist5").html(response.items[check5].album.artists[0].name)

            $(".album-picks-for-you6").attr("src", response.items[check6].album.images[0].url)
            $(".album-picks-for-you6").attr("value", response.items[check6].album.id)
            $(".picks-album6").html(response.items[check6].album.name)
            $(".picks-artist6").html(response.items[check6].album.artists[0].name)

            $(".album-picks-for-you7").attr("src", response.items[check7].album.images[0].url)
            $(".album-picks-for-you7").attr("value", response.items[check7].album.id)
            $(".picks-album7").html(response.items[check7].album.name)
            $(".picks-artist7").html(response.items[check7].album.artists[0].name)

            $(".album-picks-for-you8").attr("src", response.items[check8].album.images[0].url)
            $(".album-picks-for-you8").attr("value", response.items[check8].album.id)
            $(".picks-album8").html(response.items[check8].album.name)
            $(".picks-artist8").html(response.items[check8].album.artists[0].name)




            $(".on-this-day-cover1").attr("src", response.items[20].album.images[0].url)
            $(".on-this-day-cover1").attr("value", response.items[20].album.id)
            $(".on-this-day-album-name1").html(response.items[20].album.name)
            $(".on-this-day-artist-name1").html(response.items[20].album.artists[0].name)


            $(".on-this-day-cover2").attr("src", response.items[21].album.images[0].url)
            $(".on-this-day-cover2").attr("value", response.items[21].album.id)

            $(".on-this-day-album-name2").html(response.items[21].album.name)
            $(".on-this-day-artist-name2").html(response.items[21].album.artists[0].name)


            $(".on-this-day-cover3").attr("src", response.items[22].album.images[0].url)
            $(".on-this-day-cover3").attr("value", response.items[22].album.id)

            $(".on-this-day-album-name3").html(response.items[22].album.name)
            $(".on-this-day-artist-name3").html(response.items[22].album.artists[0].name)


        }
    })
}
)


//ajax call to populate sidebar with playlists
function getPlaylists() {


  
    var queryUrl = "https://api.spotify.com/v1/me/playlists"

    $.ajax({
        url: queryUrl,
        type: "GET",
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
        success: function (response) {
    $("ul").text(response.items[0].name)
        $("ul").attr("value", response.items[0].id)
        $("ul").on("click", function () {
            $(".album-cover-page").attr("src", response.items[0].images[0].url)
            $(".album-page-name").text(response.items[0].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })
        $("ul:nth-child(2)").text(response.items[1].name)
        $("ul:nth-child(2)").attr("value", response.items[1].id)
        $("ul:nth-child(2)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[1].images[0].url)
            $(".album-page-name").text(response.items[1].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })


        $("ul:nth-child(3)").text(response.items[2].name)
        $("ul:nth-child(3)").attr("value", response.items[2].id)
        $("ul:nth-child(3)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[2].images[0].url)
            $(".album-page-name").text(response.items[2].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })
        $("ul:nth-child(4)").text(response.items[3].name)
        $("ul:nth-child(4)").attr("value", response.items[3].id)
        $("ul:nth-child(4)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[3].images[0].url)
            $(".album-page-name").text(response.items[3].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(5)").text(response.items[4].name)
        $("ul:nth-child(5)").attr("value", response.items[4].id)
        $("ul:nth-child(5)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[4].images[0].url)
            $(".album-page-name").text(response.items[4].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(6)").text(response.items[5].name)
        $("ul:nth-child(6)").attr("value", response.items[5].id)
        $("ul:nth-child(6)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[5].images[0].url)
            $(".album-page-name").text(response.items[5].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(7)").text(response.items[6].name)
        $("ul:nth-child(7)").attr("value", response.items[6].id)
        $("ul:nth-child(7)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[6].images[0].url)
            $(".album-page-name").text(response.items[6].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(8)").text(response.items[7].name)
        $("ul:nth-child(8)").attr("value", response.items[7].id)
        $("ul:nth-child(8)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[7].images[0].url)
            $(".album-page-name").text(response.items[7].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(9)").text(response.items[8].name)
        $("ul:nth-child(9)").attr("value", response.items[8].id)
        $("ul:nth-child(9)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[8].images[0].url)
            $(".album-page-name").text(response.items[8].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(10)").text(response.items[9].name)
        $("ul:nth-child(10)").attr("value", response.items[9].id)
        $("ul:nth-child(10)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[9].images[0].url)
            $(".album-page-name").text(response.items[9].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(11)").text(response.items[10].name)
        $("ul:nth-child(11)").attr("value", response.items[10].id)
        $("ul:nth-child(11)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[10].images[0].url)
            $(".album-page-name").text(response.items[10].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(12)").text(response.items[11].name)
        $("ul:nth-child(12)").attr("value", response.items[11].id)
        $("ul:nth-child(12)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[11].images[0].url)
            $(".album-page-name").text(response.items[11].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(13)").text(response.items[12].name)
        $("ul:nth-child(13)").attr("value", response.items[12].id)
        $("ul:nth-child(13)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[12].images[0].url)
            $(".album-page-name").text(response.items[12].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(14)").text(response.items[13].name)
        $("ul:nth-child(14)").attr("value", response.items[13].id)
        $("ul:nth-child(14)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[13].images[0].url)
            $(".album-page-name").text(response.items[13].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(15)").text(response.items[14].name)
        $("ul:nth-child(15)").attr("value", response.items[14].id)
        $("ul:nth-child(15)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[14].images[0].url)
            $(".album-page-name").text(response.items[14].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })
        $("ul:nth-child(16)").text(response.items[15].name)
        $("ul:nth-child(16)").attr("value", response.items[15].id)
        $("ul:nth-child(16)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[15].images[0].url)
            $(".album-page-name").text(response.items[15].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(17)").text(response.items[16].name)
        $("ul:nth-child(17)").attr("value", response.items[16].id)
        $("ul:nth-child(17)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[16].images[0].url)
            $(".album-page-name").text(response.items[16].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(18)").text(response.items[17].name)
        $("ul:nth-child(18)").attr("value", response.items[17].id)
        $("ul:nth-child(18)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[17].images[0].url)
            $(".album-page-name").text(response.items[17].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })

        $("ul:nth-child(19)").text(response.items[18].name)
        $("ul:nth-child(19)").attr("value", response.items[18].id)
        $("ul:nth-child(19)").on("click", function () {
            $(".album-cover-page").attr("src", response.items[18].images[0].url)
            $(".album-page-name").text(response.items[18].name)
            $(".by-artist-album").text("Created by" + " " + response.items[0].owner.display_name)


        })


    }
})
}


function getPlaylistTracks() {

    $("ul, .genre-img").click(function () {

        var playlistId = $(this).attr("value")


        var queryUrl = "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks"

        $.ajax({
            url: queryUrl,
            type: "GET",
            beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
            success: function (response) {
                console.log(response)
            for (let i = 0; i < response.items.length + 1; i++) {
                let newTime = timeConversion(response.items[i].track.duration_ms)
                let trackTime = $("<p>").text(newTime).addClass("track-time")
                let results = response.items[i].track.name
                let tracklistDiv = $("<div>")
                tracklistDisplay = $("<p>").text(results).addClass("playlist-track")
                let tracklistArtist = $("<p>").text(response.items[i].track.artists[0].name).addClass("playlist-artist")
                $(tracklistArtist).attr("value", response.items[i].track.artists[0].id)
                let trackHr = $("<hr>")
                tracklistDiv.html(tracklistDisplay)
                $(".track-list").append(tracklistDiv)
                $(".track-list").append(trackHr)
                $(tracklistDiv).append(trackTime)
                $(tracklistDiv).append(tracklistArtist)
                $(".next-track").addClass("next-track-playlist")
                $(".previous-track").addClass("previous-track-playlist")


                $(".playlist-track").click(function (event) {
                    $(".play-button").attr("src", "assets/Component 60 – 2.svg")
                    event.preventDefault();
                    console.log(response)
                    $(".album-cover").attr("src", response.items[i].track.album.images[0].url)

                    $(".now-playing-artist").text(response.items[i].track.album.artists[0].name) //WHY?
                    $(".now-playing-song").text(response.items[i].track.name)

                    $("#preview-player").attr("src", response.items[i].track.preview_url)
                    $(".now-playing-artist").html(response.items[i].track.artist.name) //this makes it work for some reasons


                })



                $(".playlist-artist").on("click", function () {
                    $(".grid-container2").css("display", "inline-grid")
                    $(".grid-container3").css("display", "none")
                    $(".track-list").empty();
                    searchSpotifyNameClone(response.items[i].track.artists[0].id)
                    searchRelatedArtists(response.items[i].track.artists[0].id)
                    searchSpotify(response.items[i].track.artists[0].id);
                    searchAlbumCovers(response.items[i].track.artists[0].id);
                    $(".now-playing-artist").html(response.items[i].track.artist.name) //this makes it work for some reasons



                })
                $(".next-track-playlist").on("click", function () {
                    $(".album-cover").attr("src", response.items[i + 1].track.album.images[0].url)

                    $(".now-playing-artist").text(response.items[i + 1].track.album.artists[0].name) //WHY?
                    $(".now-playing-song").text(response.items[i + 1].track.name)

                    $("#preview-player").attr("src", response.items[i + 1].track.preview_url)
                    $(".now-playing-artist").html(response.items[i++].track.artist.name) //this makes it work for 


                })

                $(".previous-track-playlist").on("click", function () {

                    $(".album-cover").attr("src", response.items[i - 1].track.album.images[0].url)

                    $(".now-playing-artist").text(response.items[i - 1].track.album.artists[0].name) //WHY?
                    $(".now-playing-song").text(response.items[i - 1].track.name)

                    $("#preview-player").attr("src", response.items[i - 1].track.preview_url)
                    $(".now-playing-artist").html(response.items[i++].track.artist.name) //this makes it work for 

                })

            }
        }
    })
    })
    

}


//uhhhhh
$(".genre-img").on("click", function (event) {
    event.preventDefault()
    $(".album-page-title").text("Playlist")

    $(".grid-container3").css("display", "inline-grid")
    $(".grid-container").css("display", "hidden")
    $(".grid-container2").css("display", "hidden");
    getPlaylistTracks()

})

$(".cowboy").on("click", function (event) {
    event.preventDefault()
    $(".album-page-name").text("Country")
    $(".by-artist-album").text("Created by" + " " + "Kevin Buchik")

    $(".album-cover-page").attr("src", "assets/cowboy.svg")
})
$(".playground").on("click", function (event) {
    event.preventDefault()

    $(".album-cover-page").attr("src", "assets/playground.svg")
    $(".album-page-name").text("Pop Punk")

    $(".by-artist-album").text("Created by" + " " + "Kevin Buchik")

})

$(".psychedelic").on("click", function (event) {
    event.preventDefault()
    $(".album-page-name").text("Psychedelic")

    $(".album-cover-page").attr("src", "assets/Joshua Tree.svg")
    $(".by-artist-album").text("Created by" + " " + "Kevin Buchik")

})

$(".rocknroll").on("click", function (event) {
    event.preventDefault()
    $(".album-page-name").text("Road Trip")

    $(".album-cover-page").attr("src", "assets/locked.svg")
    $(".by-artist-album").text("Created by" + " " + "Kevin Buchik")

})

$(".metal").on("click", function (event) {
    event.preventDefault()
    $(".album-page-name").text("Metal")

    $(".album-cover-page").attr("src", "assets/pitchfork.svg")
    $(".by-artist-album").text("Created by" + " " + "Kevin Buchik")

})
$(".shattuck").on("click", function (event) {
    event.preventDefault()
    $(".album-page-name").text("Noise Rock")

    $(".album-cover-page").attr("src", "assets/shattuck.svg")
    $(".by-artist-album").text("Created by" + " " + "Kevin Buchik")

})
$(".jazz").on("click", function (event) {
    event.preventDefault()
    $(".album-page-name").text("Jazz")

    $(".album-cover-page").attr("src", "assets/jazz.svg")
    $(".by-artist-album").text("Created by" + " " + "Kevin Buchik")

})
$(".pancakes").on("click", function (event) {
    event.preventDefault()
    $(".album-page-name").text("Morning")

    $(".album-cover-page").attr("src", "assets/pancakes.svg")
    $(".by-artist-album").text("Created by" + " " + "Kevin Buchik")

})


//get artists top tracks and album covers
function searchSpotify(id) {

   
    var queryUrl = "https://api.spotify.com/v1/artists/" + id + "/top-tracks?country=us"

    $.ajax({
        url: queryUrl,
        type: "GET",
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
        success: function (response) {

        console.log(response)

        $(".popular-songs1").html("1" + " " + response.tracks[0].name)
        $(".popular-songs2").text("2" + " " + response.tracks[1].name)
        $(".popular-songs3").text("3" + " " + response.tracks[2].name)
        $(".popular-songs4").text("4" + " " + response.tracks[3].name)
        $(".popular-songs5").text("5" + " " + response.tracks[4].name)
        let time1 = timeConversion(response.tracks[0].duration_ms)
        let time2 = timeConversion(response.tracks[1].duration_ms)
        let time3 = timeConversion(response.tracks[2].duration_ms)
        let time4 = timeConversion(response.tracks[3].duration_ms)
        let time5 = timeConversion(response.tracks[4].duration_ms)


        $(".timez1").text(time1)
        $(".timez2").text(time2)
        $(".timez3").text(time3)
        $(".timez4").text(time4)
        $(".timez5").text(time5)

        $(".popular-songs1").on("click", function (event) {
            console.log(response)
            event.preventDefault();
            $("#preview-player").attr("src", response.tracks[0].preview_url)
            $(".now-playing-song").text(response.tracks[0].name)
            $(".now-playing-artist").text(response.tracks[0].artists[0].name)
            $(".album-cover").attr("src", response.tracks[0].album.images[0].url)
        })
        $(".popular-songs2").on("click", function (event) {
            event.preventDefault();
            $("#preview-player").attr("src", response.tracks[1].preview_url)
            $(".now-playing-song").text(response.tracks[1].name)
            $(".now-playing-song").text(response.tracks[1].name)
            $(".now-playing-artist").text(response.tracks[1].artists[0].name)
            $(".album-cover").attr("src", response.tracks[1].album.images[0].url)



        })
        $(".popular-songs3").on("click", function (event) {
            event.preventDefault();
            $("#preview-player").attr("src", response.tracks[2].preview_url)
            $(".now-playing-song").text(response.tracks[2].name)
            $(".now-playing-song").text(response.tracks[2].name)
            $(".now-playing-artist").text(response.tracks[2].artists[0].name)
            $(".album-cover").attr("src", response.tracks[2].album.images[0].url)


        })
        $(".popular-songs4").on("click", function (event) {
            event.preventDefault();
            $("#preview-player").attr("src", response.tracks[3].preview_url)
            $(".now-playing-song").text(response.tracks[3].name)
            $(".now-playing-song").text(response.tracks[3].name)
            $(".now-playing-artist").text(response.tracks[3].artists[0].name)
            $(".album-cover").attr("src", response.tracks[3].album.images[0].url)

        })
        $(".popular-songs5").on("click", function (event) {
            event.preventDefault();
            $("#preview-player").attr("src", response.tracks[4].preview_url)
            $(".now-playing-song").text(response.tracks[4].name)
            $(".now-playing-song").text(response.tracks[4].name)
            $(".now-playing-artist").text(response.tracks[4].artists[0].name)
            $(".album-cover").attr("src", response.tracks[4].album.images[0].url)

        })



        // $(".preview-player").html('<source src=' +response.tracks[0].preview_url + 'type="audio/mpeg"></source>')
        console.log(response.tracks[0].preview_url)
    }
});


}



//initial function to retrieve artists name, artist picture and populates other search functions wit id callbacks
function searchSpotifyName() {
    var inputArtist = $(".validationDefault01").val().trim() || $(".validationDefault02").val().trim() || $(".validationDefault03").val().trim() || $(".by-artist-album").text() || $(".playlist-artist").val();

   
    var queryUrl = "https://api.spotify.com/v1/search?q=" + inputArtist + "&type=artist&limit=1"
    $.ajax({
        url: queryUrl,
        type: "GET",
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
        success: function (response) {
        $(".header-image").css("background-image", "url(" + response.artists.items[0].images[0].url + ")")

        var artistName = (response.artists.items[0].name)
        var artistArray = artistName.split("")
        var artistSplit = artistName.split(" ")

        if (artistSplit.length === 1) {
            $(".band-header").text(artistSplit)
            $(".band-header2").text(artistSplit)
            $(".band-header2").css("transform", "scaleX(-1) rotate(180deg)")

        }
        if (artistSplit.length === 2) {
            $(".band-header").text(artistSplit[0])
            $(".band-header2").text(artistSplit[1])
            $(".band-header2").css("transform", "none")


        }

        if (artistSplit.length === 3) {
            $(".band-header").text(artistSplit[0]);
            $(".band-header2").text(artistSplit[1] + " " + " " + artistSplit[2])
            $(".band-header2").css("transform", "none")


        }
        // if (artistArray.length > 10) {
        //     $(".band-header").css("font-size", "4em")
        //     $(".band-header2").css("font-size", "4em")

        // }


        // $(".band-header").text(artistName)
        // $(".band-header").text(response.artists.items[0].name)
        searchAlbumCovers(response.artists.items[0].id)
        searchSpotify(response.artists.items[0].id)
        searchRelatedArtists(response.artists.items[0].id)
        searchSpotifyNameClone(response.artists.items[0].id)
        getPlaylistTracks(response.artists.items[0].id)

    }
});


}



function searchSpotifyNameClone(id) {

    var queryUrl = "https://api.spotify.com/v1/artists/" + id
    $.ajax({
        url: queryUrl,
        type: "GET",
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
        success: function (response) {
        $(".header-image").css("background-image", "url(" + response.images[0].url + ")")

        var artistName = (response.name)
        var artistArray = artistName.split("")

        var artistSplit = artistName.split(" ")
        var artistArray1 = artistSplit[0]


        if (artistSplit.length === 1) {
            $(".band-header").text(artistSplit)
            $(".band-header2").text(artistSplit)
            $(".band-header2").css("transform", "scaleX(-1) rotate(180deg)")
            $(".band-header").css("font-size", "5em")
            $(".band-header2").css("font-size", "5em")


        }
        if (artistSplit.length === 2) {
            $(".band-header").text(artistSplit[0])
            $(".band-header2").text(artistSplit[1])
            $(".band-header2").css("transform", "none")
            $(".band-header").css("font-size", "5em")
            $(".band-header2").css("font-size", "5em")



        }

        if (artistSplit.length === 3) {
            $(".band-header").text(artistSplit[0]);
            $(".band-header2").text(artistSplit[1] + " " + " " + artistSplit[2])
            $(".band-header2").css("transform", "none")
            $(".band-header").css("font-size", "5em")
            $(".band-header2").css("font-size", "5em")


        }
        if (artistSplit.length > 3) {
            $(".band-header").text(artistName);
            $(".band-header2").text(" ")

        }

        if (artistArray.length > 10) {
            $(".band-header").css("font-size", "4em")
            $(".band-header2").css("font-size", "4em")

        }

        if (artistArray.length > 12) {
            $(".band-header").css("font-size", "3em")
            $(".band-header2").css("font-size", "3em")

        }

        if (artistArray.length > 10 && artistSplit.length === 2) {
            $(".band-header").text(artistSplit[0])
            $(".band-header2").text(artistSplit[1])
            $(".band-header2").css("transform", "none")
            $(".band-header").css("font-size", "5em")
            $(".band-header2").css("font-size", "5em")


        }

        if (artistArray.length > 10 && artistSplit.length === 3) {

            $(".band-header").text(artistSplit[0]);
            $(".band-header2").text(artistSplit[1] + " " + " " + artistSplit[2])
            $(".band-header2").css("transform", "none")
            $(".band-header").css("font-size", "5em")
            $(".band-header2").css("font-size", "5em")

        }




        // $(".band-header").text(artistName)
        // $(".band-header").text(response.artists.items[0].name)


    }
});


}






//get top album covers
function searchAlbumCovers(id) {


   
    var queryUrl = "https://api.spotify.com/v1/artists/" + id + "/albums?market=us&limit=10"

    $.ajax({
        url: queryUrl,
        type: "GET",
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
        success: function (response) {

        $(".image-results").attr("src", response.items[0].images[0].url)
        $(".image-results").attr("value", response.items[0].id)
        $(".image-results2").attr("src", response.items[1].images[0].url)
        $(".image-results2").attr("value", response.items[1].id)

        $(".image-results3").attr("src", response.items[2].images[0].url)
        $(".image-results3").attr("value", response.items[2].id)

        $(".image-results4").attr("src", response.items[3].images[0].url)
        $(".image-results4").attr("value", response.items[3].id)

        $(".image-results5").attr("src", response.items[4].images[0].url)
        $(".image-results5").attr("value", response.items[4].id)

        $(".image-results6").attr("src", response.items[6].images[0].url)
        $(".image-results6").attr("value", response.items[6].id)


        $(".album-name").text(response.items[0].name)
        $(".album-name2").text(response.items[1].name)
        $(".album-name3").text(response.items[2].name)
        $(".album-name4").text(response.items[3].name)
        $(".album-name5").text(response.items[4].name)
        $(".album-name6").text(response.items[5].name)
        $(".album-name7").text(response.items[6].name)

        $(".more-albums").attr("src", response.items[i].images[0].url)
        $(".more-albums:nth-child(2)").attr("src", response.items[1].images[0].url)
        $(".more-albums:nth-child(3)").attr("src", response.items[2].images[0].url)
        $(".more-albums:nth-child(4)").attr("src", response.items[3].images[0].url)
        $(".more-albums:nth-child(5)").attr("src", response.items[4].images[0].url)
        $(".more-albums:nth-child(6)").attr("src", response.items[5].images[0].url)


        console.log(response.items[0].images[0].url)
        console.log(response)
    }
});


}


$(document).ready(

    function getAlbumTracklist() {
        $(".image-results, .on-this-day-cover, .album-picks-for-you, .recent-album-cover").click(function () {

            var albumId = $(this).attr("value");
            var queryUrl = "https://api.spotify.com/v1/albums/" + albumId + "/tracks"

            $.ajax({
                url: queryUrl,
                type: "GET",
                beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
                success: function (response) {
                                console.log(response)
                for (let i = 0; i < response.items.length + 1; i++) {

                    let tracklistDiv = $("<div>")
                    let results = response.items[i].name

                    tracklistDisplay = $("<p>").text(results).addClass("track")
                    let trackHr = $("<hr>")
                    let albumTrackDuration = response.items[i].duration_ms
                    let newAlbumTrackTime = timeConversion(albumTrackDuration)
                    let trackTime = $("<p>").text(newAlbumTrackTime).addClass("track-time")
                    let trackNumber = (response.items[i].track_number)
                    $(".next-track").addClass("next-track-album")
                    $(".previous-track").addClass("previous-track-album")

                    tracklistDiv.html(tracklistDisplay)

                    $(".track-list").append(tracklistDiv)
                    $(".track-list").append(trackHr)
                    $(tracklistDiv).append(trackTime)
                    $(tracklistDiv).prepend(trackNumber + " " + " " + " " + " ").addClass("track-number")


                    $(".track").on("click", function () {
                        $("#preview-player").attr("src", response.items[i].preview_url)
                         $(".play-button").attr("src", "assets/Component 60 – 2.svg")
        
                        $(".now-playing-song").html(response.items[i].name)

                        $(".now-playing-artist").html(response.items[i].artists[0].name)

                        $(".now-playing-artist").html(response.items[i].track.artists[0].name)//wtf 


                    })


                    $(".next-track-album").on("click", function () {
                        $("#preview-player").attr("src", response.items[i + 1].preview_url)

                        $(".now-playing-song").html(response.items[i + 1].name)

                        $(".now-playing-artist").html(response.items[i + 1].artists[0].name)
                        $(".now-playing-artist").html(response.items[i++].track.artists[0].name)//wtf 

                        console.log("working")

                    })
                    $(".previous-track").on("click", function () {
                        $("#preview-player").attr("src", response.items[i - 1].preview_url)

                        $(".now-playing-song").html(response.items[i - 1].name)

                        $(".now-playing-artist").html(response.items[i - 1].artists[0].name)
                        $(".now-playing-artist").html(response.items[i++].track.artists[0].name)//wtf 

                        console.log("working")

                    })



                }

            }
        })
        })
        
    
    }
    
    )

$(document).ready(
    function getAlbumInfo() {
        $(".image-results, .on-this-day-cover, .album-picks-for-you, .recent-album-cover").on("click", function () {
            var albumId = $(this).attr("value");
            var queryUrl = "https://api.spotify.com/v1/albums/" + albumId

            $.ajax({
                url: queryUrl,
                type: "GET",
                beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
                success: function (response) {
                console.log(response)

                $(".track-list").on("click", function (event) {
                    event.preventDefault();
                    console.log("plesework")
                    $(".album-cover").attr("src", response.images[0].url)


                })
                let releaseDate = (response.release_date);
                let releaseYear = releaseDate.split("-");
                $(".album-page-title").text("Album")
                $(".album-cover-page").attr("src", response.images[0].url)
                $(".album-page-name").text(response.name)
                $(".by-artist-album").text(response.artists[0].name)
                $(".release-date").text(releaseYear[0] + "-" + response.total_tracks + " Tracks")
                $(".label").html(response.label)

                $(".by-artist-album").on("click", function (event) {
                    event.preventDefault();
                    let backToArtist = $(".by-artist-album").text()
                    searchSpotifyNameClone(response.artists[0].id)
                    searchRelatedArtists(response.artists[0].id)
                    searchSpotify(response.artists[0].id);
                    searchAlbumCovers(response.artists[0].id);

                    $(".grid-container2").css("display", "inline-grid")
                    $(".grid-container3").css("display", "none")
                    $(".track-list").empty()

                })

            }
        })
        })
        
    
    }
    
    )
//get artists related artists
function searchRelatedArtists(id) {

    var queryUrl = "https://api.spotify.com/v1/artists/" + id + "/related-artists"

    $.ajax({
        url: queryUrl,
        type: "GET",
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
        success: function (response) {



        $(".related1").attr("src", response.artists[0].images[0].url)
        $(".related1").attr("value", response.artists[0].id)


        $(".related2").attr("src", response.artists[1].images[0].url)
        $(".related3").attr("src", response.artists[2].images[0].url)
        $(".related4").attr("src", response.artists[3].images[0].url)


        $(".name1").text(response.artists[0].name)
        $(".name2").text(response.artists[1].name)
        $(".name3").text(response.artists[2].name)
        $(".name4").text(response.artists[3].name)

        console.log(response)
        //when related artists are clicked 

        $(".circle1").on("click", function () {
            searchRelatedArtists(response.artists[0].id)
            searchSpotify(response.artists[0].id);
            searchAlbumCovers(response.artists[0].id);
            searchSpotifyNameClone(response.artists[0].id); //this one doesn't work
        })
        $(".circle2").on("click", function (event) {
            event.preventDefault();
            searchRelatedArtists(response.artists[1].id)
            searchSpotify(response.artists[1].id);
            searchAlbumCovers(response.artists[1].id);
            searchSpotifyNameClone(response.artists[1].id); //this one doesn't work
        })
        $(".circle3").on("click", function (event) {
            event.preventDefault();
            searchRelatedArtists(response.artists[2].id)
            searchSpotify(response.artists[2].id);
            searchAlbumCovers(response.artists[2].id);
            searchSpotifyNameClone(response.artists[2].id); //this one doesn't work
        })
        $(".circle4").on("click", function (event) {
            event.preventDefault();
            searchRelatedArtists(response.artists[3].id)
            searchSpotify(response.artists[3].id);
            searchAlbumCovers(response.artists[3].id);
            searchSpotifyNameClone(response.artists[3].id); //this one doesn't work
        })

    }
});


}

function timeConversion(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

$(".home").on("click", function (event) {
    event.preventDefault();
    $(".grid-container4").css("display", "inline-grid")
    $(".grid-container").css("display", "hidden")
    $(".grid-container2").css("display", "hidden")


})
$("ul").on("click", function (event) {

    event.preventDefault();
    console.log("JESUS")

    $(".grid-container3").css("display", "inline-grid")
    $(".grid-container").css("display", "hidden")
    $(".grid-container2").css("display", "hidden")
    $(".grid-container4").css("display", "none")

    $(".track-list").empty()
    getPlaylistTracks();
    $(".album-page-title").text("Playlist")


})

$(".top-albums").on("click", function () {

    $(".grid-container3").css("display", "inline-grid")
    getAlbumInfo()
    getAlbumTracklist();
    searchAlbumCovers();
    $(".track-list").empty()


})
$(".image-results, .on-this-day-cover, .album-picks-for-you, .recent-album-cover").on("click", function () {
    $(".grid-container3").css("display", "inline-grid")
    $(".grid-container4").css("display", "none")
    $(".track-list").empty()

})



$(".browse").on("click", function (event) {
    event.preventDefault();
    $(".grid-container").css("display", "inline-grid")
    $(".grid-container3").css("display", "none")
    $(".grid-container2").css("display", "none")
    $(".grid-container4").css("display", "none")

    $(".track-list").empty()



})


$(".play-button").on("click", function (event) {
    event.preventDefault();
    $(".play-button").attr("src", "assets/play2.svg")
    
    console.log(count)
    count++;
    var play = $(".play-button")
    var video = $("#preview-player")
    if (count % 2 === 0) {
        video.trigger('play')
        $(".play-button").attr("src", "assets/Component 60 – 2.svg")

    }
    else { video.trigger("pause") }


}
)

$(".popular-songs").on("click", function(event){
    event.preventDefault();
    console.log("bitch")
    $(".play-button").attr("src", "assets/Component 60 – 2.svg")


})
var submitCount = 0
$(".submit-button, .searchButton").on("click", function (event) {
    event.preventDefault();
    console.log("value: " + $(".validationDefault01").val())
    submitCount++;

    if ($(".validationDefault01").val() !== "") {
        searchSpotify();
        searchSpotifyName();
        searchAlbumCovers();

    }
    $(".grid-container2").css("display", "inline-grid")
    $(".grid-container3").css("display", "none")
    $(".grid-container4").css("display", "none")

    $(".validationDefault01").val("")
    $(".track-list").empty()


})

$(".submit-button2, .searchButton").on("click", function (event) {
    event.preventDefault();
    console.log("value:" + $(".validationDefault02").val())
    submitCount++;
    if ($(".validationDefault02").val() !== "") {
        searchSpotify();
        searchSpotifyName();
        searchAlbumCovers();
    }

    $(".validationDefault02").val("")
    $(".track-list").empty()
    $(".grid-container4").css("display", "none")


})
$(".submit-button3, .searchButton").on("click", function (event) {
    event.preventDefault();
    console.log("value:" + $(".validationDefault03").val())
    submitCount++;
    $(".grid-container3").css("display", "none")
    $(".grid-container4").css("display", "none")

    if ($(".validationDefault03").val() !== "") {
        $(".grid-container2").css("display", "inline-grid")

        searchSpotify();
        searchSpotifyName();
        searchAlbumCovers();
        searchSpotifyNameClone();
    }




    $(".validationDefault03").val("")
    $(".track-list").empty()

})
$(".submit-button4, .searchButton").on("click", function (event) {
    event.preventDefault();
    console.log("value:" + $(".validationDefault03").val())
    submitCount++;
    $(".grid-container3").css("display", "none")
    $(".grid-container4").css("display", "none")

    if ($(".validationDefault04").val() !== "") {
        $(".grid-container2").css("display", "inline-grid")

        searchSpotify();
        searchSpotifyName();
        searchAlbumCovers();
        searchSpotifyNameClone();
    }




    $(".validationDefault04").val("")
    $(".track-list").empty()

})

$('.volume').on('change', function () {
    $('#preview-player').prop("volume", this.value);
});


var vid = document.getElementById("preview-player");

vid.ontimeupdate = function () { myFunction() };

function myFunction() {
    console.log("current-time" + vid.currentTime)
    document.getElementById("demo").innerHTML = vid.currentTime;
}


var vid = document.getElementById("preview-player");
vid.ontimeupdate = function () {
    var percentage = (vid.currentTime / vid.duration) * 100;
    $("#custom-seekbar span").css("width", percentage + "%");
};

$("#custom-seekbar").on("click", function (e) {
    var offset = $(this).offset();
    var left = (e.pageX - offset.left);
    var totalWidth = $("#custom-seekbar").width();
    var percentage = (left / totalWidth);
    var vidTime = vid.duration * percentage;
    vid.currentTime = vidTime;
});//click()



//web audio api


var audioCtx = window.AudioContext || window.webkitAudioContext;
var audioContext, canvasContext;

var filters = [];

var analyser;
var width, height;
var dataArray, bufferLength;
var masterGain, stereoPanner;
var eqSwitch = 0

$("#stop-eq").on("click", function () {




})


$(".slider").on("click", function () {
    eqSwitch++;
    audioContext = new audioCtx()
    buildAudioGraph();

});

function buildAudioGraph() {
    var mediaElement = document.getElementById('preview-player');
    var sourceNode = audioContext.createMediaElementSource(mediaElement);

    analyser = audioContext.createAnalyser();

    analyser.fftSize = 512;
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);



    [60, 170, 350, 1000, 3500, 10000].forEach(function (freq, i) {
        var eq = audioContext.createBiquadFilter();
        eq.frequency.value = freq;
        eq.type = "peaking";
        eq.gain.value = 0;
        filters.push(eq);
    });

    sourceNode.connect(filters[0]);
    for (var i = 0; i < filters.length - 1; i++) {
        filters[i].connect(filters[i + 1]);
    }

    masterGain = audioContext.createGain();
    masterGain.value = 1;


    filters[filters.length - 1].connect(masterGain);

    stereoPanner = audioContext.createStereoPanner();
    masterGain.connect(stereoPanner);

    stereoPanner.connect(analyser);
    analyser.connect(audioContext.destination);
}



function changeGain(sliderVal, nbFilter) {
    var value = parseFloat(sliderVal);
    filters[nbFilter].gain.value = value;

    var output = document.querySelector("#gain" + nbFilter);
    output.value = value + " dB";


}







//dynamically generate holders for images and text (maybe?)

//add homepage like in your adobe xd template