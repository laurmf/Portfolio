

$(document).ready(function(){
    $("#caja_linea").click(function(){
        console.log("Clic en caja_linea") 
        $(".opciones").toggleClass("open")
    })
    // RETRATO SCROLL
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
       
        scroll_fotos(scroll,5,"#cajita")
        
        scroll_fotos(scroll,5,"#cajita2")
       
        scroll_fotos(scroll,8,"#cajita3")
       
        scroll_fotos(scroll,8,"#cajita4")
   
        scroll_fotos(scroll,5,"#cajita5")
        
        scroll_fotos(scroll,5,"#cajita6")
       
        scroll_fotos(scroll,5,"#cajita7")
      
        scroll_fotos(scroll,8,"#cajita8")
       
        scroll_fotos(scroll,8,"#cajita9")
      
        scroll_fotos(scroll,8,"#cajita12")
        
        scroll_fotos(scroll,8,"#cajita13")
        
        scroll_fotos(scroll,8,"#cajita14")
        
        scroll_fotos(scroll,-8,"#cajita15")

       
        scroll_fotos(scroll,-5,"#cajita16")

    })
    // MODA SCROLL
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var movimiento= scroll/5;
        console.log( "Scroll: "+scroll);
        $("#moda_cajita").css({
            "transform":"translateY("+movimiento+"px)"
        })
        var movimiento= scroll/5;
        console.log( "Scroll: "+scroll);
        $("#moda_cajita2").css({
            "transform":"translateY("+movimiento+"px)"
        })
        var movimiento= scroll/8;
        console.log( "Scroll: "+scroll);
        $("#moda_cajita3").css({
            "transform":"translateY("+movimiento+"px)"
        })
        var movimiento= scroll/8;
        console.log( "Scroll: "+scroll);
        $("#moda_cajita4").css({
            "transform":"translateY("+movimiento+"px)"
        })
        var movimiento= scroll/5;
        console.log( "Scroll: "+scroll);
        $("#moda_cajita5").css({
            "transform":"translateY("+movimiento+"px)"
        })
        var movimiento= scroll/8;
        console.log( "Scroll: "+scroll);
        $("#moda_cajita6").css({
            "transform":"translateY("+movimiento+"px)"
        })
        var movimiento= scroll/5;
        console.log( "Scroll: "+scroll);
        $("#moda_cajita7").css({
            "transform":"translateY("+movimiento+"px)"
        })
       
        

    })

    






















});
function scroll_fotos(scroll,proporcion,id){
    
        var movimiento= scroll/proporcion;
        console.log( "Scroll: "+scroll);
        $(id).css({
            "transform":"translateY("+movimiento+"px)"
        })
}