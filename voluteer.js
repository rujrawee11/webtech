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

function processmore() {
    var processing = document.getElementById("processing");
    var morebox = document.getElementById("morebox")

    var card = document.createElement("div")
    card.setAttribute("class","card mt-3")
    card.setAttribute("style","height: 20vh;")
    processing.insertBefore(card, morebox)

    var nonameclass = document.createElement("div")
    card.appendChild(nonameclass)
    nonameclass.setAttribute("class","row col-12")

    var cardbody =document.createElement("div")
    cardbody.setAttribute("class","card-body h-12")
    nonameclass.appendChild(cardbody)

    var h2 = document.createElement("h2")
    h2.setAttribute("class","class-title text")
    h2.setAttribute("id","blue")
    cardbody.appendChild(h2)

    var b = document.createElement("b")
    h2.appendChild(b)
    var text = document.createTextNode("ส่งมอบผลงาน กิจกรรมปลูกต้นไม้ออนไลน์")
    b.appendChild(text)

    var p = document.createElement("p")
    cardbody.appendChild(p)
    p.setAttribute("class","card-text text-secondary")
    var ptext = document.createTextNode("กิจกรรมปลูกต้นไม้ออนไลน์ อยู่ระหว่างการเตรียมการเพาะปลูกจำนวน 500 ต้น ในรอบแรก เพื่อแจกจ่ายให้กับประชาชน (เริ่มเพาะพันธุ์ มกราคม. 2565)")
    p.appendChild(ptext)

    var textright = document.createElement("div")
    cardbody.appendChild(textright)
    textright.setAttribute("class","text-right")

    var a = document.createElement("a")
    textright.appendChild(a)
    a.setAttribute("class","text-secondary")
    a.setAttribute("href","#")
    a.setAttribute("id","inform")

    var texta = document.createTextNode("รายละเอียด →")
    a.appendChild(texta)

   

    var more = document.getElementById("processmore");
    more.setAttribute("onclick","");
    more.setAttribute("style","color:rgb(170, 170, 170); width:30%; border-radius:5px; background-color:rgb(210, 210, 210);")
    more.setAttribute("class",("btn"))
//----------------------------------------------//
//var page4 = document.getElementById('page4')
//page4.setAttribute("style","height: 530vh; overflow: hidden;")
setpage1()
}



