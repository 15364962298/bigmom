window.onload=function(){
    // 导航栏
    let product=document.querySelector('.top_fixed .clearfix .top_nav .product')
    let js_nav=document.querySelector('.top_fixed .clearfix .top_nav .product .js_nav')
    product.onmouseenter=function(){
        js_nav.style.height='300px'
    }
    product.onmouseleave=function(){
        js_nav.style.height='0'
    }
    // banner
    let banner=document.querySelector('.banner');
    let banner_box=document.querySelectorAll('.banner .banner_box');
    let img_box=document.querySelectorAll('.banner .banner_box .img_box');
    let picture_box=document.querySelectorAll('.banner .banner_box .picture');
    let points=document.querySelectorAll('.banner .point li')
    let btn_lefts=document.querySelector('.banner .btn_left')
    let btn_rights=document.querySelector('.banner .btn_right')
    console.log(picture_box);
    let flag=true;
    console.log(banner,banner_box,img_box,picture_box)
    let num=0;
    let t=setInterval(move,3000);
    function move(){
        num++;
        if(num==banner_box.length){
            num=0;
        }
        for(let i=0;i<banner_box.length;i++){
            banner_box[i].style.zIndex='5';
            points[i].classList.remove('hot')
        }
        banner_box[num].style.zIndex='10';
        points[num].classList.add('hot')
    }
    function moves(){
        num--;
        if(num==-1){
            num=banner_box.length-1;
        }
        for(let i=0;i<banner_box.length;i++){
            banner_box[i].style.zIndex='5';
            points[i].classList.remove('hot')
        }
        banner_box[num].style.zIndex='10';
        points[num].classList.add('hot')
    }
    btn_rights.onclick=function(){
        move()
    }
    btn_lefts.onclick=function(){
        moves()
    }
    banner.onmouseenter=function(){
        clearInterval(t)
    }
    banner.onmouseleave=function(){
        t=setInterval(move,3000);
    }

    points.forEach(function(v,j){
        v.onclick=function(){
            for(let i=0;i<banner_box.length;i++){
                banner_box[i].style.zIndex='5';
                points[i].classList.remove('hot')
            }
            banner_box[j].style.zIndex='10';
            points[j].classList.add('hot')
        }
    })
//    鼠标移动事件
    banner.onmousemove=function(e){
        let x=e.offsetX
        let y=e.offsetY
        let top=(710-y)/5
        let left=(1120-x)/5
        if(top>150){
            top=150
        }
        if(left>150){
            left=150
        }
        if(top==0){
            top=0
        }
        if(left==0){
            left=0
        }
        console.log(x,y)
        picture_box.forEach(function(val,index){
            val.style=`top:${top}px;left:${left}px;`
        })
    }







}



