
AOS.init();

$('.resume-btn').click(function () {
  $('#resumeLanguageModal').modal('show');
});

$('.resume-btn-fr').click(function () {
  window.open('docs/Ismail ZAHIR - fr.pdf','_blank');
  $('#resumeLanguageModal').modal('hide');
});

$('.resume-btn-en').click(function () {
  window.open('docs/Ismail ZAHIR - en.pdf','_blank');
  $('#resumeLanguageModal').modal('hide');
});

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelectorAll("ul.marquee-content");

for (let m = 0; m < marqueeContent.length; m++)
{
  root.style.setProperty("--marquee-elements", marqueeContent[m].children.length);

  for(let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent[m].appendChild(marqueeContent[m].children[i].cloneNode(true));
  }
}

var backtotop = $('.back-to-top');
if (backtotop.length) {
  var toggleBacktotop = function() {
    if ($(window).scrollTop() > 100) {
      backtotop.addClass('active');
    } else {
      backtotop.removeClass('active');
    }
  };

  $(window).on('load', toggleBacktotop);
  $(window).on('scroll', toggleBacktotop);

  backtotop.on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800); // Adjust the scroll speed as desired
  });
}

$(window).on("load", function() {
  // Hide the preloader once the page is fully loaded
  $(".waterfall").remove();
});

