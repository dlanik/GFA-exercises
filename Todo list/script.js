// probably not the best way to get about this

// using "n" to assign unique ID to each item
let n = 0;

// clicking button creates item from input field with n ID, empties the input field and increments n
$("button").click(() => {
    $("ul").append(`<li class="item" id=${n}>${$("input").val()}</li>`);
    $("input").val("");
    // console.log(`#${n}`);
    n++;
});

// honestly this almost drove me crazy, it's working but i don't think i fully understand
// clicking item toggles "completed" class (line-through)
$('#todo-list').on('click', '.item', function(event) {
    $(`#${event.target.id}`).toggleClass("completed");
});
