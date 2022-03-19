// probably not the best way to go about this

// using "n" to assign unique ID to each item
let n = 0;

// clicking button creates item from input field with n ID, empties the input field and increments n
$("#add-btn").click(() => {
    if ($("input").val() !== ""){
        $("ul").append(`<li class="item" id=${n}>${$("input").val()}<button type="button" class="dlt-btn" id="dlt-btn${n}"></button></li>`);
        $("input").val("");
    // console.log(`#${n}`);
        n++;
    }
});

// honestly this almost drove me crazy, it's working but i don't think i understand
// clicking item toggles "completed" class (line-through)
$('#todo-list').on('click', '.item', function(event) {
    $(event.target).toggleClass("completed");
});

$('#todo-list').on('click', '.dlt-btn', function(event) {
    ((event.target).parentElement).remove();
});
