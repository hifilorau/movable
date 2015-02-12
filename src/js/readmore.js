app.readmoreFly = function () {

  $('.readmore').click(function () {
    var thisReadmore = $(this);
  $(thisReadmore).prev().toggleClass('slide-height');
});



};
