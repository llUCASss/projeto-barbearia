const scrollAnima = document.querySelector('[data-anima="scroll"]');

const topo = document.querySelector('.topo');

const metadeWindow = window.innerHeight * 6.2;

window.addEventListener("scroll", animaScroll =>{

    const topoItem = scrollAnima.getBoundingClientRect().top;

    const itemVisivel = topoItem - metadeWindow < 0;

    if(itemVisivel){

        scrollAnima.classList.add("show-button")

    }else{

        scrollAnima.classList.remove("show-button")

    }

});



/*function scrollToTop(){

    window.scrollTo({

        top: 0,

        behavior:'smooth'

    })

}*/

topo.addEventListener("click", () =>{

    window.scrollTo({

        top: 0,

        behavior:'smooth'

    })


})










