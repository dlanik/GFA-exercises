let count = $("h2").val();
$("#increase").click(() => {
    count++;
    $("h2").text(count);
})

$("#decrease").click(() => {
    count--;
    $("h2").text(count);
})
