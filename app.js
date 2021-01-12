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
    'user-read-email', 'user-library-read'

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
    getTop()
    document.querySelector(".grid-container3").style.display = "none"

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
            var allUserName = document.getElementsByClassName("user-name")

            for (i = 0; i < allUserName.length; i++) {
                allUserName[i].innerText = response.display_name;
            }
            var allUserImage = document.getElementsByClassName("user-image2")

            for (i = 0; i < allUserImage.length; i++) {
                allUserImage[i].setAttribute("src", response.images[0].url)
            }

            //document.querySelector(".user-name").innerText(response.display_name)
            // allUserName.innerText = (response.display_name)
            // allUserImage.setAttribute("src", response.images[0].url)
        }

    });


}
// document.querySelector(".home").onClick(functiaddEventListener(){

// getTop()

// })


function getNewReleases() {

    var queryUrl = "https://api.spotify.com/v1/browse/new-releases"


    $.ajax({
        url: queryUrl,
        type: "GET",
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
        success: function (response) {

            console.log(response)

            var allRecentCovers = document.getElementsByClassName("recent-album-cover")
            for (i = 1; i < allRecentCovers.length; i++) {
                allRecentCovers[i].setAttribute("src", response.albums.items[i].images[0].url)
            }
            var allRecentCovers = document.getElementsByClassName("recent-album-cover")
            for (i = 0; i < allRecentCovers.length; i++) {
                allRecentCovers[i].setAttribute("value", response.albums.items[i].id)
            }
            var allRecentArtistNames = document.getElementsByClassName("new-release-artist-name")
            for (i = 1; i < allRecentArtistNames.length; i++) {
                allRecentArtistNames[i].innerHTML = (response.albums.items[i].artists[0].name)
            }
            var allRecentAlbumNames = document.getElementsByClassName("new-release-album-name")
            for (i = 1; i < allRecentAlbumNames.length; i++) {
                allRecentAlbumNames[i].innerHTML = (response.albums.items[i].name)
            }



            // document.querySelector(".recent-album-cover").setAttribute("src", response.albums.items[0].images[0].url)

            // document.querySelector(".recent-album-cover").setAttribute("value", response.albums.items[0].id)

            // document.querySelector(".new-release-album-name1").innerHTML = (response.albums.items[0].name)
            // document.querySelector(".new-release-artist-name1").innerHTML = (response.albums.items[0].artists[0].name)

            // document.querySelector(".recent-album-cover2").setAttribute("src", response.albums.items[1].images[0].url)
            // document.querySelector(".recent-album-cover2").setAttribute("value", response.albums.items[1].id)

            // document.querySelector(".new-release-album-name2").innerHTML = (response.albums.items[1].name)
            // document.querySelector(".new-release-artist-name2").innerHTML = (response.albums.items[1].artists[0].name)


            // document.querySelector(".recent-album-cover3").setAttribute("src", response.albums.items[2].images[0].url)
            // document.querySelector(".recent-album-cover3").setAttribute("value", response.albums.items[2].id)
            // document.querySelector(".new-release-album-name3").innerHTML = (response.albums.items[2].name)
            // document.querySelector(".new-release-artist-name3").innerHTML = (response.albums.items[2].artists[0].name)


            // document.querySelector(".recent-album-cover4").setAttribute("src", response.albums.items[3].images[0].url)
            // document.querySelector(".recent-album-cover4").setAttribute("value", response.albums.items[3].id)
            // document.querySelector(".new-release-album-name4").innerHTML = (response.albums.items[3].name)
            // document.querySelector(".new-release-artist-name4").innerHTML = (response.albums.items[3].artists[0].name)


            // document.querySelector(".recent-album-cover5").setAttribute("src", response.albums.items[4].images[0].url)
            // document.querySelector(".recent-album-cover5").setAttribute("value", response.albums.items[4].id)
            // document.querySelector(".new-release-album-name5").innerHTML = (response.albums.items[4].name)
            // document.querySelector(".new-release-artist-name5").innerHTML = (response.albums.items[4].artists[0].name)

            // document.querySelector(".recent-album-cover6").setAttribute("src", response.albums.items[5].images[0].url)
            // document.querySelector(".recent-album-cover6").setAttribute("value", response.albums.items[5].id)
            // document.querySelector(".new-release-album-name6").innerHTML = (response.albums.items[5].name)
            // document.querySelector(".new-release-artist-name6").innerHTML = (response.albums.items[5].artists[0].name)




        }
    })
}