function moredone() {
    var cardcol = document.getElementById("cardcol")
    var cardadd1 = document.createElement("div")
    var card3 = document.getElementById("card3")
    cardadd1.setAttribute("class","card")
    cardcol.insertBefore(cardadd1,card3)

    var img1 = document.createElement("img")
    img1.setAttribute("class","card-img-top")
    img1.setAttribute("src","kidsbook.webp")
    img1.setAttribute("alt","Card image cap")
    img1.setAttribute("style","border-top-left-radius: 20px; border-top-right-radius: 20px;")
    cardadd1.appendChild(img1)

    var cardbody1 = document.createElement("div")
    cardbody1.setAttribute("class","card-body")
    cardadd1.appendChild(cardbody1)

    var h21 = document.createElement("h2")
    h21.setAttribute("class","card-title")
    h21.setAttribute("id","cardtitle")
    cardbody1.appendChild(h21)
    var b1 = document.createElement("b")
    h21.appendChild(b1)
    var title1 = document.createTextNode("ส่งมอบผลงาน กิจกรรมบริจาคหนังสือ")
    b1.appendChild(title1)

    var p1 = document.createElement("p")
    p1.setAttribute("class","card-text")
    p1.setAttribute("style","margin-top:15%;")
    cardbody1.appendChild(p1)
    var text1 = document.createTextNode("โรงเรียนท่าคันโทวิทยาคาร ปี 2564 (อยู่ระหว่างการอัพเดตข้อมูล)")
    p1.appendChild(text1)

    var more1 = document.createElement("div")
    more1.setAttribute("class","text-center")
    cardbody1.appendChild(more1)
    var a1 = document.createElement("a")
    more1.appendChild(a1)
    a1.setAttribute("href","#")
    a1.setAttribute("class","text-secondary")
    a1.setAttribute("id","inform")

    var informtext1 = document.createTextNode("รายละเอียด →")
    a1.appendChild(informtext1)

    //----------------------------------------------------------------------------------------------------//

    var cardadd2 = document.createElement("div")
    var card3 = document.getElementById("card3")
    cardadd2.setAttribute("class","card")
    cardcol.insertBefore(cardadd2,card3)

    var img2 = document.createElement("img")
    img2.setAttribute("class","card-img-top")
    img2.setAttribute("src","orangewoman.webp")
    img2.setAttribute("alt","Card image cap")
    img2.setAttribute("style","border-top-left-radius: 20px; border-top-right-radius: 20px;")
    cardadd2.appendChild(img2)

    var cardbody2 = document.createElement("div")
    cardbody2.setAttribute("class","card-body")
    cardadd2.appendChild(cardbody2)

    var h22 = document.createElement("h2")
    h22.setAttribute("class","card-title")
    h22.setAttribute("id","cardtitle")
    cardbody2.appendChild(h22)
    var b2 = document.createElement("b")
    h22.appendChild(b2)
    var title2 = document.createTextNode("ส่งมอบผลงาน กิจกรรมบริจาคหนังสือ")
    b2.appendChild(title2)

    var p2 = document.createElement("p")
    p2.setAttribute("class","card-text")
    p2.setAttribute("style","margin-top:15%;")
    cardbody2.appendChild(p2)
    var text2 = document.createTextNode("โรงเรียนนิคมสงเคราะห์ สิงหาคม 2564 (อยู่ระหว่างการอัพเดตข้อมูล)")
    p2.appendChild(text2)

    var more2 = document.createElement("div")
    more2.setAttribute("class","text-center")
    cardbody2.appendChild(more2)
    var a2 = document.createElement("a")
    more2.appendChild(a2)
    a2.setAttribute("href","#")
    a2.setAttribute("class","text-secondary")
    a2.setAttribute("id","inform")

    var informtext2 = document.createTextNode("รายละเอียด →")
    a2.appendChild(informtext2)

    //------------------------------------------------------------------//

    var cardadd3 = document.createElement("div")
    var card5 = document.getElementById("card5")
    cardadd3.setAttribute("class","card")
    cardcol.insertBefore(cardadd3,card5)

    var img3 = document.createElement("img")
    img3.setAttribute("class","card-img-top")
    img3.setAttribute("src","colorbook.webp")
    img3.setAttribute("alt","Card image cap")
    img3.setAttribute("style","border-top-left-radius: 20px; border-top-right-radius: 20px;")
    cardadd3.appendChild(img3)

    var cardbody3 = document.createElement("div")
    cardbody3.setAttribute("class","card-body")
    cardadd3.appendChild(cardbody3)

    var h23 = document.createElement("h2")
    h23.setAttribute("class","card-title")
    h23.setAttribute("id","cardtitle")
    cardbody3.appendChild(h23)
    var b3 = document.createElement("b")
    h23.appendChild(b3)
    var title3 = document.createTextNode("ส่งมอบผลงาน กิจกรรมบริจาคหนังสือ")
    b3.appendChild(title3)

    var p3 = document.createElement("p")
    p3.setAttribute("class","card-text")
    p3.setAttribute("style","margin-top:15%;")
    cardbody3.appendChild(p3)
    var text3 = document.createTextNode("สถานสงเคราะห์เด็ก บ้านเด็กหญิง จ.อุดรธานี ปี 2563 (อยู่ระหว่างการอัพเดตข้อมูล)")
    p3.appendChild(text3)

    var more3 = document.createElement("div")
    more3.setAttribute("class","text-center")
    cardbody3.appendChild(more3)
    var a3 = document.createElement("a")
    more3.appendChild(a3)
    a3.setAttribute("href","#")
    a3.setAttribute("class","text-secondary")
    a3.setAttribute("id","inform")

    var informtext3 = document.createTextNode("รายละเอียด →")
    a3.appendChild(informtext3)

    //---------------------------------------------------------------------//

    var cardadd4 = document.createElement("div")
    var card5 = document.getElementById("card5")
    cardadd4.setAttribute("class","card")
    cardcol.insertBefore(cardadd4,card5)

    var img4 = document.createElement("img")
    img4.setAttribute("class","card-img-top")
    img4.setAttribute("src","2people.webp")
    img4.setAttribute("alt","Card image cap")
    img4.setAttribute("style","border-top-left-radius: 20px; border-top-right-radius: 20px;")
    cardadd4.appendChild(img4)

    var cardbody4 = document.createElement("div")
    cardbody4.setAttribute("class","card-body")
    cardadd4.appendChild(cardbody4)

    var h24 = document.createElement("h2")
    h24.setAttribute("class","card-title")
    h24.setAttribute("id","cardtitle")
    cardbody4.appendChild(h24)
    var b4 = document.createElement("b")
    h24.appendChild(b4)
    var title4 = document.createTextNode("ส่งมอบผลงาน กิจกรรมบริจาคหนังสือ")
    b4.appendChild(title4)

    var p4 = document.createElement("p")
    p4.setAttribute("class","card-text")
    p4.setAttribute("style","margin-top:15%;")
    cardbody4.appendChild(p4)
    var text4 = document.createTextNode("กศน. ตำบลนาดี")
    p4.appendChild(text4)

    var more4 = document.createElement("div")
    more4.setAttribute("class","text-center")
    cardbody4.appendChild(more4)
    var a4 = document.createElement("a")
    more4.appendChild(a4)
    a4.setAttribute("href","#")
    a4.setAttribute("class","text-secondary")
    a4.setAttribute("id","inform")

    var informtext4 = document.createTextNode("รายละเอียด →")
    a4.appendChild(informtext4)


    //------------------------------------------------------//

    var cardadd5 = document.createElement("div")
    var card7 = document.getElementById("card7")
    cardadd5.setAttribute("class","card")
    cardcol.insertBefore(cardadd5,card7)

    var img5 = document.createElement("img")
    img5.setAttribute("class","card-img-top")
    img5.setAttribute("src","manybook.webp")
    img5.setAttribute("alt","Card image cap")
    img5.setAttribute("style","border-top-left-radius: 20px; border-top-right-radius: 20px;")
    cardadd5.appendChild(img5)

    var cardbody5 = document.createElement("div")
    cardbody5.setAttribute("class","card-body")
    cardadd5.appendChild(cardbody5)

    var h25 = document.createElement("h2")
    h25.setAttribute("class","card-title")
    h25.setAttribute("id","cardtitle")
    cardbody5.appendChild(h25)
    var b5 = document.createElement("b")
    h25.appendChild(b5)
    var title5 = document.createTextNode("ส่งมอบผลงาน กิจกรรมบริจาคหนังสือ")
    b5.appendChild(title5)

    var p5 = document.createElement("p")
    p5.setAttribute("class","card-text")
    p5.setAttribute("style","margin-top:15%;")
    cardbody5.appendChild(p5)
    var text5 = document.createTextNode("ศูนย์การศึกษานอกระบบ อ.ท่าคันโท จ.กาฬสินธุ์ สิงหาคม 2564 (อยู่ระหว่างการอัพเดตข้อมูล)")
    p5.appendChild(text5)

    var more5 = document.createElement("div")
    more5.setAttribute("class","text-center")
    cardbody5.appendChild(more5)
    var a5 = document.createElement("a")
    more5.appendChild(a5)
    a5.setAttribute("href","#")
    a5.setAttribute("class","text-secondary")
    a5.setAttribute("id","inform")

    var informtext5 = document.createTextNode("รายละเอียด →")
    a5.appendChild(informtext5)

    //---------------------------------------------//

    var cardadd6 = document.createElement("div")
    var card7 = document.getElementById("card7")
    cardadd6.setAttribute("class","card")
    cardcol.insertBefore(cardadd6,card7)

    var img6 = document.createElement("img")
    img6.setAttribute("class","card-img-top")
    img6.setAttribute("src","manypeople.webp")
    img6.setAttribute("alt","Card image cap")
    img6.setAttribute("style","border-top-left-radius: 20px; border-top-right-radius: 20px;")
    cardadd6.appendChild(img6)

    var cardbody6 = document.createElement("div")
    cardbody6.setAttribute("class","card-body")
    cardadd6.appendChild(cardbody6)

    var h26 = document.createElement("h2")
    h26.setAttribute("class","card-title")
    h26.setAttribute("id","cardtitle")
    cardbody6.appendChild(h26)
    var b6 = document.createElement("b")
    h26.appendChild(b6)
    var title6 = document.createTextNode("ส่งมอบผลงาน กิจกรรมบริจาคหนังสือ")
    b6.appendChild(title6)

    var p6 = document.createElement("p")
    p6.setAttribute("class","card-text")
    p6.setAttribute("style","margin-top:15%;")
    cardbody6.appendChild(p6)
    var text6 = document.createTextNode("โรงเรียนขอนแก่นวิทยาเสริม กรกฏาคม 2564 (อยู่ระหว่างการอัพเดตข้อมูล)")
    p6.appendChild(text6)

    var more6 = document.createElement("div")
    more6.setAttribute("class","text-center")
    cardbody6.appendChild(more6)
    var a6 = document.createElement("a")
    more6.appendChild(a6)
    a6.setAttribute("href","#")
    a6.setAttribute("class","text-secondary")
    a6.setAttribute("id","inform")

    var informtext6 = document.createTextNode("รายละเอียด →")
    a6.appendChild(informtext6)

    //---------------------------------------------------//

    var cardadd7 = document.createElement("div")
    //var card8 = document.getElementById("moreboxdone")
    cardadd7.setAttribute("class","card")
    cardcol.appendChild(cardadd7)

    var img7 = document.createElement("img")
    img7.setAttribute("class","card-img-top")
    img7.setAttribute("src","school.webp")
    img7.setAttribute("alt","Card image cap")
    img7.setAttribute("style","border-top-left-radius: 20px; border-top-right-radius: 20px;")
    cardadd7.appendChild(img7)

    var cardbody7 = document.createElement("div")
    cardbody7.setAttribute("class","card-body")
    cardadd7.appendChild(cardbody7)

    var h27 = document.createElement("h2")
    h27.setAttribute("class","card-title")
    h27.setAttribute("id","cardtitle")
    cardbody7.appendChild(h27)
    var b7 = document.createElement("b")
    h27.appendChild(b7)
    var title7 = document.createTextNode("ส่งมอบผลงาน กิจกรรมบริจาคหนังสือ")
    b7.appendChild(title7)

    var p7 = document.createElement("p")
    p7.setAttribute("class","card-text")
    p7.setAttribute("style","margin-top:15%;")
    cardbody7.appendChild(p7)
    var text7 = document.createTextNode("โรงเรียนอุดรพัฒนศึกษา สิงหาคม 2564 (อยู่ระหว่างการอัพเดตข้อมูล)")
    p7.appendChild(text7)

    var more7 = document.createElement("div")
    more7.setAttribute("class","text-center")
    cardbody7.appendChild(more7)
    var a7 = document.createElement("a")
    more7.appendChild(a7)
    a7.setAttribute("href","#")
    a7.setAttribute("class","text-secondary")
    a7.setAttribute("id","inform")

    var informtext7 = document.createTextNode("รายละเอียด →")
    a7.appendChild(informtext7)

    //-------------------------------------------------//

    var cardadd8 = document.createElement("div")
    //var card8 = document.getElementById("moreboxdone")
    cardadd8.setAttribute("class","card")
    cardcol.appendChild(cardadd8)

    var img8 = document.createElement("img")
    img8.setAttribute("class","card-img-top")
    img8.setAttribute("src","bluebook.webp")
    img8.setAttribute("alt","Card image cap")
    img8.setAttribute("style","border-top-left-radius: 20px; border-top-right-radius: 20px;")
    cardadd8.appendChild(img8)

    var cardbody8 = document.createElement("div")
    cardbody8.setAttribute("class","card-body")
    cardadd8.appendChild(cardbody8)

    var h28 = document.createElement("h2")
    h28.setAttribute("class","card-title")
    h28.setAttribute("id","cardtitle")
    cardbody8.appendChild(h28)
    var b8 = document.createElement("b")
    h28.appendChild(b8)
    var title8 = document.createTextNode("ส่งมอบผลงาน กิจกรรมบริจาคหนังสือ")
    b8.appendChild(title8)

    var p8 = document.createElement("p")
    p8.setAttribute("class","card-text")
    p8.setAttribute("style","margin-top:15%;")
    cardbody8.appendChild(p8)
    var text8 = document.createTextNode("โรงเรียนท่าคันโทวิทยายน สิงหาคม 2564 (อยู่ระหว่างการอัพเดตข้อมูล)")
    p8.appendChild(text8)

    var more8 = document.createElement("div")
    more8.setAttribute("class","text-center")
    cardbody8.appendChild(more8)
    var a8 = document.createElement("a")
    more8.appendChild(a8)
    a8.setAttribute("href","#")
    a8.setAttribute("class","text-secondary")
    a8.setAttribute("id","inform")

    var informtext8 = document.createTextNode("รายละเอียด →")
    a8.appendChild(informtext8)


    //--*********---------------------------------------------------//
    //var page4 = document.getElementById('page4')
    //page4.setAttribute("style","height: 620vh; overflow: hidden;")
    //--------------------------------------------//
    var moredone = document.getElementById("moredone");
    moredone.setAttribute("onclick","again()");

    setpage2()
}

