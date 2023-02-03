let x_turn = true

$("td").each(function() {
    $(this).on("click", function() {
        if ($(this).text() == ""){
            if (x_turn) {
                $(this).text("X")
                x_turn = !x_turn
                $("#turn-marker").text("O")
            }
            else {
                $(this).text("O")
                x_turn = !x_turn
                $("#turn-marker").text("X")
            }
        }
    })
})