function getTop() {

    var queryUrl = "https://api.spotify.com/v1/me/albums?limit=50&offset=5"


    $.ajax({
        url: queryUrl,
        type: "GET",
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
        success: function (response) {
            console.log(response)

            // var check = Math.floor(Math.random() * 20)
            // var check2 = Math.floor(Math.random() * 20)
            // var check3 = Math.floor(Math.random() * 20)
            // var check4 = Math.floor(Math.random() * 20)
            // var check5 = Math.floor(Math.random() * 20)
            // var check6 = Math.floor(Math.random() * 20)
            // var check7 = Math.floor(Math.random() * 20)
            // var check8 = Math.floor(Math.random() * 20)


            var allSavedAlbums = document.getElementsByClassName("album-picks-for-you")
            for (i = 1; i < allSavedAlbums.length; i++) {
                allSavedAlbums[i].setAttribute("src", response.items[i].album.images[0].url)
            }

            var allSavedArtists = document.getElementsByClassName("picks-artist")
            for (i = 1; i < allSavedArtists.length; i++) {
                allSavedArtists[i].innerHTML = (response.items[i].album.artists[0].name)
            }

            var allSavedAlbumTitle = document.getElementsByClassName("picks-album")
            for (i = 1; i < allSavedAlbumTitle.length; i++) {
                allSavedAlbumTitle[i].innerHTML = (response.items[i].album.name)
            }


            // document.querySelector(".album-picks-for-you1").setAttribute("src", response.items[check].album.images[0].url)
            // document.querySelector(".album-picks-for-you1").setAttribute("value", response.items[check].album.id)
            // document.querySelector(".picks-album1").innerHTML = (response.items[check].album.name)
            // document.querySelector(".picks-artist1").innerHTML = (response.items[check].album.artists[0].name)

            // document.querySelector(".album-picks-for-you2").setAttribute("src", response.items[check2].album.images[0].url)
            // document.querySelector(".album-picks-for-you2").setAttribute("value", response.items[check2].album.id)
            // document.querySelector(".picks-album2").innerHTML = (response.items[check2].album.name)
            // document.querySelector(".picks-artist2").innerHTML = (response.items[check2].album.artists[0].name)


            // document.querySelector(".album-picks-for-you3").setAttribute("src", response.items[check3].album.images[0].url)
            // document.querySelector(".album-picks-for-you3").setAttribute("value", response.items[check3].album.id)
            // document.querySelector(".picks-album3").innerHTML = (response.items[check3].album.name)
            // document.querySelector(".picks-artist3").innerHTML = (response.items[check3].album.artists[0].name)

            // document.querySelector(".album-picks-for-you4").setAttribute("src", response.items[check4].album.images[0].url)
            // document.querySelector(".album-picks-for-you4").setAttribute("value", response.items[check4].album.id)
            // document.querySelector(".picks-album4").innerHTML = (response.items[check4].album.name)
            // document.querySelector(".picks-artist4").innerHTML = (response.items[check4].album.artists[0].name)

            // document.querySelector(".album-picks-for-you5").setAttribute("src", response.items[check5].album.images[0].url)
            // document.querySelector(".album-picks-for-you5").setAttribute("value", response.items[check5].album.id)
            // document.querySelector(".picks-album5").innerHTML = (response.items[check5].album.name)
            // document.querySelector(".picks-artist5").innerHTML = (response.items[check5].album.artists[0].name)

            // document.querySelector(".album-picks-for-you6").setAttribute("src", response.items[check6].album.images[0].url)
            // document.querySelector(".album-picks-for-you6").setAttribute("value", response.items[check6].album.id)
            // document.querySelector(".picks-album6").innerHTML = (response.items[check6].album.name)
            // document.querySelector(".picks-artist6").innerHTML = (response.items[check6].album.artists[0].name)

            // document.querySelector(".album-picks-for-you7").setAttribute("src", response.items[check7].album.images[0].url)
            // document.querySelector(".album-picks-for-you7").setAttribute("value", response.items[check7].album.id)
            // document.querySelector(".picks-album7").innerHTML = (response.items[check7].album.name)
            // document.querySelector(".picks-artist7").innerHTML = (response.items[check7].album.artists[0].name)

            // document.querySelector(".album-picks-for-you8").setAttribute("src", response.items[check8].album.images[0].url)
            // document.querySelector(".album-picks-for-you8").setAttribute("value", response.items[check8].album.id)
            // document.querySelector(".picks-album8").innerHTML = (response.items[check8].album.name)
            // document.querySelector(".picks-artist8").innerHTML = (response.items[check8].album.artists[0].name)

            var allOnDayCover = document.getElementsByClassName("on-this-day-cover")
            for (i = 1; i < allOnDayCover.length; i++) {
                allOnDayCover[i].setAttribute("src", response.items[i].album.images[0].url)
            }

            var allOnDayAlbum = document.getElementsByClassName("on-this-day-album-name")
            for (i = 1; i < allOnDayAlbum.length; i++) {
                allOnDayAlbum[i].innerHTML = (response.items[i].album.name)
            }
            var allOnDayArtist = document.getElementsByClassName("on-this-day-artist-name")
            for (i = 1; i < allOnDayArtist.length; i++) {
                allOnDayArtist[i].innerHTML = (response.items[i].album.artists[0].name)
            }


    


            // document.querySelector(".on-this-day-cover1").setAttribute("src", response.items[20].album.images[0].url)
            // document.querySelector(".on-this-day-cover1").setAttribute("value", response.items[20].album.id)
            // document.querySelector(".on-this-day-album-name1").innerHTML = (response.items[20].album.name)
            // document.querySelector(".on-this-day-artist-name1").innerHTML = (response.items[20].album.artists[0].name)


            // document.querySelector(".on-this-day-cover2").setAttribute("src", response.items[21].album.images[0].url)
            // document.querySelector(".on-this-day-cover2").setAttribute("value", response.items[21].album.id)

            // document.querySelector(".on-this-day-album-name2").innerHTML = (response.items[21].album.name)
            // document.querySelector(".on-this-day-artist-name2").innerHTML = (response.items[21].album.artists[0].name)


            // document.querySelector(".on-this-day-cover3").setAttribute("src", response.items[22].album.images[0].url)
            // document.querySelector(".on-this-day-cover3").setAttribute("value", response.items[22].album.id)

            // document.querySelector(".on-this-day-album-name3").innerHTML = (response.items[22].album.name)
            // document.querySelector(".on-this-day-artist-name3").innerHTML = (response.items[22].album.artists[0].name)


        }
    })
}



