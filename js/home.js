const ok =`
    <h3>High-end custom residential renovators serving Fraser valley homeowners</h3>
    <button>Visit Website</button>
    `
const card = `diavvpj`

$(document).ready(function() {
    $(".work-card").html(card)
    let watchClickedCard;

    $(".work-card").click(function() {
        // remove 'active' class from previous work-card and set html back to normal
        $(watchClickedCard).removeClass("active")
        $(watchClickedCard).html(card)

        // store the current clicked card in the watch var than add class and html to it
        watchClickedCard = this;
        $(this).addClass("active").html(ok)
    })
})
