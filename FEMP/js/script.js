// document.getElementById('shoppage').addEventListener('mouseover',()=>{
//   document.querySelector('.shopdropdown').style.display = 'grid'
//   // console.log('ads');
// })
// document.getElementById('shoppage').addEventListener('mouseleave',()=>{
//   document.querySelector('.shopdropdown').style.display = 'none'
//   // console.log('ads');
// })
// document.querySelector('.shopdropdown').addEventListener('mouseover',()=>{
//   document.querySelector('.shopdropdown').style.display = 'grid'
//   // console.log('ads');
// })
// document.querySelector('.shopdropdown').addEventListener('mouseleave',()=>{
//   document.querySelector('.shopdropdown').style.display = 'none'
//   // console.log('ads');
// })
// document.querySelector('#parametr').addEventListener('click',function(){
//   document.querySelector('.s3-left').style.left = '0px'
// })
// document.querySelector('.closebtn i').addEventListener('click',function(){
//   document.querySelector('.s3-left').style.left = '-330px'
// })
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





















$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 4000,
    // responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //     // You can unslick at a given breakpoint now by adding:
    //     // settings: "unslick"
    //     // instead of a settings object
    //   ]
});

$('.slider2').slick({
    arrows:true,
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed:800,
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
        // {
        //   breakpoint: 600,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 2
        //   }
        // },
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
$('.slider3').slick({
    infinite: true,
    dots: false,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed:800,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
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




function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, '#f5f5f5', 'black', controlSlider);
  if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
  } else {
      fromSlider.value = from;
  }
}
  
function controlToInput(toSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, '#f5f5f5', 'black', controlSlider);
  setToggleAccessible(toInput);
  if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
  } else {
      toInput.value = from;
  }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
const [from, to] = getParsed(fromSlider, toSlider);
fillSlider(fromSlider, toSlider, '#f5f5f5', 'black', toSlider);
if (from > to) {
  fromSlider.value = to;
  fromInput.value = to;
} else {
  fromInput.value = from;
}
}

function controlToSlider(fromSlider, toSlider, toInput) {
const [from, to] = getParsed(fromSlider, toSlider);
fillSlider(fromSlider, toSlider, '#f5f5f5', 'black', toSlider);
setToggleAccessible(toSlider);
if (from <= to) {
  toSlider.value = to;
  toInput.value = to;
} else {
  toInput.value = from;
  toSlider.value = from;
}
}