//ajax call to populate sidebar with playlists
function getPlaylists() {



    var queryUrl = "https://api.spotify.com/v1/me/playlists"

    $.ajax({
        url: queryUrl,
        type: "GET",
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
        success: function (response) {

            var allPlaylistList = document.getElementsByClassName("playlist")
            for (i = 0; i < allPlaylistList.length; i++) {
                allPlaylistList[i].innerText = (response.items[i].name)
            }

            for (i = 0; i < allPlaylistList.length; i++) {
                allPlaylistList[i].setAttribute("value", response.items[i].id);
            }

            var allPlaylistList2 = document.getElementsByClassName("playlist2")
            for (i = 0; i < allPlaylistList2.length; i++) {
                allPlaylistList2[i].innerText = (response.items[i].name)
            }

            for (i = 0; i < allPlaylistList2.length; i++) {
                allPlaylistList2[i].setAttribute("value", response.items[i].id);
            }
            var allPlaylistList3 = document.getElementsByClassName("playlist3")
            for (i = 0; i < allPlaylistList3.length; i++) {
                allPlaylistList3[i].innerText = (response.items[i].name)
            }

            for (i = 0; i < allPlaylistList3.length; i++) {
                allPlaylistList3[i].setAttribute("value", response.items[i].id);
            }
            var allPlaylistList4 = document.getElementsByClassName("playlist4")
            for (i = 0; i < allPlaylistList4.length; i++) {
                allPlaylistList4[i].innerText = (response.items[i].name)
            }

            for (i = 0; i < allPlaylistList4.length; i++) {
                allPlaylistList4[i].setAttribute("value", response.items[i].id);
            }
            // document.querySelector

            function playlistClick (event){
                event.preventDefault();
                var allAlbumCoverPage = document.getElementsByClassName("album-cover-page")
                for (i = 0; i < allAlbumCoverPage.length; i++) {
                    allAlbumCoverPage[i].setAttribute("src", response.items[i].images[0].url)
                }
                var allAlbumPageName=document.getElementsByClassName("album-page-name")
                for (i = 0; i < allAlbumPageName.length; i++) {
                    allAlbumPageName[i].innerText = (response.items[i].name)
                }
                var allByAristAlbum = document.getElementsByClassName("by-artist-album")
                for (i = 0; i < allByAristAlbum.length; i++) {
                    allByAristAlbum[i].innerText = ("Created by" + " " + response.items[i].owner.display_name)
                }
            }

            var allPlaylistLinks = document.getElementsByClassName("playlist")
            for (var i = 0; i < allPlaylistLinks.length; i++) {
                allPlaylistLinks[i].addEventListener('click', playlistClick, false);
            }


          
            // document.querySelector("ul").onClick = function () {

            //     for (i = 0; i < allPlaylistList4.length; i++) {
            //         allPlaylistList4[i].setAttribute("value", response.items[i].id);
            //     }
    



            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[0].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[0].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }
            // document.querySelector("ul:nth-child(2)").innerText = (response.items[1].name)
            // document.querySelector("ul:nth-child(2)").setAttribute("value", response.items[1].id)
            // document.querySelector("ul:nth-child(2)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[1].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[1].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }


            // document.querySelector("ul:nth-child(3)").innerText = (response.items[2].name)
            // document.querySelector("ul:nth-child(3)").setAttribute("value", response.items[2].id)
            // document.querySelector("ul:nth-child(3)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[2].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[2].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }
            // document.querySelector("ul:nth-child(4)").innerText = (response.items[3].name)
            // document.querySelector("ul:nth-child(4)").setAttribute("value", response.items[3].id)
            // document.querySelector("ul:nth-child(4)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[3].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[3].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }

            // document.querySelector("ul:nth-child(5)").innerText = (response.items[4].name)
            // document.querySelector("ul:nth-child(5)").setAttribute("value", response.items[4].id)
            // document.querySelector("ul:nth-child(5)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[4].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[4].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }

            // document.querySelector("ul:nth-child(6)").innerText = (response.items[5].name)
            // document.querySelector("ul:nth-child(6)").setAttribute("value", response.items[5].id)
            // document.querySelector("ul:nth-child(6)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[5].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[5].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }

            // document.querySelector("ul:nth-child(7)").innerText = (response.items[6].name)
            // document.querySelector("ul:nth-child(7)").setAttribute("value", response.items[6].id)
            // document.querySelector("ul:nth-child(7)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[6].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[6].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }

            // document.querySelector("ul:nth-child(8)").innerText = (response.items[7].name)
            // document.querySelector("ul:nth-child(8)").setAttribute("value", response.items[7].id)
            // document.querySelector("ul:nth-child(8)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[7].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[7].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }

            // document.querySelector("ul:nth-child(9)").innerText = (response.items[8].name)
            // document.querySelector("ul:nth-child(9)").setAttribute("value", response.items[8].id)
            // document.querySelector("ul:nth-child(9)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[8].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[8].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }

            // document.querySelector("ul:nth-child(10)").innerText = (response.items[9].name)
            // document.querySelector("ul:nth-child(10)").setAttribute("value", response.items[9].id)
            // document.querySelector("ul:nth-child(10)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[9].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[9].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }

            // document.querySelector("ul:nth-child(11)").innerText = (response.items[10].name)
            // document.querySelector("ul:nth-child(11)").setAttribute("value", response.items[10].id)
            // document.querySelector("ul:nth-child(11)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[10].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[10].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }

            // document.querySelector("ul:nth-child(12)").innerText = (response.items[11].name)
            // document.querySelector("ul:nth-child(12)").setAttribute("value", response.items[11].id)
            // document.querySelector("ul:nth-child(12)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[11].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[11].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }

            // document.querySelector("ul:nth-child(13)").innerText = (response.items[12].name)
            // document.querySelector("ul:nth-child(13)").setAttribute("value", response.items[12].id)
            // document.querySelector("ul:nth-child(13)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[12].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[12].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }

            // document.querySelector("ul:nth-child(14)").innerText = (response.items[13].name)
            // document.querySelector("ul:nth-child(14)").setAttribute("value", response.items[13].id)
            // document.querySelector("ul:nth-child(14)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[13].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[13].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }

            // document.querySelector("ul:nth-child(15)").innerText = (response.items[14].name)
            // document.querySelector("ul:nth-child(15)").setAttribute("value", response.items[14].id)
            // document.querySelector("ul:nth-child(15)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[14].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[14].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }
            // document.querySelector("ul:nth-child(16)").innerText = (response.items[15].name)
            // document.querySelector("ul:nth-child(16)").setAttribute("value", response.items[15].id)
            // document.querySelector("ul:nth-child(16)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[15].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[15].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }

            // document.querySelector("ul:nth-child(17)").innerText = (response.items[16].name)
            // document.querySelector("ul:nth-child(17)").setAttribute("value", response.items[16].id)
            // document.querySelector("ul:nth-child(17)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[16].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[16].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }

            // document.querySelector("ul:nth-child(18)").innerText = (response.items[17].name)
            // document.querySelector("ul:nth-child(18)").setAttribute("value", response.items[17].id)
            // document.querySelector("ul:nth-child(18)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[17].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[17].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }

            // document.querySelector("ul:nth-child(19)").innerText = (response.items[18].name)
            // document.querySelector("ul:nth-child(19)").setAttribute("value", response.items[18].id)
            // document.querySelector("ul:nth-child(19)").onClick = function () {
            //     document.querySelector(".album-cover-page").setAttribute("src", response.items[18].images[0].url)
            //     document.querySelector(".album-page-name").innerText = (response.items[18].name)
            //     document.querySelector(".by-artist-album").innerText = ("Created by" + " " + response.items[0].owner.display_name)


            // }


        }
    })
}


