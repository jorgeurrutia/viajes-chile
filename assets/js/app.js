$(function(){
    $(".card-title").click(function(){
        $(".card-text").toggle();
    });

    $('#send').click(function(){
        alert('El mensaje ya fue enviado');
    });
});

// Ocultar navbar al hacer scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } 
    else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}