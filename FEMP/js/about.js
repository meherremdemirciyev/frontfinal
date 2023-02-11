function BasketCount() {
    let basket = JSON.parse(localStorage.getItem('bproducts'));
    document.getElementById('shopcartcount').innerHTML =  basket.length;
    document.getElementById('shopcartcount2').innerHTML =  basket.length;
  }
  
  BasketCount()


document.querySelector('.menuhamb i').addEventListener('click',function(){
    document.getElementById('sidenav').style.left = '0px'
  })
  document.querySelector('.upper i').addEventListener('click',function(){
    document.getElementById('sidenav').style.left = '-280px'
    document.querySelector('.menudd').style.left = '0px'
    document.querySelectorAll('.homepage').forEach(x => {x.style.left = '280px'})
    document.querySelectorAll('.shoppage').forEach(x => {x.style.left = '280px'})
    document.querySelectorAll('.productpage').forEach(x => {x.style.left = '280px'})
    document.querySelectorAll('.blogpage').forEach(x => {x.style.left = '280px'})
    document.querySelectorAll('.pagepage').forEach(x => {x.style.left = '280px'})
  
  })
  var NavOpener = function(e){
    // e.preventDefault();
    x = e.parentElement.getAttribute('id')
    document.querySelector('.menudd').style.left = '-280px'
    document.querySelector(`.${x}`).style.left = '0'
  }
  var NavCloser = function(e){
    // e.preventDefault();
    x = e.parentElement.parentElement.getAttribute('class')
    document.querySelector(`.${x}`).style.left = '280px'
  
    document.querySelector('.menudd').style.left = '0px'
  }
  
  
  
  
  
  $(window).scroll(function() {
      if ($("html,body").scrollTop() > 20) {
          $('#myBtn').fadeIn(400);
          $('#myBtn').css("bottom","70px")
      } else {
          $('#myBtn').fadeOut(400);
          $('#myBtn').css("bottom","10px")
  
      }
  });
  
  $("#myBtn").click(function() {
      $("html, body").animate({
          scrollTop: 0
      }, 300);
  });
  

window.onresize = function(event) {

    console.log(window.screen.availWidth);
}




$('.slider1').slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.slider2').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });