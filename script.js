//scroll
document.querySelector('.barra').addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e.target);
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

const section0 = document.querySelector('.section--0');

document.querySelector('.up').addEventListener('click', function (a) {
    // a.preventDefault();
    // console.log(a);
    section0.scrollIntoView({ behavior: 'smooth' });
});
