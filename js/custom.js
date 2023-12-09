(function ($) {
  "use strict";

  // Function to set a cookie
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // Function to get the value of a cookie
  function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ')
        cookie = cookie.substring(1, cookie.length);
      if (cookie.indexOf(nameEQ) === 0)
        return cookie.substring(nameEQ.length, cookie.length);
    }
    return null;
  }

  // Function to toggle the theme mode
  function toggleThemeMode() {
    $('body').toggleClass('dark-mode');
    $('.color-mode-icon').toggleClass('active');
    // Save the theme mode preference as a cookie
    if ($('body').hasClass('dark-mode')) setCookie('themeMode', 'dark', 30);
    else setCookie('themeMode', 'light', 30);
  }

  // COLOR MODE
  $('.color-mode').click(function () {
    toggleThemeMode();
  });

  // Retrieve the theme mode preference from the cookie on page load
  var themeMode = getCookie('themeMode');
  if (themeMode === 'dark') toggleThemeMode();

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
  });

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();
})(jQuery);

