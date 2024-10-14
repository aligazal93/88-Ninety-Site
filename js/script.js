$('.worksSlider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    rtl: false,
    autoplay: true,
    pagination: true,
    autoplayTimeout: 7000,
    smartSpeed: 2200,
    dragEndSpeed: 1000,
    animate: false,
    animateOut: 'fadeOut',
    animateIn: 'slideInDown',
    navText: [
        "<i class='fa fa-long-arrow-alt-right'></i> ",
        "<i class='fa fa-long-arrow-alt-left'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


const ClientButtons = document.querySelectorAll('.client-btn');
const ServicesButtons = document.querySelectorAll('.service-btn');
const cleanAllBtn = document.getElementById('clean-all-btn');

ClientButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the active class on the clicked button
        button.classList.toggle('active');
    });
});
ServicesButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the active class on the clicked button
        button.classList.toggle('active');
    });
});

cleanAllBtn.addEventListener('click', () => {
    ClientButtons.forEach(button => {
        button.classList.remove('active');
    });
});


