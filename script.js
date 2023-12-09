let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');
let imageMeio = document.querySelector('#image_meio_logo');



menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active'); 


    if(header.classList.contains('active')){
        imageMeio.style.display = 'none';

    }  else {
        imageMeio.style.display = 'flex';
    }

}



window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
    imageMeio.style.display = 'flex';
}




let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');


window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}


document.querySelectorAll('a').map(links => {


    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
});


