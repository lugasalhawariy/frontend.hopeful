const navbar = document.querySelector(".navbar");
const carousel = document.querySelector("section.section-carousel");


document.addEventListener('scroll', () => {
    var scrolled = document.scrollingElement.scrollTop;

    if(scrolled > carousel.clientHeight){
        navbar.classList.add('navbar-hopefull');
    }else{
        navbar.classList.remove('navbar-hopefull');
    }
});