// Function cursor

let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');
let imageMeio = document.querySelector('#image_meio_logo');



menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');


    if (header.classList.contains('active')) {
        imageMeio.style.display = 'none';

    } else {
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


document.querySelectorAll('a').forEach(links => {
    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
});

// Function location

window.onload = function () {
    function reverseGeocode(latitude, longitude) {
        const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.address) {
                    const address = `${data.address.road}, ${data.address.city}, ${data.address.country}`;

                    document.getElementById('user_location').value = address;
                } else {
                    console.error('Nenhum resultado encontrado');
                }
            })
            .catch(error => {
                console.error('Erro na geocodificação:', error);
            });
    }

    navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        document.getElementById('user_location').value = `Latitude: ${latitude}, Longitude: ${longitude}`;

        reverseGeocode(latitude, longitude);
    });
}


// Function carousel


let currentSlide = 0;

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.card');
    const totalSlides = slides.length;

    if (slideIndex >= totalSlides) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = slideIndex;
    }

    const offset = -currentSlide * 100 + '%';
    document.querySelector('.carousel').style.transform = 'translateX(' + offset + ')';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}


// FUNCTION KEY FRAMES
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('input_number').onkeyup = function(){
		mascara( this, mtel );
	}
}



