$(function () {
    
    $("#btnPalpitar").click(function() {
        const tiene = $(".hola").hasClass("saludo");

        if (tiene == true) {
            $(".hola").removeClass("saludo");
        } else {
            $(".hola").addClass("saludo");
        }
    })

})