//carrossel de filmes linkado no script do HTML

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false, //botões de nav desabilitados
    responsive:{
        0:{
            items:1 
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})