function getPlaylistTracks() {

    document.querySelector("ul, .genre-img").click(function () {

        var playlistId = document.querySelector(this).setAttribute("value")


        var queryUrl = "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks"

        $.ajax({
            url: queryUrl,
            type: "GET",
            beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
            success: function (response) {
                console.log(response)
                for (let i = 0; i < response.items.length + 1; i++) {
                    let newTime = timeConversiaddEventListener(response.items[i].track.duration_ms)
                    let trackTime = document.querySelector("<p>").innerText = (newTime).addClass("track-time")
                    let results = response.items[i].track.name
                    let tracklistDiv = document.querySelector("<div>")
                    tracklistDisplay = document.querySelector("<p>").innerText = (results).addClass("playlist-track")
                    let tracklistArtist = document.querySelector("<p>").innerText = (response.items[i].track.artists[0].name).addClass("playlist-artist")
                    document.querySelector(tracklistArtist).setAttribute("value", response.items[i].track.artists[0].id)
                    let trackHr = document.querySelector("<hr>")
                    tracklistDiv.html(tracklistDisplay)
                    document.querySelector(".track-list").appendChild(tracklistDiv)
                    document.querySelector(".track-list").appendChild(trackHr)
                    document.querySelector(tracklistDiv).appendChild(trackTime)
                    document.querySelector(tracklistDiv).appendChild(tracklistArtist)
                    document.querySelector(".next-track").addClass("next-track-playlist")
                    document.querySelector(".previous-track").addClass("previous-track-playlist")


                    document.querySelector(".playlist-track").addEventListener("click", function (event) {
                        event.preventDefault();
                        document.querySelector(".play-button").setAttribute("src", "assets/Component 60 – 2.svg")
                        console.log(response)
                        document.querySelector(".album-cover").setAttribute("src", response.items[i].track.album.images[0].url)

                        document.querySelector(".now-playing-artist").innerText = (response.items[i].track.album.artists[0].name) //WHY?
                        document.querySelector(".now-playing-song").innerText = (response.items[i].track.name)

                        document.querySelector("#preview-player").setAttribute("src", response.items[i].track.preview_url)
                        document.querySelector(".now-playing-artist").html(response.items[i].track.artist.name) //this makes it work for some reasons


                    })



                    document.querySelector(".playlist-artist").addEventListener("click", function () {
                        document.querySelector(".grid-container2").style.display = "inline-grid";
                        document.querySelector(".grid-container3").style.display = "none";
                        $(".track-list").empty();
                        searchSpotifyNameClone(response.items[i].track.artists[0].id)
                        searchRelatedArtists(response.items[i].track.artists[0].id)
                        searchSpotify(response.items[i].track.artists[0].id);
                        searchAlbumCovers(response.items[i].track.artists[0].id);
                        document.querySelector(".now-playing-artist").innerHTML(response.items[i].track.artist.name) //this makes it work for some reasons



                    })
                    document.querySelector(".next-track-playlist").addEventListener("click", function () {
                        document.querySelector(".album-cover").setAttribute("src", response.items[i + 1].track.album.images[0].url)

                        document.querySelector(".now-playing-artist").innerText = (response.items[i + 1].track.album.artists[0].name) //WHY?
                        document.querySelector(".now-playing-song").innerText = (response.items[i + 1].track.name)

                        document.querySelector("#preview-player").setAttribute("src", response.items[i + 1].track.preview_url)
                        document.querySelector(".now-playing-artist").innerHTML(response.items[i++].track.artist.name) //this makes it work for 


                    })

                    document.querySelector(".previous-track-playlist").addEventListener("click", function () {

                        document.querySelector(".album-cover").setAttribute("src", response.items[i - 1].track.album.images[0].url)

                        document.querySelector(".now-playing-artist").innerText = (response.items[i - 1].track.album.artists[0].name) //WHY?
                        document.querySelector(".now-playing-song").innerText = (response.items[i - 1].track.name)

                        document.querySelector("#preview-player").setAttribute("src", response.items[i - 1].track.preview_url)
                        document.querySelector(".now-playing-artist").innerHTML = (response.items[i++].track.artist.name) //this makes it work for 

                    })

                }
            }
        })
    })


}


//uhhhhh

document.querySelector(".genre-img").addEventListener("click", function (event) {
    event.preventDefault()
    document.querySelector(".album-page-title").innerText = "Playlist"
    document.querySelector(".grid-container3").style.display = "inline-grid";
    document.querySelector(".grid-container").style.display = "hidden";
    document.querySelector(".grid-container2").style.display = "hidden";
    getPlaylistTracks()

})

document.querySelector(".cowboy").addEventListener("click", function (event) {
    event.preventDefault()
    document.querySelector(".album-page-name").innerText = ("Country")
    document.querySelector(".by-artist-album").innerText = ("Created by" + " " + "Kevin Buchik")
    document.querySelector(".album-cover-page").setAttribute("src", "assets/cowboy.svg")
    getPlaylistTracks()

})

document.querySelector(".playground").addEventListener("click", function (event) {
    event.preventDefault()

    document.querySelector(".album-cover-page").setAttribute("src", "assets/playground.svg")
    document.querySelector(".album-page-name").innerText = ("Pop Punk")

    document.querySelector(".by-artist-album").innerText = ("Created by" + " " + "Kevin Buchik")

    getPlaylistTracks()


})

document.querySelector(".psychedelic").addEventListener("click", function (event) {
    event.preventDefault()
    document.querySelector(".album-page-name").innerText = ("Psychedelic")

    document.querySelector(".album-cover-page").setAttribute("src", "assets/Joshua Tree.svg")
    document.querySelector(".by-artist-album").innerText = ("Created by" + " " + "Kevin Buchik")
    getPlaylistTracks()


})

document.querySelector(".rocknroll").addEventListener("click", function (event) {
    event.preventDefault()
    document.querySelector(".album-page-name").innerText = ("Road Trip")

    document.querySelector(".album-cover-page").setAttribute("src", "assets/locked.svg")
    document.querySelector(".by-artist-album").innerText = ("Created by" + " " + "Kevin Buchik")

    getPlaylistTracks()


})

