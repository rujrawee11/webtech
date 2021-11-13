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

function add() {
    let allcard =document.getElementById('allcard')
// 1
    var div1 = document.createElement('div');
    div1.setAttribute("class","ques-card2-5");
    div1.setAttribute("style","width:500px; height:100px; border-radius: 10px;");
    allcard.appendChild(div1);

    var div2 = document.createElement('div');
    div2.setAttribute("class","card-body")
    div1.appendChild(div2);

    var div3 =document.createElement('p');
    div3.setAttribute("style","font-size: 16px;");
    var p1 = document.createTextNode("ข้อแนะนำการขอการรับรองอย่างเหมาะสม");
    div2.appendChild(div3);
    div3.appendChild(p1);

    var div4 = document.createElement('a');
    div4.setAttribute("class","cta");
    div2.appendChild(div4);

    var idiv4 = document.createElement("i");
    idiv4.setAttribute("class", "material-icons");
    idiv4.setAttribute("id","icon");
    var ic = document.createTextNode("arrow_forward");
    idiv4.appendChild(ic);
    div4.appendChild(idiv4);
    // 2
    var div12 = document.createElement('div');
    div12.setAttribute("class","card");
    div12.setAttribute("style","width:500px;", "height:100px;", "position:absolute;", "left:500px;");
    allcard.insertBefore(div12, morebox);

    var div22 = document.createElement('div');
    div22.setAttribute("class","card-body")
    div12.appendChild(div22);

    var div32 =document.createElement('p');
    div32.setAttribute("style","font-size: 16px;");
    var p12 = document.createTextNode("การตรวจสอบการรับรองย้อนหลัง");
    div22.appendChild(div32);
    div32.appendChild(p12);

    setpage3()
}
function setpage3() {
    var page4 = document.getElementById("allcard")
    var height = page4.offsetHeight;
    var newheight = height + 300
    page4.style.height = newheight + 'px'
}