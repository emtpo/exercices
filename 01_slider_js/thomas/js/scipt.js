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