    import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('timeupdate', throttle((data) => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    }, 1000));

    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
        player.setCurrentTime(savedTime);
    }
    

