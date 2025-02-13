    document.getElementById('yes').addEventListener('click', function () {
    window.location.href = 'yes.html';
    });

    document.getElementById('no').addEventListener('click', function () {
    window.location.href = 'yes.html';
    });

    var audio = new Audio('music.mp3');
    document.getElementById('play').addEventListener('click', function () {
        console.log("playing!") 
        audio.play();
    });