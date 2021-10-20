let parallaxImage = document.getElementById('ParallaxImage');
let parallaxContent = document.getElementById('ParallaxContent');
let topbar = document.getElementById('topbar');
let windowScrolled;

window.addEventListener('scroll', function windowScroll() {
    windowScrolled = window.pageYOffset || this.document.documentElement.scrollTop;
    console.log(windowScrolled);
    if (windowScrolled >= 300){
        topbar.style.visibility = 'hidden';
    }else{
        topbar.style.visibility = 'visible';
        topbar.style.backgroundColor = "#254dcf";
    }
    parallaxImage.style.transform = `translate3d(0, ${windowScrolled / 2}px, 0)`;
    parallaxContent.style.transform = `translate3d(0, ${windowScrolled / 10}px, 0)`;
})
