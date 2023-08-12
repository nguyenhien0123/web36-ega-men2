// Call lib OwlCarousel
$(document).ready(function () {


  $('.owl-carousel').owlCarousel({
    loop: true, //Vong lap trong slider
    margin: 10, //Khoang cach giua cac item
    nav: true, //Dieu huong slider
    autoplay: true, //slider tu dong chay
    autoplayTimeout: 3500, //Toc do chay don vi ms
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

});