document.querySelector(".metal").addEventListener("click", function (event) {
    event.preventDefault()
    document.querySelector(".album-page-name").innerText = ("Metal")

    document.querySelector(".album-cover-page").setAttribute("src", "assets/pitchfork.svg")
    document.querySelector(".by-artist-album").innerText = ("Created by" + " " + "Kevin Buchik")

    getPlaylistTracks()


})
document.querySelector(".shattuck").addEventListener("click", function (event) {
    event.preventDefault()
    document.querySelector(".album-page-name").innerText = ("Noise Rock")

    document.querySelector(".album-cover-page").setAttribute("src", "assets/shattuck.svg")
    document.querySelector(".by-artist-album").innerText = ("Created by" + " " + "Kevin Buchik")

    getPlaylistTracks()


})
document.querySelector(".jazz").addEventListener("click", function (event) {
    event.preventDefault()
    document.querySelector(".album-page-name").innerText = ("Jazz")

    document.querySelector(".album-cover-page").setAttribute("src", "assets/jazz.svg")
    document.querySelector(".by-artist-album").innerText = ("Created by" + " " + "Kevin Buchik")

    getPlaylistTracks()


})
document.querySelector(".pancakes").addEventListener("click", function (event) {
    event.preventDefault()
    document.querySelector(".album-page-name").innerText = ("Morning")

    document.querySelector(".album-cover-page").setAttribute("src", "assets/pancakes.svg")
    document.querySelector(".by-artist-album").innerText = ("Created by" + " " + "Kevin Buchik")

    getPlaylistTracks()


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

            document.querySelector(".popular-songs1").html("1" + " " + response.tracks[0].name)
            document.querySelector(".popular-songs2").innerText = ("2" + " " + response.tracks[1].name)
            document.querySelector(".popular-songs3").innerText = ("3" + " " + response.tracks[2].name)
            document.querySelector(".popular-songs4").innerText = ("4" + " " + response.tracks[3].name)
            document.querySelector(".popular-songs5").innerText = ("5" + " " + response.tracks[4].name)
            let time1 = timeConversiaddEventListener(response.tracks[0].duration_ms)
            let time2 = timeConversiaddEventListener(response.tracks[1].duration_ms)
            let time3 = timeConversiaddEventListener(response.tracks[2].duration_ms)
            let time4 = timeConversiaddEventListener(response.tracks[3].duration_ms)
            let time5 = timeConversiaddEventListener(response.tracks[4].duration_ms)


            document.querySelector(".timez1").innerText = (time1)
            document.querySelector(".timez2").innerText = (time2)
            document.querySelector(".timez3").innerText = (time3)
            document.querySelector(".timez4").innerText = (time4)
            document.querySelector(".timez5").innerText = (time5)

            document.querySelector(".popular-songs1").addEventListener("click", function (event) {
                console.log(response)
                event.preventDefault();
                document.querySelector("#preview-player").setAttribute("src", response.tracks[0].preview_url)
                document.querySelector(".now-playing-song").innerText = (response.tracks[0].name)
                document.querySelector(".now-playing-artist").innerText = (response.tracks[0].artists[0].name)
                document.querySelector(".album-cover").setAttribute("src", response.tracks[0].album.images[0].url)
            })
            document.querySelector(".popular-songs2").addEventListener("click", function (event) {
                event.preventDefault();
                document.querySelector("#preview-player").setAttribute("src", response.tracks[1].preview_url)
                document.querySelector(".now-playing-song").innerText = (response.tracks[1].name)
                document.querySelector(".now-playing-song").innerText = (response.tracks[1].name)
                document.querySelector(".now-playing-artist").innerText = (response.tracks[1].artists[0].name)
                document.querySelector(".album-cover").setAttribute("src", response.tracks[1].album.images[0].url)



            })
            document.querySelector(".popular-songs3").addEventListener("click", function (event) {
                event.preventDefault();
                document.querySelector("#preview-player").setAttribute("src", response.tracks[2].preview_url)
                document.querySelector(".now-playing-song").innerText = (response.tracks[2].name)
                document.querySelector(".now-playing-song").innerText = (response.tracks[2].name)
                document.querySelector(".now-playing-artist").innerText = (response.tracks[2].artists[0].name)
                document.querySelector(".album-cover").setAttribute("src", response.tracks[2].album.images[0].url)


            })
            document.querySelector(".popular-songs4").addEventListener("click", function (event) {
                event.preventDefault();
                document.querySelector("#preview-player").setAttribute("src", response.tracks[3].preview_url)
                document.querySelector(".now-playing-song").innerText = (response.tracks[3].name)
                document.querySelector(".now-playing-song").innerText = (response.tracks[3].name)
                document.querySelector(".now-playing-artist").innerText = (response.tracks[3].artists[0].name)
                document.querySelector(".album-cover").setAttribute("src", response.tracks[3].album.images[0].url)

            })
            document.querySelector(".popular-songs5").addEventListener("click", function (event) {
                event.preventDefault();
                document.querySelector("#preview-player").setAttribute("src", response.tracks[4].preview_url)
                document.querySelector(".now-playing-song").innerText = (response.tracks[4].name)
                document.querySelector(".now-playing-song").innerText = (response.tracks[4].name)
                document.querySelector(".now-playing-artist").innerText = (response.tracks[4].artists[0].name)
                document.querySelector(".album-cover").setAttribute("src", response.tracks[4].album.images[0].url)

            })



            // document.querySelector(".preview-player").html('<source src=' +response.tracks[0].preview_url + 'type="audio/mpeg"></source>')
            console.log(response.tracks[0].preview_url)
        }
    });


}



