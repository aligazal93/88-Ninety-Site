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