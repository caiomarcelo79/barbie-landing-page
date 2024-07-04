$(document).ready(()=>{
  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    responsive: {
      0 : {
        items : 1
      },
      600 : {
        items: 2
      },
      1240 : {
        items: 6
      }
    },
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 15
  })
})