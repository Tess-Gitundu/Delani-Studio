// backend logic
$(document).ready(function(){
    $(".des").click(function(){
        $(".des").toggle();
        $(".design").show();

        $(".design").click(function(){
            $(".design").slideUp();
            $(".des").slideDown();
        })
    }) 
})
$(document).ready(function(){
    $(".dev").click(function(){
        $(".dev").toggle();
        $(".development").show();

        $(".development").click(function(){
            $(".development").slideUp();
            $(".dev").slideDown();
        })
    }) 
})
$(document).ready(function(){
    $(".prod").click(function(){
        $(".prod").toggle();
        $(".product").show();

        $(".product").click(function(){
            $(".product").slideUp();
            $(".prod").slideDown();
        })
    }) 
})








// frontend logic