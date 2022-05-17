const toggle = document.querySelector('#toggle');

const navBar = document.querySelector('#navbar');

const header = document.querySelector('#header');

document.addEventListener('click', (e) =>{

    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navBar'){

        toggle.classList.remove('active');

        navBar.classList.remove('active');

    }


});

toggle.addEventListener('click',() =>{

    toggle.classList.toggle('active');

    navBar.classList.toggle('active');

});