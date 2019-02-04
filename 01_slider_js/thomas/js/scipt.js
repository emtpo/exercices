/*
    Doit fonctionner non pas avec
    deux slides, mais plusieurs slides

    Le nombre de slides doit pouvoir être dynamique,     
    peut importe le nombre slide on doit pouvoir      
    aller à la slide suivante et précédente 
*/


 //au clique de next
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


//au clique de previous
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

//$(".arrow").on("click", function(){})


//Première tentative: ECHEC
 /* <script type="text/javascript"/>
    $(function(){
       setInterval(function(){
          $(".slideshow ul").animate({marginLeft:-350},800,function(){
             $(this).css({marginLeft:0}).find(".slides").after($(this).find("img:first"));
          })
       }, 3500);
    });
 <script/> */
