API.sendChat('AutoWoot Enabled');

setInterval(function () {
  var already_wooting = $('#woot > .top > .icon').hasClass('icon-woot-disabled');
  var trying_to_grab  = $('.pop-menu.curate').is(':visible');
  var mehhed_song     = $('#meh > .top > .icon').hasClass('icon-meh-disabled');

  if (true
    && !already_wooting    // not already wooting
    && !trying_to_grab     // not trying to grab the song
    && !mehhed_song        // haven't meh'd this song
  ) { $('#woot').click(); }

}, 20000); //Check every 20 seconds
