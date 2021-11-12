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
    let morebox =document.getElementById('morebox')

    var div1 = document.createElement('div');
    div1.setAttribute("class","card mt-5");
    div1.setAttribute("style","height: 27vh;");
    allcard.insertBefore(div1, morebox);

    var div2 = document.createElement('div');
    div2.setAttribute("class","row col-12")
    div1.appendChild(div2);

    var div3 =document.createElement('div');
    div3.setAttribute("class","col-4 h-80");
    div3.setAttribute("style","border-top-left-radius: 20px; border-bottom-left-radius: 20px; background-image: url(bag.jpg); background-repeat: no-repeat; background-size: 100%; height: 100%;")
    div2.appendChild(div3);

    var div4 = document.createElement('div');
    div4.setAttribute("class","card-body h-10 col-8");
    div2.appendChild(div4);

    var hdiv4 = document.createElement("h1");
    hdiv4.setAttribute("class", "card-title");
    hdiv4.setAttribute("id","cardtitle");
    var b = document.createElement("b");
    hdiv4.appendChild(b);
    var title = document.createTextNode("จัดทำถุงผ้า เพื่อส่งมอบให้สถานพยาบาล");
    b.appendChild(title);
    div4.appendChild(hdiv4);
    var p = document.createElement("p");
    p.setAttribute("class","card-text");
    p.setAttribute("id","cardcontent");
    var textdes = document.createTextNode("ทำถุงผ้า นำไปส่งมอบให้กับสถานพยาบาลต่าง ๆ");
    div4.appendChild(p);
    p.appendChild(textdes);


    var div5 = document.createElement("div");
    div5.setAttribute("class","d-flex justify-content-end h-10");
    div4.appendChild(div5);

    /*var divcer = document.createElement("div");
    div5.appendChild(divcer);
    var hcer = document.createElement("h4");
    hcer.setAttribute("class","freecer");
    var textcer = document.createTextNode("เกียรติบัตรฟรี");
    hcer.appendChild(textcer);
    divcer.appendChild(hcer);*/

    var adiv5 = document.createElement("a");
    adiv5.setAttribute("href","info.html");
    adiv5.setAttribute("class","text-secondary");
    adiv5.setAttribute("id","inform");
    var inform = document.createTextNode("ดูรายละเอียด →")
    adiv5.appendChild(inform);
    var svg = document.createElement("svg");
    div5.appendChild(adiv5);
    svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
    svg.setAttribute("width",16);
    svg.setAttribute("height", 14);
    svg.setAttribute("fill","currentColor");
    svg.setAttribute("class","bi bi-arrow-right");
    svg.setAttribute("viewbox","0 0 16 16");
    adiv5.appendChild(svg);

    var path = document.createElement("path");
    path.setAttribute("fill-rule","evenodd");
    path.setAttribute("d","M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z")
    svg.appendChild(path);
//-------------------------------------------------------------------------------------------------------//
var c2div1 = document.createElement('div');
c2div1.setAttribute("class","card mt-5");
c2div1.setAttribute("style","height: 27vh;");
allcard.insertBefore(c2div1, morebox);

var c2div2 = document.createElement('div');
c2div2.setAttribute("class","row col-12")
c2div1.appendChild(c2div2);

var c2div3 =document.createElement('div');
c2div3.setAttribute("class","col-4 h-80");
c2div3.setAttribute("style","border-top-left-radius: 20px; border-bottom-left-radius: 20px; background-image: url(system.jpg); background-repeat: no-repeat; background-size: 100%; height: 100%;")
c2div2.appendChild(c2div3);

var c2div4 = document.createElement('div');
c2div4.setAttribute("class","card-body h-10 col-8");
c2div2.appendChild(c2div4);

var c2hdiv4 = document.createElement("h1");
c2hdiv4.setAttribute("class", "card-title");
c2hdiv4.setAttribute("id","cardtitle");
var c2b = document.createElement("b");
c2hdiv4.appendChild(c2b);
var c2title = document.createTextNode("สนับสนุนเพื่อพัฒนาระบบ");
c2b.appendChild(c2title);
c2div4.appendChild(c2hdiv4);
var c2p = document.createElement("p");
c2p.setAttribute("class","card-text");
c2p.setAttribute("id","cardcontent");
var c2textdes = document.createTextNode("สนับสนุนเงินทุนเพียงเล็กน้อย เพื่อใช้ในการพัฒนาระบบและโครงการ และสามารถรับเกียรติบัตรฟรีได้");
c2div4.appendChild(c2p);
c2p.appendChild(c2textdes);


var c2div5 = document.createElement("div");
c2div5.setAttribute("class","d-flex justify-content-between h-10");
c2div4.appendChild(c2div5);

var c2divcer = document.createElement("div");
c2div5.appendChild(c2divcer);
var c2hcer = document.createElement("h4");
c2hcer.setAttribute("class","freecer");
var c2textcer = document.createTextNode("เกียรติบัตรฟรี");
c2hcer.appendChild(c2textcer);
c2divcer.appendChild(c2hcer);

var c2adiv5 = document.createElement("a");
c2adiv5.setAttribute("href","info.html");
c2adiv5.setAttribute("class","text-secondary");
c2adiv5.setAttribute("id","inform");
var c2inform = document.createTextNode("ดูรายละเอียด →")
c2adiv5.appendChild(c2inform);
var c2svg = document.createElement("svg");
c2div5.appendChild(c2adiv5);
c2svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
c2svg.setAttribute("width",16);
c2svg.setAttribute("height", 14);
c2svg.setAttribute("fill","currentColor");
c2svg.setAttribute("class","bi bi-arrow-right");
c2svg.setAttribute("viewbox","0 0 16 16");
c2adiv5.appendChild(c2svg);

var c2path = document.createElement("path");
c2path.setAttribute("fill-rule","evenodd");
c2path.setAttribute("d","M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z")
c2svg.appendChild(c2path);
//-----------------------------------------------------------------------------------------------------------------//
    var more = document.getElementById("more");
    more.setAttribute("onclick","");
    more.setAttribute("style","color:rgb(170, 170, 170); width:30%; border-radius:5px; background-color:rgb(210, 210, 210);")
    more.setAttribute("class",("btn"))
//----------------------------------------------//
var page4 = document.getElementById('page4')
page4.setAttribute("style","height: 495vh; overflow: hidden;")
}
