console.log('APP.JS ONLINE!');

console.log( jQuery );

  // Notification that the browser finished loading
  //                 |
$(document).ready(function () {
  var userColor = prompt('What color would you like the links?');

  $('a').css('color', userColor);

  $('a').click(function (event) {
    //                      |
    // ----------------------
    // |
    event.preventDefault();

    var randomNumber = Math.floor(Math.random() * 50) + 1;

    $('h1').css('font-size', randomNumber + 'px');
  });

  var leftAmount = 0;

  $('#dino-btn').click(function () {
    leftAmount += 30;

    $('#dino-img').css('position', 'relative');
    $('#dino-img').css('left', leftAmount + 'px');
  });


  var currentImageState = 'normal';

  $('#src-btn').click(function () {
    // $('#src-img').attr('src', 'http://orig14.deviantart.net/27a7/f/2013/072/c/a/cae620ea917640ccc6460db7fa6e0ba4-d5xwoe7.jpg');
    if (currentImageState === 'normal') {
      $('#src-image').prop('src', 'http://orig14.deviantart.net/27a7/f/2013/072/c/a/cae620ea917640ccc6460db7fa6e0ba4-d5xwoe7.jpg');
      currentImageState = 'parody';
    }

    else {
      $('#src-image').prop('src', 'https://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/032013/starbucks_2011_true_logo_0.png?itok=Z0oN3t_m');
      currentImageState = 'normal';
    }
  });

  $("#input-btn").click(function () {
    var pastedImage = $('#image-input').val();
    $('#src-image').prop('src', pastedImage);
  });
});


// You can have multiple document ready's too keep things organized
$(document).ready(function () {
  var currentCount = 0;

  $('#increase-btn').click(function () {
    currentCount += 1;
    $('#count-tag').html(currentCount);

    if (currentCount > 45) {
      $('#hot-tag').addClass('really-hot');
      $('#hot-tag').removeClass('hot');
    }
    else if (currentCount > 30) {
      $('#hot-tag').addClass('hot');
      $('#hot-tag').removeClass('warm');
    }
    else if (currentCount > 15) {
      $('#hot-tag').addClass('warm');
    }
  });
});




$(document).ready(function () {

  $('#src-image').click(function (theEvent) {
    $('#src-image').fadeOut(7000);
  });

});
