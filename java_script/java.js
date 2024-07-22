//change navbar styles on scrool

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


//show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach( faq =>{
    faq.addEventListener('click',() =>{
        faq.classList.toggle('open');

        //change icons

        const icon = faq.querySelector('.faq-incon i');

        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }else{
            icon.className = "uil uil-plus";
        }
    })
})

//responsice menu

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',() =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


//close nav menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);

//end of responsivité



//javascript pour les images

document.querySelectorAll('.image-container img').forEach(image  => {
    image.onclick = ()  => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});
document.querySelector('.popup-image span').onclick = ()  =>{
    document.querySelector('.popup-image').style.display = 'none';
}