//initial function to retrieve artists name, artist picture and populates other search functions wit id callbacks
function searchSpotifyName() {
    var inputArtist = $(".validationDefault01").val().trim() || $(".validationDefault02").val().trim() || document.querySelector(".validationDefault03").val().trim() || $(".by-artist-album").text() || $(".playlist-artist").val();


    var queryUrl = "https://api.spotify.com/v1/search?q=" + inputArtist + "&type=artist&limit=1"
    $.ajax({
        url: queryUrl,
        type: "GET",
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
        success: function (response) {
            document.querySelector(".header-image").style.backgroundImage = "url(" + response.artists.items[0].images[0].url + ")"

            var artistName = (response.artists.items[0].name)
            var artistArray = artistName.split("")
            var artistSplit = artistName.split(" ")

            if (artistSplit.length === 1) {
                document.querySelector(".band-header").innerText = (artistSplit)
                document.querySelector(".band-header2").innerText = (artistSplit)
                document.querySelector(".band-header2").style.transform = "scale(-1) rotate(180deg)";

            }
            if (artistSplit.length === 2) {
                document.querySelector(".band-header").innerText = (artistSplit[0])
                document.querySelector(".band-header2").innerText = (artistSplit[1])
                document.querySelector(".band-header2").style.transform = "none";


            }

            if (artistSplit.length === 3) {
                document.querySelector(".band-header").innerText = (artistSplit[0]);
                document.querySelector(".band-header2").innerText = (artistSplit[1] + " " + " " + artistSplit[2])
                document.querySelector(".band-header2").style.transform = "none"


            }
            // if (artistArray.length > 10) {
            //     document.querySelector(".band-header").style.fontSize = "4em")
            //     document.querySelector(".band-header2").style.fontSize = "4em")

            // }


            // document.querySelector(".band-header").innerText=(artistName)
            // document.querySelector(".band-header").innerText=(response.artists.items[0].name)
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
            $(".header-image").style("background-image", "url(" + response.images[0].url + ")")

            var artistName = (response.name)
            var artistArray = artistName.split("")

            var artistSplit = artistName.split(" ")
            var artistArray1 = artistSplit[0]


            if (artistSplit.length === 1) {
                document.querySelector(".band-header").innerText = (artistSplit)
                document.querySelector(".band-header2").innerText = (artistSplit)
                document.querySelector(".band-header2").style.transform = "scaleX(-1) rotate(180deg)";
                document.querySelector(".band-header").style.fontSize = "5em";
                document.querySelector(".band-header2").style.fontSize = "5em";


            }
            if (artistSplit.length === 2) {
                document.querySelector(".band-header").innerText = (artistSplit[0])
                document.querySelector(".band-header2").innerText = (artistSplit[1])
                document.querySelector(".band-header2").style.transform = "none";
                document.querySelector(".band-header").style.fontSize = "5em";
                document.querySelector(".band-header2").style.fontSize = "5em";



            }

            if (artistSplit.length === 3) {
                document.querySelector(".band-header").innerText = (artistSplit[0]);
                document.querySelector(".band-header2").innerText = (artistSplit[1] + " " + " " + artistSplit[2])
                document.querySelector(".band-header2").style.transform = "none";
                document.querySelector(".band-header").fontSize = "5em";
                document.querySelector(".band-header2").style.fontSize = "5em";


            }
            if (artistSplit.length > 3) {
                document.querySelector(".band-header").innerText = (artistName);
                document.querySelector(".band-header2").innerText = (" ")

            }

            if (artistArray.length > 10) {
                document.querySelector(".band-header").style.fontSize = "4em";
                document.querySelector(".band-header2").style.fontSize = "4em";

            }

            if (artistArray.length > 12) {
                document.querySelector(".band-header").style.fontSize = "3em";
                document.querySelector(".band-header2").style.fontSize = "3em";

            }

            if (artistArray.length > 10 && artistSplit.length === 2) {
                document.querySelector(".band-header").innerText = (artistSplit[0])
                document.querySelector(".band-header2").innerText = (artistSplit[1])
                document.querySelector(".band-header2").style.transform = "none"
                document.querySelector(".band-header").style.fontSize = "5em"
                document.querySelector(".band-header2").style.fontSize = "5em"


            }

            if (artistArray.length > 10 && artistSplit.length === 3) {

                document.querySelector(".band-header").innerText = (artistSplit[0]);
                document.querySelector(".band-header2").innerText = (artistSplit[1] + " " + " " + artistSplit[2])
                document.querySelector(".band-header2").style.transform = "none"
                document.querySelector(".band-header").style.fontSize = "5em"
                document.querySelector(".band-header2").style.fontSize = "5em"

            }




            // document.querySelector(".band-header").innerText=(artistName)
            // document.querySelector(".band-header").innerText=(response.artists.items[0].name)


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

            document.querySelector(".image-results").setAttribute("src", response.items[0].images[0].url)
            document.querySelector(".image-results").setAttribute("value", response.items[0].id)
            document.querySelector(".image-results2").setAttribute("src", response.items[1].images[0].url)
            document.querySelector(".image-results2").setAttribute("value", response.items[1].id)

            document.querySelector(".image-results3").setAttribute("src", response.items[2].images[0].url)
            document.querySelector(".image-results3").setAttribute("value", response.items[2].id)

            document.querySelector(".image-results4").setAttribute("src", response.items[3].images[0].url)
            document.querySelector(".image-results4").setAttribute("value", response.items[3].id)

            document.querySelector(".image-results5").setAttribute("src", response.items[4].images[0].url)
            document.querySelector(".image-results5").setAttribute("value", response.items[4].id)

            document.querySelector(".image-results6").setAttribute("src", response.items[6].images[0].url)
            document.querySelector(".image-results6").setAttribute("value", response.items[6].id)


            document.querySelector(".album-name").innerText = (response.items[0].name)
            document.querySelector(".album-name2").innerText = (response.items[1].name)
            document.querySelector(".album-name3").innerText = (response.items[2].name)
            document.querySelector(".album-name4").innerText = (response.items[3].name)
            document.querySelector(".album-name5").innerText = (response.items[4].name)
            document.querySelector(".album-name6").innerText = (response.items[5].name)
            document.querySelector(".album-name7").innerText = (response.items[6].name)

            document.querySelector(".more-albums").setAttribute("src", response.items[i].images[0].url)
            document.querySelector(".more-albums:nth-child(2)").setAttribute("src", response.items[1].images[0].url)
            document.querySelector(".more-albums:nth-child(3)").setAttribute("src", response.items[2].images[0].url)
            document.querySelector(".more-albums:nth-child(4)").setAttribute("src", response.items[3].images[0].url)
            document.querySelector(".more-albums:nth-child(5)").setAttribute("src", response.items[4].images[0].url)
            document.querySelector(".more-albums:nth-child(6)").setAttribute("src", response.items[5].images[0].url)


            console.log(response.items[0].images[0].url)
            console.log(response)
        }
    });


}



