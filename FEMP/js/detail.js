if(localStorage.getItem('bproducts') === null) {
  localStorage.setItem('bproducts',JSON.stringify([]))
}
var basket = JSON.parse(localStorage.getItem('bproducts'));
console.log(basket.length);

const AddBasket = function(e) {
  // e.preventDefault();
  
  var id = e.previousElementSibling.innerHTML
  console.log(id);

  fetch('/json/product.json')
    .then((response) => response.json())
    .then((json) => {
      



      let pr_id = id
      let pr_price
      let pr_image
      let pr_hovimage
  let pr_title 
  json.forEach(x=>{
    if (x.id == Number(id)) {
      pr_title = x.title
      pr_price = x.price
      pr_image = x.img
      pr_hovimage = x.hoverImg
      console.log(pr_id);
    }
  })
  
      

  let exist_prod = basket.find(pr => pr.Id === pr_id);

  if(exist_prod === undefined) {
      basket.push({
          Id: pr_id,
          Title: pr_title,
          Price: pr_price,
          Image: pr_image,
          HoverImage: pr_hovimage,
          Count: 1
      })
      document.querySelector('#alert p').innerHTML = 'Added to Basket'
      document.getElementById('alert').style.right = '30px'
  }
  else{
      exist_prod.Count += 1;
      document.querySelector('#alert p').innerHTML = 'Already in Basket'
      document.getElementById('alert').style.right = '30px'
      document.getElementById('alert').style.backgroundColor = 'black'
  }

  localStorage.setItem('bproducts',JSON.stringify(basket));
  setTimeout(() => {
      document.getElementById('alert').style.right = '-500px'
  }, 1500);
  BasketCount();
    })

  
}


function BasketCount() {
  let basket = JSON.parse(localStorage.getItem('bproducts'));
  document.getElementById('shopcartcount').innerHTML =  basket.length;
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



$('.slider3').slick({
    infinite: true,
    dots: false,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed:800,
    responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // {
        //   breakpoint: 480,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        //   }
        // }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    
});


const Tabs = function(x){
    let tab = x.getAttribute('data-tab')
    if(tab == 'tab1'){
        x.classList.add('activetabsbtn')
        x.nextElementSibling.classList.remove('activetabsbtn')
        document.getElementById("tab1").classList.add('activetab')
        document.getElementById("tab1").classList.remove('tabs')
        document.getElementById("tab2").classList.remove('activetab')
        document.getElementById("tab2").classList.add('tabs')
    }else if(tab == 'tab2'){
        x.classList.add('activetabsbtn')
        x.previousElementSibling.classList.remove('activetabsbtn')
        document.getElementById("tab2").classList.add('activetab')
        document.getElementById("tab2").classList.remove('tabs')
        document.getElementById("tab1").classList.remove('activetab')
        document.getElementById("tab1").classList.add('tabs')
    }
    console.log(tab);
}





function zoom(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    var x = offsetX/zoomer.offsetWidth*100
    var y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }




  $('.slider4').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    
  });
  

document.querySelectorAll('.slider4 img').forEach(x => {
    x.addEventListener('click',function(){
        document.querySelector('.zoom').style.backgroundImage = `url('${x.getAttribute('src')}')`
        document.querySelector('.zoom img').setAttribute('src',x.getAttribute('src'))
        document.querySelectorAll('.slider4 img').forEach(y => {
            y.classList.remove('activepic')
        })
        x.classList.add('activepic')
    })
})