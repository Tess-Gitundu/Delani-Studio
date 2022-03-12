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






// frontend logic