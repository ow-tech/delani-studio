$(document).ready(function(){
    $("img.design ").click(function(){
        $("p#design").slideToggle();
        $("img.design").slideToggle();
    })
    $("p.des").click(function(){
        $("img.design").slideToggle();
        $("p#design").slideToggle();
    });

    $("img.development").click(function(){
        $("p#development").slideToggle();
        $("img.development").slideToggle();
    })
    $("p.dev").click(function(){
        $("img.development").slideToggle();
        $("p#development").slideToggle();
    });

    $("img.product").click(function(){
        $("p#product").slideToggle();
        $("img.product").slideToggle();
    })
    $("p.pro").click(function(){
        $("img.product").slideToggle();
        $("p#product").slideToggle();

    })


})