function getAlbumTracklist() {
    document.querySelector(".image-results, .on-this-day-cover, .album-picks-for-you, .recent-album-cover").onClick(function () {

        var albumId = document.querySelector(this).setAttribute("value");
        var queryUrl = "https://api.spotify.com/v1/albums/" + albumId + "/tracks"

        $.ajax({
            url: queryUrl,
            type: "GET",
            beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
            success: function (response) {
                console.log(response)
                for (let i = 0; i < response.items.length + 1; i++) {

                    let tracklistDiv = document.querySelector("<div>")
                    let results = response.items[i].name

                    tracklistDisplay = document.querySelector("<p>").innerText = (results).addClass("track")
                    let trackHr = document.querySelector("<hr>")
                    let albumTrackDuration = response.items[i].duration_ms
                    let newAlbumTrackTime = timeConversiaddEventListener(albumTrackDuration)
                    let trackTime = document.querySelector("<p>").innerText = (newAlbumTrackTime).addClass("track-time")
                    let trackNumber = (response.items[i].track_number)
                    document.querySelector(".next-track").addClass("next-track-album")
                    document.querySelector(".previous-track").addClass("previous-track-album")

                    tracklistDiv.html(tracklistDisplay)

                    document.querySelector(".track-list").appendChild(tracklistDiv)
                    document.querySelector(".track-list").appendChild(trackHr)
                    document.querySelector(tracklistDiv).appendChild(trackTime)
                    document.querySelector(tracklistDiv).prepend(trackNumber + " " + " " + " " + " ").addClass("track-number")


                    document.querySelector(".track").onClick = function () {
                        document.querySelector("#preview-player").setAttribute("src", response.items[i].preview_url)
                        document.querySelector(".play-button").setAttribute("src", "assets/Component 60 – 2.svg")

                        document.querySelector(".now-playing-song").html(response.items[i].name)

                        document.querySelector(".now-playing-artist").html(response.items[i].artists[0].name)

                        document.querySelector(".now-playing-artist").html(response.items[i].track.artists[0].name)//wtf 


                    }


                    document.querySelector(".next-track-album").onClick = function () {
                        document.querySelector("#preview-player").setAttribute("src", response.items[i + 1].preview_url)

                        document.querySelector(".now-playing-song").html(response.items[i + 1].name)

                        document.querySelector(".now-playing-artist").html(response.items[i + 1].artists[0].name)
                        document.querySelector(".now-playing-artist").html(response.items[i++].track.artists[0].name)//wtf 

                        console.log("working")

                    }
                    document.querySelector(".previous-track").onClick = function () {
                        document.querySelector("#preview-player").setAttribute("src", response.items[i - 1].preview_url)

                        document.querySelector(".now-playing-song").html(response.items[i - 1].name)

                        document.querySelector(".now-playing-artist").html(response.items[i - 1].artists[0].name)
                        document.querySelector(".now-playing-artist").html(response.items[i++].track.artists[0].name)//wtf 

                        console.log("working")

                    }



                }

            }
        })
    })


}



function getAlbumInfo() {
    document.querySelector(".image-results, .on-this-day-cover, .album-picks-for-you, .recent-album-cover").addEventListener("click", function () {
        var albumId = document.querySelector(this).setAttribute("value");
        var queryUrl = "https://api.spotify.com/v1/albums/" + albumId

        $.ajax({
            url: queryUrl,
            type: "GET",
            beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
            success: function (response) {
                console.log(response)

                document.querySelector(".track-list").addEventListener("click", function (event) {
                    event.preventDefault();
                    console.log("plesework")
                    document.querySelector(".album-cover").setAttribute("src", response.images[0].url)


                })
                let releaseDate = (response.release_date);
                let releaseYear = releaseDate.split("-");
                document.querySelector(".album-page-title").innerText = ("Album")
                document.querySelector(".album-cover-page").setAttribute("src", response.images[0].url)
                document.querySelector(".album-page-name").innerText = (response.name)
                document.querySelector(".by-artist-album").innerText = (response.artists[0].name)
                document.querySelector(".release-date").innerText = (releaseYear[0] + "-" + response.total_tracks + " Tracks")
                document.querySelector(".label").html(response.label)

                document.querySelector(".by-artist-album").addEventListener("click", function (event) {
                    event.preventDefault();
                    let backToArtist = document.querySelector(".by-artist-album").innerText()
                    searchSpotifyNameClone(response.artists[0].id)
                    searchRelatedArtists(response.artists[0].id)
                    searchSpotify(response.artists[0].id);
                    searchAlbumCovers(response.artists[0].id);

                    document.querySelector(".grid-container2").style.display = "inline-grid";
                    document.querySelector(".grid-container3").style.display = "none";
                    $(".track-list").empty()

                })

            }
        })
    })


}


//get artists related artists
function searchRelatedArtists(id) {

    var queryUrl = "https://api.spotify.com/v1/artists/" + id + "/related-artists"

    $.ajax({
        url: queryUrl,
        type: "GET",
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); },
        success: function (response) {



            document.querySelector(".related1").setAttribute("src", response.artists[0].images[0].url)
            document.querySelector(".related1").setAttribute("value", response.artists[0].id)


            document.querySelector(".related2").setAttribute("src", response.artists[1].images[0].url)
            document.querySelector(".related3").setAttribute("src", response.artists[2].images[0].url)
            document.querySelector(".related4").setAttribute("src", response.artists[3].images[0].url)


            document.querySelector(".name1").innerText = (response.artists[0].name)
            document.querySelector(".name2").innerText = (response.artists[1].name)
            document.querySelector(".name3").innerText = (response.artists[2].name)
            document.querySelector(".name4").innerText = (response.artists[3].name)

            console.log(response)
            //when related artists are clicked 

            document.querySelector(".circle1").addEventListener("click", function (event) {
                event.preventDefault();
                searchRelatedArtists(response.artists[0].id)
                searchSpotify(response.artists[0].id);
                searchAlbumCovers(response.artists[0].id);
                searchSpotifyNameClone(response.artists[0].id); //this one doesn't work
            })
            document.querySelector(".circle2").addEventListener("click", function (event) {
                event.preventDefault();
                searchRelatedArtists(response.artists[1].id)
                searchSpotify(response.artists[1].id);
                searchAlbumCovers(response.artists[1].id);
                searchSpotifyNameClone(response.artists[1].id); //this one doesn't work
            })
            document.querySelector(".circle3").addEventListener("click", function (event) {
                event.preventDefault();
                searchRelatedArtists(response.artists[2].id)
                searchSpotify(response.artists[2].id);
                searchAlbumCovers(response.artists[2].id);
                searchSpotifyNameClone(response.artists[2].id); //this one doesn't work
            })
            document.querySelector(".circle4").addEventListener("click", function (event) {
                event.preventDefault();
                searchRelatedArtists(response.artists[3].id);
                searchSpotify(response.artists[3].id);
                searchAlbumCovers(response.artists[3].id);
                searchSpotifyNameClone(response.artists[3].id); //this one doesn't work
            })

        }
    });


}

