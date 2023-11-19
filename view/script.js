const images = [
"images/pic5.jpg",
 "images/pic7.jpg",
 "images/pic8.jpg"
]

//Spinner preloader

window.addEventListener('load', function(){
  const preloader = document.querySelector('.preloader')
  preloader.classList.add('hide')
})


//Elements 
const btnRight = document.querySelector('.btn-right')
const btnLeft = document.querySelector('.btn-left')
const image = document.querySelector('.image')

let count = 0

//btn left Event
btnLeft.addEventListener('click', function(){
  count--
  if(count < 0){
    count = images.length -1
  }
image.src = images[count]

})

//btn right event
btnRight.addEventListener('click', function(){
  count++
   if(count > images.length - 1){
  count = 0
}
  image.src = images[count]
 
 
})





// MOBILe menu toggler

document.querySelector('.menu-open').addEventListener('click',function(){

  document.querySelector('.menu-toggle').classList.toggle('show')
  document.body.classList.add('toggle')
})

document.querySelector('.menu-close').addEventListener('click',function(){

  document.querySelector('.menu-toggle').classList.toggle('show')
  document.body.classList.remove('toggle')
})


//window object
window.addEventListener('click', function(e){
  const menu = document.querySelector('.menu-toggle')

  if(e.target === menu){
    menu.classList.remove('show')
   document.body.classList.remove('toggle')
   } 
  
})


window.addEventListener('scroll', function(){

  const navigate = document.querySelector('.navigate')
  if(window.scrollY > 1000) {
    navigate.classList.add('show')
  } else {
    navigate.classList.remove('show')
  }


})