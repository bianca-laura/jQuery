$("#texto").html("Isso é uma saida Jquery");

$(document).ready(function(){
    $(".ocultar").click(function(){                 //OCULTA TODOS OS ELEMENTOS P
        $("p").hide();
    });
    
});

$(document).ready(function(){
    $(".show").click(function(){                    //mostra os elementos p             
        $("p").show();
    });
    
});

$(".click").click(function(){
    $(this).html("muidei quando fui clicado");  //EVENTO CLICK
    
   
});

$(".click").dblclick(function(){
    $(this).html("mudei pois foi um click duplo");      //EVENTO DOBLE CLICK
    
   
});

$(document).ready(function(){
    $(".click").on({
        mouseenter: function(){
            $(this).css("background-color", "red");
        },
        
        mouseleave: function(){
            $(this).css("background-color", "#FFF");            //EVENTO MOUSE
        },

        mousedown: function(){
            $(this).css("background-color", "blue");
        },

        mouseup: function(){
            $(this).css("background-color", "green");
        },
    })
});

$(document).ready(function(){
    $(".teste").on({
        focus: function(){
            $(this).css("background-color", "red");
        },
        
        blur: function(){                                       //EVENTO FOCUS
            $(this).css("background-color", "#FFF");
        }
    });
});



// ------------------------------Efeitos e Animações ----------------------------------

$(document).ready(function(){
    $(".toggle").click(function(){                 
        $(".red").toggle(2000, function(){                       //esconde e mostra
            //alert("janela escondida com sucesso")  
        });
    }); 
});

$(document).ready(function(){
    $(".fadeToggle").click(function(){                 
        $(".blue").fadeToggle(2000);
    }); 
});

$(document).ready(function(){
    $(".green").click(function(){                 
        $(this).animate({top: "250px"});            //anima determinado elemento fazendo ele se deslocar
    }); 
});

$(document).ready(function(){
    $(".blue").click(function(){                 
        $(this).css("background-color","yellow").slideUp(2000).slideDown(2000);            //CADEAMENTO
    }); 
});


$(document).ready(function(){
    $(".flip").click(function(){                 
        $(".painel").slideToggle(2000);             //painel
    }); 
});


//------------------------------Manipulando DOM --------------------------------


$(document).ready(function(){
    $(".send").click(function(){                 
       var value = $(".email").val();
        alert("o seu email é: " + value);  //pagando o valor de um input selecionado
    }); 
});

//------------------------------------ AJAX -----------------------------------------


$(document).ready(function(){
    $("h1").mouseover(function(){                 
       $("#testando").load("text");
    }); 
});



//----------------------------------------- CONFLICT --------------------------------

//var jq = $.noConflict() //muda o sinal do $ para algum desejado
//jq(document).ready(function(){
 //   jq(".botao").click(function(){                 
   //     jq(".conflito").html("Isso é uma saida Jquery");
 //   }); 
//});

//---------------------------------------FILTER---------------------------------------


$(document).ready(function(){
    $(".buscar").on("keyup", function(){
        var value2 = $(this).val().toLowerCase();

        $(".myTable tr").filter(function(){                                             //busca de elementos
            $(this).toggle($(this).text().toLocaleLowerCase().indexOf(value2) > -1)
        })
    })
});

$(document).ready(function(){
    $(".buscarMercado").on("keyup", function(){
        var value3 = $(this).val().toLowerCase();

        $(".mercado li").filter(function(){                                             //busca de elementos
            $(this).toggle($(this).text().toLocaleLowerCase().indexOf(value3) > -1)
        })
    })
});