function timeConversiaddEventListener(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

var allHomeButtons = document.getElementsByClassName("home")
function homeclick(event) {
    event.preventDefault();
    document.querySelector(".grid-container4").style.display = "inline-grid";
    document.querySelector(".grid-container").style.display = "hidden";
    document.querySelector(".grid-container2").style.display = "hidden";
}
for (var i = 0; i < allHomeButtons.length; i++) {
    allHomeButtons[i].addEventListener('click', homeclick, false);
}

var allPlaylists = document.getElementsByTagName("ul")
function playlistClick(event) {
    event.preventDefault();
    console.log("JESUS")

    document.querySelector(".grid-container3").style.display = "inline-grid"
    document.querySelector(".grid-container").style.display = "hidden"
    document.querySelector(".grid-container2").style.display = "hidden"
    document.querySelector(".grid-container4").style.display = "none"

    $(".track-list").empty()
    getPlaylistTracks();
    document.querySelector(".album-page-title").innerText = ("Playlist")

}
for (var i = 0; i < allPlaylists.length; i++) {
    allPlaylists[i].addEventListener('click', playlistClick, false);
}

var allTopAlbums = document.getElementsByClassName("top-albums")
function topAlbumsClick() {
    getAlbumInfo()
    getAlbumTracklist();
    searchAlbumCovers();
    $(".track-list").empty()
}
for (var i = 0; i < allTopAlbums.length; i++) {
    allTopAlbums[i].addEventListener('click', topAlbumsClick, false);
}

document.querySelector(".image-results, .on-this-day-cover, .album-picks-for-you, .recent-album-cover").onClick = function () {
    document.querySelector(".grid-container3").style.display = "inline-grid"
    document.querySelector(".grid-container4").style.display = "none"
    $(".track-list").empty()

}

var allBrowseButtons = document.getElementsByClassName('browse')
for (var i = 0; i < allBrowseButtons.length; i++) {
    allBrowseButtons[i].addEventListener('click', browseClick, false);
}

function browseClick(event) {
    event.preventDefault();
    document.querySelector(".grid-container").style.display = "inline-grid"
    document.querySelector(".grid-container3").style.display = "none"
    document.querySelector(".grid-container2").style.display = "none"
    document.querySelector(".grid-container4").style.display = "none"

    $(".track-list").empty()



}


document.querySelector(".play-button").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".play-button").setAttribute("src", "assets/play2.svg")

    console.log(count)
    count++;
    var play = document.querySelector(".play-button")
    var video = document.querySelector("#preview-player")
    if (count % 2 === 0) {
        video.trigger('play')
        document.querySelector(".play-button").setAttribute("src", "assets/Component 60 – 2.svg")

    }
    else { video.trigger("pause") }


})


document.querySelector(".popular-songs").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".play-button").setAttribute("src", "assets/Component 60 – 2.svg")


})
var submitCount = 0
document.querySelector(".submit-button, .searchButton").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("value: " + document.querySelector(".validationDefault01").val())
    submitCount++;

    if ($(".validationDefault01").val() !== "") {
        searchSpotify();
        searchSpotifyName();
        searchAlbumCovers();

    }
    document.querySelector(".grid-container2").style.display = "inline-grid";
    document.querySelector(".grid-container3").style.display = "none";
    document.querySelector(".grid-container4").style.display = "none";

    $(".validationDefault01").val("")
    $(".track-list").empty()


})

document.querySelector(".submit-button2, .searchButton").onClick = function (event) {
    event.preventDefault();
    console.log("value:" + document.querySelector(".validationDefault02").val())
    submitCount++;
    if ($(".validationDefault02").val() !== "") {
        searchSpotify();
        searchSpotifyName();
        searchAlbumCovers();
    }

    $(".validationDefault02").val("");
    $(".track-list").empty();
    document.querySelector(".grid-container4").style.display = "none";


}
document.querySelector(".submit-button3, .searchButton").onClick = function (event) {
    event.preventDefault();
    console.log("value:" + document.querySelector(".validationDefault03").val())
    submitCount++;
    document.querySelector(".grid-container3").style.display = "none";
    document.querySelector(".grid-container4").style.display = "none";

    if ($(".validationDefault03").val() !== "") {
        document.querySelector(".grid-container2").style.display = "inline-grid";

        searchSpotify();
        searchSpotifyName();
        searchAlbumCovers();
        searchSpotifyNameClone();
    }




    document.querySelector(".validationDefault03").val("")
    $(".track-list").empty()

}
document.querySelector(".submit-button4, .searchButton").onClick = function (event) {
    event.preventDefault();
    console.log("value:" + document.querySelector(".validationDefault03").val())
    submitCount++;
    document.querySelector(".grid-container3").style.display = "none";
    document.querySelector(".grid-container4").style.display = "none";

    if ($(".validationDefault04").val() !== "") {
        document.querySelector(".grid-container2").style.display = "inline-grid";

        searchSpotify();
        searchSpotifyName();
        searchAlbumCovers();
        searchSpotifyNameClone();
    }




    $(".validationDefault04").val("")
    $(".track-list").empty()

}

document.querySelector('.volume').addEventListener('change', function () {
    $('#preview-player').prop("volume", this.value);
});


var vid = document.getElementById("preview-player");

vid.ontimeupdate = function () { myFunctiaddEventListener() };

function myFunctiaddEventListener() {
    console.log("current-time" + vid.currentTime)
    document.getElementById("demo").innerHTML = vid.currentTime;
}


var vid = document.getElementById("preview-player");
vid.ontimeupdate = function () {
    var percentage = (vid.currentTime / vid.duration) * 100;
    document.querySelector("#custom-seekbar span").style.width = percentage + "%";
};

document.querySelector("#custom-seekbar").onClick = function (e) {
    var offset = document.querySelector(this).offset();
    var left = (e.pageX - offset.left);
    var totalWidth = document.querySelector("#custom-seekbar").width();
    var percentage = (left / totalWidth);
    var vidTime = vid.duration * percentage;
    vid.currentTime = vidTime;
};//click()



//web audio api


var audioCtx = window.AudioContext || window.webkitAudioContext;
var audioContext, canvasContext;

var filters = [];

var analyser;
var width, height;
var dataArray, bufferLength;
var masterGain, stereoPanner;
var eqSwitch = 0

// document.querySelector("#stop-eq").onClick = function () {


// } 


document.querySelector(".slider").onClick = function () {
    eqSwitch++;
    audioContext = new audioCtx()
    buildAudioGraph();

};

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





//updatE?

//dynamically generate holders for images and text (maybe?)

//add homepage like in your adobe xd template