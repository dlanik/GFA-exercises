$("#first-button").click(() => {
    console.log("Yeah, you clicked me");
})

$("#second-button").click(() => {
    $("#first-button").text("Second button clicked");
})

$("#third-button").click(() => {
    $("button").css("background-color", "green");
})