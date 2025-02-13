document.getElementById('yes').addEventListener('click', function () {
    window.location.href = 'yes.html';
});

document.getElementById('no').addEventListener('click', function () {
    window.location.href = 'https://example.com'; // Change this URL to the desired destination
});

var audio = new Audio('music.mp3');
document.getElementById('play').addEventListener('click', function () {
    console.log("playing!");
    audio.currentTime = 50; // Start the audio at 50 seconds
    audio.play();
});