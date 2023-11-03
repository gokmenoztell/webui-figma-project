document.getElementById("play-button").addEventListener("click", function () {
    document.getElementById("thumbnail").style.display = "none";
    document.getElementById("play-button").style.display = "none";
    document.getElementById("video").style.display = "block";

    // Autoplay video
    var video = document.getElementById("video");
    video.src = video.src + "?autoplay=1";
});