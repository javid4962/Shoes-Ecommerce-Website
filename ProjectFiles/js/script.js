let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 => {
    image_1.addEventListener('click', () => {
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 => {
    image_2.addEventListener('click', () => {
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 => {
    image_3.addEventListener('click', () => {
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});
document.querySelectorAll('.featured-image-4').forEach(image_4 => {
    image_4.addEventListener('click', () => {
        var src = image_4.getAttribute('src');
        document.querySelector('.big-image-4').src = src;
    });
});
document.querySelectorAll('.featured-image-5').forEach(image_5 => {
    image_5.addEventListener('click', () => {
        var src = image_5.getAttribute('src');
        document.querySelector('.big-image-5').src = src;
    });
});
document.querySelectorAll('.featured-image-6').forEach(image_6 => {
    image_6.addEventListener('click', () => {
        var src = image_6.getAttribute('src');
        document.querySelector('.big-image-6').src = src;
    });
});
document.querySelectorAll('.featured-image-7').forEach(image_7 => {
    image_7.addEventListener('click', () => {
        var src = image_7.getAttribute('src');
        document.querySelector('.big-image-7').src = src;
    });
});
document.querySelectorAll('.featured-image-8').forEach(image_8 => {
    image_8.addEventListener('click', () => {
        var src = image_8.getAttribute('src');
        document.querySelector('.big-image-8').src = src;
    });
});
document.querySelectorAll('.featured-image-9').forEach(image_9 => {
    image_9.addEventListener('click', () => {
        var src = image_9.getAttribute('src');
        document.querySelector('.big-image-9').src = src;
    });
});
document.querySelectorAll('.featured-image-10').forEach(image_10 => {
    image_10.addEventListener('click', () => {
        var src = image_10.getAttribute('src');
        document.querySelector('.big-image-10').src = src;
    });
});
document.querySelectorAll('.featured-image-11').forEach(image_11 => {
    image_11.addEventListener('click', () => {
        var src = image_11.getAttribute('src');
        document.querySelector('.big-image-11').src = src;
    });
});
document.querySelectorAll('.featured-image-12').forEach(image_12 => {
    image_12.addEventListener('click', () => {
        var src = image_12.getAttribute('src');
        document.querySelector('.big-image-12').src = src;
    });
});
document.querySelectorAll('.featured-image-13').forEach(image_13 => {
    image_13.addEventListener('click', () => {
        var src = image_13.getAttribute('src');
        document.querySelector('.big-image-13').src = src;
    });
});
document.querySelectorAll('.featured-image-9').forEach(image_9 => {
    image_9.addEventListener('click', () => {
        var src = image_9.getAttribute('src');
        document.querySelector('.big-image-9').src = src;
    });
});
document.querySelectorAll('.featured-image-9').forEach(image_9 => {
    image_9.addEventListener('click', () => {
        var src = image_9.getAttribute('src');
        document.querySelector('.big-image-9').src = src;
    });
});
document.querySelectorAll('.featured-image-9').forEach(image_9 => {
    image_9.addEventListener('click', () => {
        var src = image_9.getAttribute('src');
        document.querySelector('.big-image-9').src = src;
    });
});

const loginButton = document.querySelector('.login');
const buy = document.querySelector('.buy');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

loginButton.addEventListener('click', () => {
    loginButton.style.color = 'white'
    payment.style.display = "flex";
    loginButton.style.transform = "scale(1)"
});
buy.addEventListener('click', () => {
    loginButton.style.color = 'red';
    loginButton.style.transform = "scale(1.5)"

});
close.addEventListener('click', () => {
    payment.style.display = "none";
});


