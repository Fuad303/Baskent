var imgList = document.getElementById('imgList');
var scrollRight = document.getElementById('scroll-right');
var scrollLeft = document.getElementById('scroll-left');

scrollRight.addEventListener('click', (event) => {
  imgList.scrollBy(350, 0);
});

scrollLeft.addEventListener('click', (event) => {
  imgList.scrollBy(-350, 0);
});


// Fancy Box
$('[data-fancybox]').fancybox({
  buttons : [
    'close'
  ],
  wheel : false,
  transitionEffect: "slide",
  loop            : true,
  toolbar         : false,
  clickContent    : false
});