// cities

// city1

let ee=document.querySelector(".city1").addEventListener('click',function(){
    
    
    document.querySelector(".rests_container1").classList.add('active')

})



document.querySelector("#up1").addEventListener('click',function(){

document.querySelector(".rests_container1").classList.remove('active')

})
document.querySelector(".city1").addEventListener('click',function(){

document.querySelector(".rests_container2").classList.remove('active')


})
document.querySelector(".city1").addEventListener('click',function(){

document.querySelector(".rests_container3").classList.remove('active')


})

// city2


document.querySelector(".city2").addEventListener('click',function(){
document.querySelector(".rests_container2").classList.add('active')
})
document.querySelector("#up2").addEventListener('click',function(){

document.querySelector(".rests_container2").classList.remove('active')


})

document.querySelector(".city2").addEventListener('click',function(){

document.querySelector(".rests_container1",).classList.remove('active')


})
document.querySelector(".city2").addEventListener('click',function(){

document.querySelector(".rests_container3",).classList.remove('active')


})

// city3

document.querySelector(".city3").addEventListener('click',function(){
document.querySelector(".rests_container3").classList.add('active')
})
document.querySelector("#up3").addEventListener('click',function(){

document.querySelector(".rests_container3").classList.remove('active')


})

document.querySelector(".city3").addEventListener('click',function(){

document.querySelector(".rests_container1",).classList.remove('active')


})
document.querySelector(".city3").addEventListener('click',function(){

document.querySelector(".rests_container2").classList.remove('active')


})


// maps

var loc = document.querySelectorAll('.btn')


loc.forEach((hat)=>{
    hat.addEventListener('click',()=>{
        var ab = hat.closest('.rests')

        // var bc = ab.querySelector('h2')

        // bc.style.color = 'red'
       var bc =  ab.querySelector('.maps')

       var ef = ab.querySelector('.fa-xmark')

       bc.classList.add('active')

       ef.addEventListener('click',()=>{
       bc.classList.remove('active')
       })
        
    })
})


// forms

var book = document.querySelectorAll('.reg')

book.forEach((now)=>{
    now.addEventListener("click",()=>{
        window.open("form.html", "_self")
    })
})

