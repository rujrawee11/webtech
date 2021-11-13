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
    div12.setAttribute("class","ques-card2-6");
    div12.setAttribute("style","width:500px; height:100px; border-radius: 10px;");
    allcard.appendChild(div12);

    var div22 = document.createElement('div');
    div22.setAttribute("class","card-body")
    div12.appendChild(div22);

    var div32 =document.createElement('p');
    div32.setAttribute("style","font-size: 16px;");
    var p12 = document.createTextNode("การตรวจสอบการรับรองย้อนหลัง");
    div22.appendChild(div32);
    div32.appendChild(p12);

    var div42 = document.createElement('a');
    div42.setAttribute("class","cta");
    div22.appendChild(div4);

    var idiv42 = document.createElement("i");
    idiv42.setAttribute("class", "material-icons");
    idiv42.setAttribute("id","icon");
    var ic2 = document.createTextNode("arrow_forward");
    idiv42.appendChild(ic2);
    div42.appendChild(idiv42);

    // 3
    var div13 = document.createElement('div');
    div13.setAttribute("class","ques-card2-7");
    div13.setAttribute("style","width:500px; height:100px; border-radius: 10px;");
    allcard.appendChild(div13);

    var div23 = document.createElement('div');
    div23.setAttribute("class","card-body")
    div13.appendChild(div23);

    var div33 =document.createElement('p');
    div33.setAttribute("style","font-size: 16px;");
    var p13 = document.createTextNode("ข้อแนะนำการขอการรับรองอย่างเหมาะสม");
    div23.appendChild(div33);
    div33.appendChild(p13);

    var div43 = document.createElement('a');
    div43.setAttribute("class","cta");
    div23.appendChild(div43);

    var idiv43 = document.createElement("i");
    idiv43.setAttribute("class", "material-icons");
    idiv43.setAttribute("id","icon");
    var ic3 = document.createTextNode("arrow_forward");
    idiv43.appendChild(ic3);
    div43.appendChild(idiv43);
    // 4
    var div14 = document.createElement('div');
    div14.setAttribute("class","ques-card2-8");
    div14.setAttribute("style","width:500px; height:100px; border-radius: 10px;");
    allcard.appendChild(div14);

    var div24 = document.createElement('div');
    div24.setAttribute("class","card-body")
    div14.appendChild(div24);

    var div34 =document.createElement('p');
    div34.setAttribute("style","font-size: 16px;");
    var p14 = document.createTextNode("การตรวจสอบการรับรองย้อนหลัง");
    div24.appendChild(div34);
    div34.appendChild(p14);

    var div44 = document.createElement('a');
    div44.setAttribute("class","cta");
    div24.appendChild(div44);

    var idiv44 = document.createElement("i");
    idiv44.setAttribute("class", "material-icons");
    idiv44.setAttribute("id","icon");
    var ic4 = document.createTextNode("arrow_forward");
    idiv42.appendChild(ic4);
    div44.appendChild(idiv44);

    setpage3()
    setpage4()
}
function setpage3() {
    var page4 = document.getElementById("allcard")
    var height = page4.offsetHeight;
    var newheight = height + 300
    page4.style.height = newheight + 'px'
}

function setpage4() {
    var page4 = document.getElementById("pageques")
    var height = page4.offsetHeight;
    var newheight = height + 300
    page4.style.height = newheight + 'px'
}