const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');
const panel_container = document.querySelector('.signin-signup');
const up_panel = document.querySelector('.panel-x');
const down_panel = document.querySelector('.panel-y');
const sign_in_btn2 = document.querySelector('#sign-in-btn2');
const sign_up_btn2 = document.querySelector('#sign-up-btn2');


sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode-cont');
    panel_container.classList.add('sign-up-mode');
    up_panel.classList.add('second-panel');
    down_panel.classList.add('second-panel');
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode-cont');
    panel_container.classList.remove('sign-up-mode');
    up_panel.classList.remove('second-panel');
    down_panel.classList.remove('second-panel');
});

sign_up_btn2.addEventListener('click', () => {
    container.classList.add('sign-up-mode-cont2');
});


sign_in_btn2.addEventListener('click', () => {
    container.classList.remove('sign-up-mode-cont2');
});