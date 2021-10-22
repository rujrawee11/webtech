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
    div3.setAttribute("style","border-top-left-radius: 20px; border-bottom-left-radius: 20px; background-image: url(https://static.wixstatic.com/media/58d396_d73664d37a2f4e5daba44044645d030c~mv2.jpeg/v1/fill/w_295,h_188,al_c,q_80,usm_0.66_1.00_0.01/58d396_d73664d37a2f4e5daba44044645d030c~mv2.webp); background-repeat: no-repeat; background-size: 100%; height: 100%;")
    div2.appendChild(div3);

    var div4 = document.createElement('div');
    div4.setAttribute("class","card-body h-10 col-8");
    div2.appendChild(div4);

    var hdiv4 = document.createElement("h1");
    hdiv4.setAttribute("class", "card-title");
    hdiv4.setAttribute("id","cardtitle");
    var b = document.createElement("b");
    hdiv4.appendChild(b);
    var title = document.createTextNode("สนับสนุนเพื่อพัฒนาระบบ");
    b.appendChild(title);
    div4.appendChild(hdiv4);
    var p = document.createElement("p");
    p.setAttribute("class","card-text");
    p.setAttribute("id","cardcontent");
    var textdes = document.createTextNode("สนับสนุนเงินทุนเพียงเล็กน้อย เพื่อใช้ในการพัฒนาระบบและโครงการ และสามารถรับเกียรติบัตรฟรีได้");
    div4.appendChild(p);
    p.appendChild(textdes);


    var div5 = document.createElement("div");
    div5.setAttribute("class","d-flex justify-content-between h-10");
    div4.appendChild(div5);

    var divcer = document.createElement("div");
    div5.appendChild(divcer);
    var hcer = document.createElement("h4");
    hcer.setAttribute("class","freecer");
    var textcer = document.createTextNode("เกียรติบัตรฟรี");
    hcer.appendChild(textcer);
    divcer.appendChild(hcer);

    var adiv5 = document.createElement("a");
    adiv5.setAttribute("href","#");
    adiv5.setAttribute("class","text-secondary");
    adiv5.setAttribute("id","inform");
    var inform = document.createTextNode("ดูรายละเอียด ")
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

}