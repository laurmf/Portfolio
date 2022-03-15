

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
       

        scroll_fotos(scroll,5,"#moda_cajita")
        
        scroll_fotos(scroll,5,"#moda_cajita2")
       
        scroll_fotos(scroll,8,"#moda_cajita3")
       
        scroll_fotos(scroll,8,"#moda_cajita4")
   
        scroll_fotos(scroll,5,"#moda_cajita5")
        
        scroll_fotos(scroll,5,"#moda_cajita6")
       
        scroll_fotos(scroll,5,"#moda_cajita7")
       
        

    })
    

    // STREET SCROLL
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
       

        scroll_fotos(scroll,5,"#cajita_street")
        
        scroll_fotos(scroll,5,"#cajita_street2")
       
        scroll_fotos(scroll,8,"#cajita_street3")
       
        scroll_fotos(scroll,8,"#cajita_street4")
   
        scroll_fotos(scroll,5,"#cajita_street5")
        
        
       
        

    })

    // PAISAJE SCROLL

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
       

        scroll_fotos(scroll,5,"cajita_paisaje")
        
        scroll_fotos(scroll,5,"cajita_paisaje2")
       
        scroll_fotos(scroll,8,"cajita_paisaje3")
       
        scroll_fotos(scroll,8,"cajita_paisaje4")
   
        scroll_fotos(scroll,5,"cajita_paisaje5")
        
        scroll_fotos(scroll,5,"cajita_paisaje6")
       
        scroll_fotos(scroll,5,"cajita_paisaje7")
       
        

    })




















});
function scroll_fotos(scroll,proporcion,id){
    
        var movimiento= scroll/proporcion;
        console.log( "Scroll: "+scroll);
        $(id).css({
            "transform":"translateY("+movimiento+"px)"
        })
}