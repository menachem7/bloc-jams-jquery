class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    var totalTime $(song.duration)
    $('#time-control .total-time').text(totalTime);
  };
}

const helper = new Helper();
