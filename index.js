const toggleButton = document.getElementsByClassName('fa-bars')[0];
const sideBar = document.getElementsByClassName('side-bar')[0];
const modalBg = document.getElementsByClassName('modal-bg')[0];
const academyButton = document.getElementsByClassName('academy')[0];
const sideBarAcademy = document.getElementsByClassName('side-bar-academy')[0];
const academyBackButton = document.querySelector('.menu-academy-div h1');
const investButton = document.getElementsByClassName('invest')[0];
const sideBarInvest = document.getElementsByClassName('side-bar-invest')[0];
const investBackButton = document.querySelector('.menu-invest-div h1');
const mainMenu = document.getElementsByClassName('main-menu-container')[0];
const mainMenuMobile = document.getElementsByClassName('main-menu-mobile-container')[0];
const searchButton = document.getElementsByClassName('fa-magnifying-glass')[1];
const bannerBar = document.getElementsByClassName('banner-bar')[0];
const searchBar = document.getElementsByClassName('search-bar')[0];
const closeSearchButton = document.getElementsByClassName('fa-times')[0];
const exameBanner = document.getElementsByClassName('exame-banner')[0];
var oldScroll = window.scrollY;
var searchBarOpen = false;
var searchBarClose = false;
var smallScreen = false;

if (window.innerWidth <= 764) {
    mainMenu.classList.add('display-none');
    mainMenuMobile.classList.add('display-block');
    console.log('menor');
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 764 && smallScreen == false) {
        mainMenu.classList.add('display-none');
        mainMenuMobile.classList.add('display-block');
        smallScreen = true;
    }
    if (window.innerWidth >= 764 && smallScreen) {
        mainMenu.classList.remove('display-none');
        mainMenuMobile.classList.remove('display-block');
        smallScreen = false;
    }
}, true);

window.addEventListener('scroll', () => {
    if (this.scrollY > oldScroll && searchBarOpen == false) {
        setTimeout(() => {
            mainMenu.classList.remove('main-menu-up');
            mainMenuMobile.classList.remove('main-menu-up');
        }, 250);
    }
    if (this.scrollY < oldScroll && searchBarClose == false) {
        setTimeout(() => {
            mainMenu.classList.add('main-menu-up');
            mainMenuMobile.classList.add('main-menu-up');
        }, 250);
    }
    if (this.scrollY != 0) {
        exameBanner.classList.add('exame-banner-smaller');
    } else {
        exameBanner.classList.remove('exame-banner-smaller');
    }
    searchBarClose = false;
    searchBarOpen = false;
    oldScroll = this.scrollY;
})

document.addEventListener('click', (event) => {
    if (event.target != sideBar.children[0] && event.target != sideBar.children[1] && event.target != sideBar.children[2] && event.target != toggleButton && event.target != academyButton && event.target != academyBackButton && event.target != investButton && event.target != investBackButton) {
        sideBar.classList.remove('side-bar-active');
        modalBg.classList.remove('modal-bg-active');
    }
})

toggleButton.addEventListener('click', () => {
    sideBar.classList.add('side-bar-active');
    modalBg.classList.add('modal-bg-active');
})

academyButton.addEventListener('click', () => {
    sideBarAcademy.classList.add('side-bar-academy-active');
    sideBar.classList.add('no-overflow');
})

academyBackButton.addEventListener('click', () => {
    sideBarAcademy.classList.remove('side-bar-academy-active');
    sideBar.classList.remove('no-overflow');
})

investButton.addEventListener('click', () => {
    sideBarInvest.classList.add('side-bar-invest-active')
    sideBar.classList.add('no-overflow');
})

investBackButton.addEventListener('click', () => {
    sideBarInvest.classList.remove('side-bar-invest-active');
    sideBar.classList.remove('no-overflow');
})

searchButton.addEventListener('click', () => {
    if (window.scrollY != 0) {
        mainMenu.classList.add('main-menu-up');
        mainMenuMobile.classList.add('main-menu-up');
        searchBarOpen = true;
    }
    bannerBar.classList.add('display-none');
    searchBar.classList.add('display-flex');
})

closeSearchButton.addEventListener('click', () => {
    bannerBar.classList.remove('display-none');
    searchBar.classList.remove('display-flex');
    mainMenu.classList.remove('main-menu-up');
    mainMenuMobile.classList.remove('main-menu-up');
    searchBarClose = true;
})