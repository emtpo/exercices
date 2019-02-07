/*   
Règles et conditions:

Doit fonctionner non pas avec deux slides, mais plusieurs slides

    Le nombre de slides doit pouvoir être dynamique,     
    peut importe le nombre slide on doit pouvoir      
    aller à la slide suivante et précédente 
*/

/* 
Mon Js fait durant le cours:

                au clique de next
$(".next").on("click", function(){

   var idSlide = $(".active").attr("id");
   console.log(idSlide);

    if(idSlide ==="one"){
        $("#one").removeClass("active");
        $("#two").addClass("active");
    }else if(idSlide === "two"){
        $("#two").removeClass("active");
        $("#tree").addClass("active");
    }else if (idSlide ==="tree"){
        $("#tree").removeClass("active");
        $("#one").addClass("active");
    }
});


                Au clique de previous
$(".prev").on("click", function(){

    var idSlide = $(".active").attr("id");
    console.log(idSlide);
 
     if(idSlide ==="one"){
         $("#one").removeClass("active");
         $("#tree").addClass("active");
     }else if (idSlide === "tree"){
         $("#tree").removeClass("active");
         $("#two").addClass("active");
     }else if (idSlide ==="two"){
        $("#two").removeClass("active");
        $("#one").addClass("active");
    }
});
/*

//$(".arrow").on("click", function(){})

Malheuresement je pensais qu'il fallait créer un slide dynamique !

/* 
Première tentative d'un slide dynamique : ECHEC
    $(function(){
       setInterval(function(){
          $(".slideshow ul").animate({marginLeft:-350},800,function(){
             $(this).css({marginLeft:0}).find(".slides").after($(this).find("img:first"));
          })
       }, 3500);
    });
*/

/*
Deuxième tentative d'un slide dynamique : ECHEC

créer une variable comprenant les élèments de la galerie photos
 var  images = ["photo1.jpg", "photo2.jpg","photo3.jpg"];

 débuter la variable du début
    var i=0;

    créer un interval entre chaque slides en se rapportant à la galerie
        setInterval(function(){
            document.getElementById(`slider`).src=images[i]
            i++;

            quand on arrive a la fin, revenir au début
            if(i==3) i=0;  
            
            tps entre chaques slides
        },1000)
*/

/*
Alors il est trop tard quand j'ai eu cette idée, je n'ai plus le temps d'essayer cette méthode. 
Cependant je pense qu avec des <ul> <li> <img>... <li> <img>... <\ul> cela pourrait fonctionner.

En créant une function et la développer de façon à ce que:
Quand on appuye sur suiv. le li prochain arrive et inversement. On utilise le mot next et previous. en utilisant un removeClass et addClass/*
*/

var slideIndex = 0;
var slides = $(".slides")

showSlide(slideIndex);

function showSlide(NumberSlide){
    let idSlide = slides[NumberSlide].id;
    $(".slides").removeClass("active");
    $(`#${idSlide}`).addClass("active");
}

$(".arrow").on("click", function(){


    //si prev: console.log(prev)
    if($(this).hasClass("prev")){
        slideIndex--;
        if(slideIndex < 0){
            slideIndex = slides.length -1;}
        console.log(slideIndex);
        showSlide(slideIndex)};
        
    
    //si next: console.log(next)
    if($(this).hasClass("next")){
        slideIndex++;
        if(slideIndex > slides.length -1){
            slideIndex=0;
        }
        showSlide(slideIndex)};
})