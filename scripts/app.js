// START MENU EVENT CLICK 
const menutoggler = document.querySelector('.menu-toggler');
const navbar = document.querySelector('.navbar');
const listmenu = document.querySelector('.list-menu');

menutoggler.addEventListener('click', () => {
    navbar.classList.toggle('open-menu');
    if (navbar.classList.contains('open-menu')){
        listmenu.style.maxHeight = listmenu.scrollHeight + 'px';
        setTimeout(() => {
        listmenu.style.overflow = 'visible';
        }, 300);

    }else {
        listmenu.style.maxHeight = '0px';
        listmenu.style.overflow = 'hidden';
    }
});
// END MENU EVENT CLICK 
