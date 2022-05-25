const toggleButton = document.getElementsByClassName('fa-bars')[0];
const sideBar = document.getElementsByClassName('side-bar')[0];
const modalBg = document.getElementsByClassName('modal-bg')[0];

document.addEventListener('click', (event) => {
    console.log(event.target, sideBar.children);
    if (event.target != sideBar.children[0] && event.target != sideBar.children[1] && event.target != sideBar.children[2] && event.target != toggleButton) {
        sideBar.classList.remove('side-bar-active');
        modalBg.classList.remove('modal-bg-active');
    }
})

toggleButton.addEventListener('click', () => {
    sideBar.classList.toggle('side-bar-active');
    modalBg.classList.toggle('modal-bg-active');
})