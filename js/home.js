$(document).ready(function() {

    // handle mouseover and mouseout on work-card
    $(".work-card").mouseover(function() {
        $(this).addClass("active")
    })

    $(".work-card").mouseout(function() {
        $(this).removeClass("active")
    })
})