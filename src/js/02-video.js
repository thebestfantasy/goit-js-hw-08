    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    // player.on('play', function() {
    //     console.log('played the video!');
    // });

    player.on('timeupdate', function (data) {
        localStorage.setItem('vimeoPlayerTime', data.seconds);
    });

    const savedTime = localStorage.getItem('vimeoPlayerTime');
    if (savedTime) {
        player.setCurrentTime(savedTime);
    }

    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });

