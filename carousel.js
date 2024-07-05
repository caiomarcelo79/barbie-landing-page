$(document).ready(()=>{
  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    responsive: {
      0 : {
        items : 1
      },
      601 : {
        items: 4
      },
      1000 : {
        items: 5
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