$(document).ready(function() {

    // mobile navigation
    $(".mobile-navigation").hide()

    // open mobile navigation
    $("nav .open-nav-icon").click(function() {
        $(".mobile-navigation div.contents").hide()
        $(".mobile-navigation").show()

        setTimeout(function() {
            $(".mobile-navigation div.contents").show()
        }, 1000)
    })

    // close mobile navigation
    $(".mobile-navigation .close-nav-icon").click(function() {
        $(".mobile-navigation").hide()
    })

    // handle mouseover and mouseout on work-card
    $(".work-card").mouseover(function() {
        $(this).addClass("active")
    })

    $(".work-card").mouseout(function() {
        $(this).removeClass("active")
    })
})