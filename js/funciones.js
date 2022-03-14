

$(document).ready(function(){
    $("#caja_linea").click(function(){
        console.log("Clic en caja_linea") 
        $(".opciones").toggleClass("open")
    })
    // RETRATO SCROLL
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        // var movimiento= scroll/5;
        // console.log( "Scroll: "+scroll);
        // $("#cajita").css({
        //     "transform":"translateY("+movimiento+"px)"
        // })
        scroll_fotos(scroll,5,"#cajita")
        var movimiento= scroll/5;
        console.log( "Scroll: "+scroll);
        $("#cajita2").css({
            "transform":"translateY("+movimiento+"px)"
        })
        var movimiento= scroll/8;
        console.log( "Scroll: "+scroll);
        $("#cajita3").css({
            "transform":"translateY("+movimiento+"px)"
        })
        var movimiento= scroll/8;
        console.log( "Scroll: "+scroll);
        $("#cajita4").css({
            "transform":"translateY("+movimiento+"px)"
        })
        var movimiento= scroll/5;
        console.log( "Scroll: "+scroll);
        $("#cajita5").css({
            "transform":"translateY("+movimiento+"px)"
        })
        var movimiento= scroll/8;
        console.log( "Scroll: "+scroll);
        $("#cajita6").css({
            "transform":"translateY("+movimiento+"px)"
        })
        var movimiento= scroll/5;
        console.log( "Scroll: "+scroll);
        $("#cajita7").css({
            "transform":"translateY("+movimiento+"px)"
        })
        var movimiento= scroll/8;
        console.log( "Scroll: "+scroll);
        $("#cajita8").css({
            "transform":"translateY("+movimiento+"px)"
        })
        var movimiento= scroll/8;
        console.log( "Scroll: "+scroll);
        $("#cajita9").css({
            "transform":"translateY("+movimiento+"px)"
        })
        var movimiento= scroll/8;
        console.log( "Scroll: "+scroll);
        $("#cajita12").css({
            "transform":"translateY("+movimiento+"px)"
        })
        var movimiento= scroll/8;
        console.log( "Scroll: "+scroll);
        $("#cajita13").css({
            "transform":"translateY("+movimiento+"px)"
        })
        var movimiento= scroll/8;
        console.log( "Scroll: "+scroll);
        $("#cajita14").css({
            "transform":"translateY("+movimiento+"px)"
        })
        scroll_fotos(scroll,8,"#cajita15")
        
        scroll_fotos(scroll,8,"#cajita15")

       
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