function again() {
    var cardcol2 = document.createElement("div")
    cardcol2.setAttribute("class","card-columns")
    cardcol2.setAttribute("style","margin-top:-8%;")
    var result = document.getElementById("result")
    var moredonebox = document.getElementById("moreboxdone")
    result.insertBefore(cardcol2,moredonebox)

    var cardadd8 = document.createElement("div")
    //var card8 = document.getElementById("moreboxdone")
    cardadd8.setAttribute("class","card")
    cardcol2.appendChild(cardadd8)

    var img8 = document.createElement("img")
    img8.setAttribute("class","card-img-top")
    img8.setAttribute("src","welcome.webp")
    img8.setAttribute("alt","Card image cap")
    img8.setAttribute("style","border-top-left-radius: 20px; border-top-right-radius: 20px;")
    cardadd8.appendChild(img8)

    var cardbody8 = document.createElement("div")
    cardbody8.setAttribute("class","card-body")
    cardadd8.appendChild(cardbody8)

    var h28 = document.createElement("h2")
    h28.setAttribute("class","card-title")
    h28.setAttribute("id","cardtitle")
    cardbody8.appendChild(h28)
    var b8 = document.createElement("b")
    h28.appendChild(b8)
    var title8 = document.createTextNode("ส่งมอบผลงาน กิจกรรมบริจาคหนังสือ")
    b8.appendChild(title8)

    var p8 = document.createElement("p")
    p8.setAttribute("class","card-text")
    p8.setAttribute("style","margin-top:15%;")
    cardbody8.appendChild(p8)
    var text8 = document.createTextNode("โรงเรียนนิคมสงเคราะห์ สิงหาคม 2564 (อยู่ระหว่างการอัพเดตข้อมูล)")
    p8.appendChild(text8)

    var more8 = document.createElement("div")
    more8.setAttribute("class","text-center")
    cardbody8.appendChild(more8)
    var a8 = document.createElement("a")
    more8.appendChild(a8)
    a8.setAttribute("href","#")
    a8.setAttribute("class","text-secondary")
    a8.setAttribute("id","inform")

    var informtext8 = document.createTextNode("รายละเอียด →")
    a8.appendChild(informtext8)

    //-----------//
    var more = document.getElementById("moredone");
    more.setAttribute("onclick","");
    more.setAttribute("style","color:rgb(170, 170, 170); width:30%; border-radius:5px; background-color:rgb(210, 210, 210);")
    more.setAttribute("class",("btn"))

    //-------------------------//
    //var page4 = document.getElementById('page4')
    //page4.setAttribute("style","height: 670vh; overflow: hidden;")
    setpage3()
}

function setpage1() {
    var page4 = document.getElementById("page4")
    var height = page4.offsetHeight;
    var newheight = height + 200
    page4.style.height = newheight + 'px'

}

function setpage2() {
    var page4 = document.getElementById("page4")
    var height = page4.offsetHeight;
    var newheight = height + 770
    page4.style.height = newheight + 'px'
}

function setpage3() {
    var page4 = document.getElementById("page4")
    var height = page4.offsetHeight;
    var newheight = height + 300
    page4.style.height = newheight + 'px'
}
