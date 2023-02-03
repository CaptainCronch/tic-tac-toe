let x_turn = true
let win = false
let cells = $("td")
let values = ["x", "o"]
let groups = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


$(cells).each(function() {
    $(this).on("click", function() {
        if ($(this).text() == ""){
            if (x_turn) {
                $(this).text("X")
                x_turn = !x_turn
                $("#turn-marker").text("O")
            } else {
                $(this).text("O")
                x_turn = !x_turn
                $("#turn-marker").text("X")
            }

            if (check_win()) {
                console.log("WIN!!!!!!!")
            } else {
                console.log("not yet :(")
            }
        }
    })
})


function check_win() {
    for (value in values){
        for (group in groups) {
            for (cell in group) {
                if ($(cells).eq(cell).text() != value){
                    console.log($(cells).eq(cell).text())
                    break
                }
                console.log("worked")
                return true;
            }
        }
    }
    return false
}
