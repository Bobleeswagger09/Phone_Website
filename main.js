const btn = document.querySelector("#menu-btn");
const menu = document.querySelector(".nav__items");

//
btn.onclick = () => {
    btn.classList.toggle('fa-times');
    menu.classList.toggle('active');
    menu.style.display = 'block';
};
//
window.onscroll = () => {
    btn.classList.remove('fa-times');
    menu.classList.remove('active');
};

// show/hide faqs
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-plus') {
            icon.className = 'fa-solid fa-minus';
        } else {
            icon.className = 'fa-solid fa-plus';
        }
    })
})


// add background style to navbar
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

