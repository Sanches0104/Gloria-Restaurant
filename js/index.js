$ (document).ready (function () {
  //toggle menu
  $ ('.hamburger-container').click (function () {
    $ ('#menu').slideToggle ();
  });

  //to fix issue that toggle adds style(hides) to nav
  $ (window).resize (function () {
    if (window.innerWidth > 1024) {
      $ ('#menu').removeAttr ('style');
    }
  });

  //icon animation
  var topBar = $ ('.hamburger li:nth-child(1)'),
    middleBar = $ ('.hamburger li:nth-child(2)'),
    bottomBar = $ ('.hamburger li:nth-child(3)');

  $ ('.hamburger-container').on ('click', function () {
    if (middleBar.hasClass ('rot-45deg')) {
      topBar.removeClass ('rot45deg');
      middleBar.removeClass ('rot-45deg');
      bottomBar.removeClass ('hidden');
    } else {
      bottomBar.addClass ('hidden');
      topBar.addClass ('rot45deg');
      middleBar.addClass ('rot-45deg');
    }
  });
});

/////////////////////////////////////////////////////////////

const nav = document.querySelector ('.navbar');
window.onscroll = function () {
  if (window.pageYOffset > 50) {
    nav.classList.add ('a');
  } else {
    nav.classList.remove ('a');
  }
};

const fun = () => {
  nav.classList.toggle ('background');
};

const nav1 = document.querySelector ('.navbar-toggle');
nav1.addEventListener ('click', fun);

//////////////////////////////////////////////GALLERY/////////////////////////////////

(function ($) {
  'use strict';
  $ (document).ready (function () {
    'use strict';
    //Scroll back to top

    var progressPath = document.querySelector ('.progress-wrap path');
    var pathLength = progressPath.getTotalLength ();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect ();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
      var scroll = $ (window).scrollTop ();
      var height = $ (document).height () - $ (window).height ();
      var progress = pathLength - scroll * pathLength / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress ();
    $ (window).scroll (updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery (window).on ('scroll', function () {
      if (jQuery (this).scrollTop () > offset) {
        jQuery ('.progress-wrap').addClass ('active-progress');
      } else {
        jQuery ('.progress-wrap').removeClass ('active-progress');
      }
    });
    jQuery ('.progress-wrap').on ('click', function (event) {
      event.preventDefault ();
      jQuery ('html, body').animate ({scrollTop: 0}, duration);
      return false;
    });
  });
}) (jQuery);

$ (document).ready (function () {
  // filter
  $ ('.gallery-link').on ('click', function (event) {
    event.preventDefault ();
    // current class
    $ ('.current').removeClass ('current');
    $ (this).parent ().addClass ('current');

    // set new heading
    $ ('.heading').text ($ (this).text ());

    // filter link text
    var category = $ (this).text ().toLowerCase ().replace (' ', '-');

    // remove hidden class if "all" is selected
    if (category == 'all-projects') {
      $ ('ul#gallery li:hidden').fadeIn ('slow').removeClass ('hidden');
    } else {
      $ ('ul#gallery li').each (function () {
        if (!$ (this).hasClass (category)) {
          $ (this).hide ().addClass ('hidden');
        } else {
          $ (this).fadeIn ('slow').removeClass ('hidden');
        }
      });
    }
    return false;
  });
  // lightbox
  $ ('ul#gallery a').on ('click', function (event) {
    event.preventDefault ();
    var link = $ (this).find ('img').attr ('src');
    $ ('.gallery img').attr ('src', '');
    $ ('.gallery img').attr ('src', link);
    $ ('.gallery').fadeIn ('slow');
  });
  // close lightbox
  $ ('.gallery').on ('click', function (event) {
    event.preventDefault ();
    $ ('.gallery').fadeOut ('slow');
  });
});

const img1 = document.querySelector ('#gallery');
const ablock = document.querySelector ('.navbar');
const clickImg = e => {
  if (e.target.nodeName === 'IMG') {
    ablock.classList.add ('background-colorNav-scroll');
  }
};

img1.addEventListener ('click', clickImg);