function getParsed(currentFrom, currentTo) {
const from = parseInt(currentFrom.value, 10);
const to = parseInt(currentTo.value, 10);
return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
  const rangeDistance = to.max-to.min;
  const fromPosition = from.value - to.min;
  const toPosition = to.value - to.min;
  controlSlider.style.background = `linear-gradient(
    to right,
    ${sliderColor} 0%,
    ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
    ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
    ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
    ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
    ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
const toSlider = document.querySelector('#toSlider');
if (Number(currentTarget.value) <= 0 ) {
  toSlider.style.zIndex = 2;
} else {
  toSlider.style.zIndex = 0;
}
}

const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
fillSlider(fromSlider, toSlider, '#f5f5f5', 'black', toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);






var products

var catitems = []


var cats = document.querySelectorAll('.name')
cats.forEach(element => {
  element.addEventListener('click',function(){
    catitems.push(element.innerHTML.toLocaleLowerCase())
    console.log(catitems);
    
    
    GetProducts()
  })
});


Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
      }
  }
  return this;
};





var botsize = document.querySelectorAll('.sizes span')
var bottlesizes = []
var vintages = document.querySelectorAll('.years span')
var vintage = []
var brands = document.querySelectorAll('.brand span')
var brand = []
botsize.forEach(x => {
  x.addEventListener('click',function(){
    x.classList.toggle('activespan')
    if(!bottlesizes.includes(x.innerHTML.slice(0,-3))){
      bottlesizes.push(x.innerHTML.slice(0,-3))
    }
    else{
      bottlesizes.remove(x.innerHTML.slice(0,-3))
    }


    console.log(bottlesizes);
    
    
    GetProducts();
  })
})

vintages.forEach(x => {
  x.addEventListener('click',function(){
    x.classList.toggle('activespan')
    if(!vintage.includes(x.innerHTML)){
      vintage.push(x.innerHTML)
    }
    else{
      vintage.remove(x.innerHTML)
    }


    console.log(vintage);
    
    
    GetProducts();
  })
})

brands.forEach(x => {
  x.addEventListener('click',function(){
    
    if(!brand.includes(x.id)){
      brands.forEach(y => {
        y.classList.remove('activespanimg')
      })
      brand = []
      x.classList.add('activespanimg')
      brand.push(x.id)
    }
    else{
      x.classList.remove('activespanimg')
      brand.remove(x.id)
    }


    console.log(brand);
    
    
    GetProducts();
  })
})

var inputs = document.querySelectorAll('.form_control_container input')
inputs.forEach(x => x.addEventListener('change',function(){
  GetProducts()
  
}))



var sorts = document.querySelectorAll('.placesort')
var sort = []
sorts.forEach(x => {
  x.addEventListener('click',function(){
    
    if(!sort.includes(x.id)){
      sorts.forEach(y => {
        y.classList.remove('activeplacesort')
      })
      sort = []
      x.classList.add('activeplacesort')
      sort.push(x.id)
    }
    // else{
    //   x.classList.remove('activeplacesort')
    //   sort.remove(x.id)
    // }


    console.log(sort);
    
    // PlaceProducts()
    GetProducts();
  })
})

var DelSpan = function(y){
  console.log('s');
  if(y.innerHTML.includes('Cl')){
    bottlesizes.remove(y.innerHTML.slice(0,-3))
    botsize.forEach(x => {
      if(x.innerHTML.includes(y.innerHTML.slice(0,-3))){
        x.classList.remove('activespan')
      }
    })
  }
  if(y.innerHTML.includes('20')){
    vintage.remove(y.innerHTML)
    vintages.forEach(x => {
      if(x.innerHTML.includes(y.innerHTML)){
        x.classList.remove('activespan')
      }
    })
  }
  if(y.innerHTML.includes('Br')){
    brands.forEach(x => {
      x.classList.remove('activespanimg')
    })
    brand = []
  }
  GetProducts()
}

var prch = []
var PriceChange = function(){
  let fin = document.getElementById('fromInput').value;
  let tin = document.getElementById('toInput').value;
  prch.push(fin)
  prch.push(tin)
  console.log(prch);

  GetProducts()
}

const DeleteFilter = function(){
  var html1 = ''
  if(prch.length != 0){
    html1 += `
      <span onclick="DelSpan(this)">$${prch[prch.length-2]} - $${prch[prch.length-1]}</span>`
  }
  if (vintage.length != 0) {
    vintage.forEach(y=>{
      html1 += `
      <span onclick="DelSpan(this)">${y}</span>`
    })
  }
  if (bottlesizes.length != 0) {
    bottlesizes.forEach(x=>{
      html1 += `
      <span onclick="DelSpan(this)">${x} Cl</span>`
    })
  }
  if (brand.length != 0) {
    brand.forEach(z=>{
      html1 += `
      <span onclick="DelSpan(this)">Brand ${brand.indexOf(z)+1}</span>`
    })
  }
  console.log(html1);
  if (html1.length == 0) {
    document.querySelector('.s3r-middle').style.display = "none"
  }else{
    document.querySelector('.s3r-middle').style.display = "block"
    document.querySelector('.s3r-middle div').innerHTML = html1
    
  }
}



document.getElementById('clrall').addEventListener('click',function(){
  prch = []
  bottlesizes = []
  vintage = []
  brand = []
  botsize.forEach(x => x.classList.remove('activespan'))
  vintages.forEach(x => x.classList.remove('activespan'))
  brands.forEach(x => x.classList.remove('activespanimg'))
  GetProducts()
})



const GetProducts = function() {
  fetch('/json/product.json')
    .then((response) => response.json())
    .then((json) => {
      
      products = json
      console.log(products);

      function catcounts(){
        var champ = products.filter(x => x.category.includes("champagne")).length
        var half = products.filter(x => x.category.includes("half bottles")).length
        var redw = products.filter(x => x.category.includes("red wines")).length
        var rosew = products.filter(x => x.category.includes("rosé wines")).length
        var spark = products.filter(x => x.category.includes("sparkling")).length
        var wwine = products.filter(x => x.category.includes("white wines")).length
        document.querySelector('#champ span').innerHTML = champ
        document.querySelector('#half span').innerHTML = half
        document.querySelector('#redw span').innerHTML = redw
        document.querySelector('#rosew span').innerHTML = rosew
        document.querySelector('#spark span').innerHTML = spark
        document.querySelector('#wwine span').innerHTML = wwine
        console.log(champ);

      }
      catcounts()

      
      if (catitems.length != 0) {
        products = json.filter(x => x.category.includes(catitems[catitems.length-1]))
        cats.forEach(function(x){
          if(catitems[catitems.length-1] == x.innerHTML.toLowerCase()){
            x.classList.add('activecat')
          }else{
            x.classList.remove('activecat')
          }
        })
      }

      var product1
      if(bottlesizes.length!=0){
        product1 = products.filter(function(x){
          var ch = true
          bottlesizes.forEach(function(y){if (!x.bottlesize.includes(y)) {
            ch = false
          }})
          if(ch==true){
            return x
          }

        })
        
      }else{
        product1 = products
      }

      var product2
      if(vintage.length!=0){
        product2 = product1.filter(function(x){
          var ch = true
          vintage.forEach(function(y){if (!x.vintage.includes(y)) {
            ch = false
          }})
          if(ch==true){
            return x
          }

        })
        
      }else{
        product2 = product1
      }
      
      var product3
      if(brand.length != 0){
        product3 = product2.filter(x => x.brand.includes(brand))
      }else{
        product3 = product2
      }

      console.log(product3);


      var frominput = document.getElementById('fromInput').value
      var toinput = document.getElementById('toInput').value
      var product4 = product3.filter(x => Number(x.price)>=Number(frominput) && Number(x.price)<=Number(toinput))

      document.querySelector(".s3rt-left").innerHTML = `Showing ${product4.length} item(s)`
      
      


      let html = ''
      DeleteFilter()
      product4.map(element => {
        html+= `
        <div class="products">
                            
                            <div class="drink">
                                <div class="mininavs">
                                <span class=" d-none">${element.id}</span>

                                    <div class="bag" onclick="AddBasket(this)">
                                        <i class="fa-solid fa-bag-shopping"></i>
                                    </div>
                                    <div class="heart">
                                        <i class="fa-regular fa-heart"></i>
                                    </div>
                                    <div class="search">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </div>
                                <div class="discount"><span>-10%</span></div>
                                <div class="hot"><span>Hot</span></div>
                                <a href="/detail.html"><img class="sec" src="${element.hoverImg}"></a>
                                <a href="/detail.html"><img class="fst" src="${element.img}" alt=""></a>
                            </div>
                            <div class="srt">
                            <div class="top">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <p>{<span>1</span> review)</p>
                                
                            </div>
                            <a class="smltxt" href="/detail.html">${element.title}</a>
                            <div class="bottom"><p>$<span>${element.price}</span>.00</p></div>
                            <div class="tb">
                                <span class=" d-none">${element.id}</span>
                                <span onclick="AddBasket(this)">ADD TO CART</span>
                                <i class="fa-regular fa-heart"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…</p>
                                </div>
                            </div>
                        </div>
        `
      });
      document.getElementById('prods').innerHTML = html;
      var items = $("#prods .products");
      var numItems = items.length;
      var perPage = 12;

      items.slice(perPage).hide();


      const PlaceProducts = function(){
        if (sort[0]=="thr") {
          
          var proddrink = document.querySelectorAll(".products")
          proddrink.forEach(x => {
            x.classList.remove("productsrow")
            x.classList.add("products")
          })
          document.querySelector('.s3r-bottom').style.gridTemplateColumns = "25% 25% 25% 25%"
          var drink = document.querySelectorAll(".products .drink")
          drink.forEach(x => {
            x.style.width = "240px"
            x.style.height = "240px"
          })
          
        }else if(sort[0]=="scn"){
          
          var proddrink = document.querySelectorAll(".products")
          proddrink.forEach(x => {
            x.classList.remove("productsrow")
            x.classList.add("products")
          })
          document.querySelector('.s3r-bottom').style.gridTemplateColumns = "33% 33% 33%"
          var drink = document.querySelectorAll(".products .drink")
          drink.forEach(x => {
            x.style.width = "330px"
            x.style.height = "330px"
          })
          
        }else if(sort[0]=="fst"){
          
          var proddrink = document.querySelectorAll(".products")
          proddrink.forEach(x => {
            x.classList.remove("productsrow")
            x.classList.add("products")
          })
          document.querySelector('.s3r-bottom').style.gridTemplateColumns = "50% 50%"
          var drink = document.querySelectorAll(".products .drink")
          drink.forEach(x => {
            x.style.width = "510px"
            x.style.height = "510px"
          })
          
        }else if(sort[0]=="frh"){
          document.querySelector('.s3r-bottom').style.gridTemplateColumns = "100%"
          var proddrink = document.querySelectorAll(".products")
          proddrink.forEach(x => {
            x.classList.remove("products")
            x.classList.add("productsrow")
          })
        }
        
      }
      PlaceProducts()


      $('#pagination-container').pagination({
          items: numItems,
          itemsOnPage: perPage,
          prevText: "&laquo;",
          nextText: "&raquo;",
          onPageClick: function (pageNumber) {
              var showFrom = perPage * (pageNumber - 1);
              var showTo = showFrom + perPage;
              items.hide().slice(showFrom, showTo).show();
          }
      });
    })
    
}
GetProducts()










