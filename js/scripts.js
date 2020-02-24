function success(){
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var text = document.getElementById("comment").value;
    if(email==""||name==""||text==""){
        alert("Please ensure you enter all the provided spaces.")
    }
    else{
        alert(name+" your message/comment has been received successfully")
    }
    document.getElementById("output").innerHTML=
    ("Your Message has been Submited SUCCESSFULLY>>>");

};



$(document).ready(function(){
    $("img.design ").click(function(){
        $("p#design").slideToggle();
        $("img.design").slideToggle();
    })
    $("p.des").click(function(){
        $("img.design").slideToggle();
        $("p#design").slideToggle();
    })

    $("img.development").click(function(){
        $("p#development").slideToggle();
        $("img.development").slideToggle();
    })
    $("p.dev").click(function(){
        $("img.development").slideToggle();
        $("p#development").slideToggle();
    })

    $("img.product").click(function(){
        $("p#product").slideToggle();
        $("img.product").slideToggle();
    })
    $("p.pro").click(function(){
        $("img.product").slideToggle();
        $("p#product").slideToggle();

    })


});

$(document).ready(function(){
    $("img#port1").mouseover(function(){
        $("p.port1").show();
    }).mouseout(function(){
        $("p.port1").hide();
    });

    $("img#port2").mouseover(function(){
        $("p.port2").show();
    }).mouseout(function(){
        $("p.port2").hide();
    });

    $("img#port3").mouseover(function(){
        $("p.port3").show();
    }).mouseout(function(){
        $("p.port3").hide();
    });

    $("img#port4").mouseover(function(){
        $("p.port4").show();
    }).mouseout(function(){
        $("p.port4").hide();
    });

    $("img#port5").mouseover(function(){
        $("p.port5").show();
    }).mouseout(function(){
        $("p.port5").hide();
    });

    $("img#port6").mouseover(function(){
        $("p.port6").show();
    }).mouseout(function(){
        $("p.port6").hide();
    });

    $("img#port7").mouseover(function(){
        $("p.port7").show();
    }).mouseout(function(){
        $("p.port7").hide();
    });

    $("img#port8").mouseover(function(){
        $("p.port8").show();
    }).mouseout(function(){
        $("p.port8").hide();
    });

});