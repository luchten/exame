const toggleButton = document.getElementsByClassName('fa-bars')[0];
const sideBar = document.getElementsByClassName('side-bar')[0];
const modalBg = document.getElementsByClassName('modal-bg')[0];
const academyButton = document.getElementsByClassName('academy')[0];
const sideBarAcademy = document.getElementsByClassName('side-bar-academy')[0];
const academyBackButton = document.querySelector('.menu-academy-div h1');
const investButton = document.getElementsByClassName('invest')[0];
const sideBarInvest = document.getElementsByClassName('side-bar-invest')[0];
const investBackButton = document.querySelector('.menu-invest-div h1');
const mainMenu = document.getElementsByClassName('main-menu')[0];
const searchButton = document.getElementsByClassName('fa-magnifying-glass')[1];
const bannerBar = document.getElementsByClassName('banner-bar')[0];
const searchBar = document.getElementsByClassName('search-bar')[0];
const closeSearchButton = document.getElementsByClassName('fa-times')[0];
const exameBanner = document.getElementsByClassName('exame-banner')[0];
var oldScroll = window.scrollY;

window.addEventListener('scroll', () => {
    if (this.scrollY > oldScroll) {
        setTimeout(() => {            
            mainMenu.classList.remove('main-menu-up');
        }, 250);
    } else {
        setTimeout(() => {
            mainMenu.classList.add('main-menu-up');
        }, 250);
    }
    if (this.scrollY != 0) {
        exameBanner.classList.add('exame-banner-smaller');
    } else {
        exameBanner.classList.remove('exame-banner-smaller');
    }
    oldScroll = this.scrollY;
})

document.addEventListener('click', (event) => {
    if (event.target != sideBar.children[0] && event.target != sideBar.children[1] && event.target != sideBar.children[2] && event.target != toggleButton && event.target != academyButton && event.target != academyBackButton && event.target !=investButton && event.target != investBackButton) {
        sideBar.classList.remove('side-bar-active');
        modalBg.classList.remove('modal-bg-active');
    }
})

toggleButton.addEventListener('click', () => {
    sideBar.classList.toggle('side-bar-active');
    modalBg.classList.toggle('modal-bg-active');
})

academyButton.addEventListener('click', () => {
    sideBarAcademy.classList.toggle('side-bar-academy-active');
    sideBar.classList.toggle('no-overflow');
})

academyBackButton.addEventListener('click', () => {
    sideBarAcademy.classList.toggle('side-bar-academy-active');
    sideBar.classList.toggle('no-overflow');
})

investButton.addEventListener('click', () => {
    sideBarInvest.classList.toggle('side-bar-invest-active')
    sideBar.classList.toggle('no-overflow');
})

investBackButton.addEventListener('click', () => {
    sideBarInvest.classList.toggle('side-bar-invest-active');
    sideBar.classList.toggle('no-overflow');
})

searchButton.addEventListener('click', () => {
    bannerBar.classList.toggle('display-none'); 
    searchBar.classList.toggle('display-flex');
})

closeSearchButton.addEventListener('click', () => {
    bannerBar.classList.toggle('display-none');
    searchBar.classList.toggle('display-flex');
})