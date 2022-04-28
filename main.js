const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document)

const prevBtn = $(".prev")
const nextBtn = $(".next")
const closeBtn = $(".close")
const images = $$('.image img')
const gallery = $('.gallery')
const innerImg = $('.innerImg img')
let currentIndex = 0;

function show() {
    if(currentIndex == 0) {
        prevBtn.classList.add('hide')
    } else  prevBtn.classList.remove('hide')

    if(currentIndex == images.length - 1) {
        nextBtn.classList.add('hide')
    } else nextBtn.classList.remove('hide')

    gallery.classList.add('show')
    innerImg.src = images[currentIndex].src;
}

images.forEach((img, index) => {
    img.addEventListener('click', (e) => {
        currentIndex = index;
        show()  
    })
})

function handleEvent() {
    prevBtn.addEventListener('click', (e) => {
        if(currentIndex > 0) {
            currentIndex--;
            show()
        } 

    })

    nextBtn.addEventListener('click', (e) => {
        if(currentIndex < images.length - 1) {   
            currentIndex++;
            show()
        } 
        
    })

  
    closeBtn.addEventListener('click', (e) => {
        gallery.classList.remove('show')
    })

    document.onkeydown = (e) => {
        if(e.keyCode == 27) gallery.classList.remove('show')
    }
}

handleEvent()