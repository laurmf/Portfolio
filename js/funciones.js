

$(document).ready(function(){
    $("#caja_linea").click(function(){
        console.log("Clic en caja_linea") 
        $(".opciones").toggleClass("open")
    })
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var movimiento= scroll/5;
        console.log( "Scroll: "+scroll);
        $("#cajita").css({
            "transform":"translateY("+movimiento+"px)"
        })
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
            "transform":"translateY(-"+movimiento+"px)"
        })
        var movimiento= scroll/5;
        console.log( "Scroll: "+scroll);
        $("#cajita5").css({
            "transform":"translateY(-"+movimiento+"px)"
        })
    })






















});