$(document).ready(function() {
    $('#enterToDo').keyup(function(e) {
        if(e.keyCode == 13) {
            //console.log($(this).val());
            var newToDo = $(this).val();
            addToDo(newToDo);
            $(this).val("");
        }
    });
    $('#todo_list').on('click', 'li', function() {
        console.log("Click occured");
        if($(this).hasClass('hot')) {
            $(this).removeClass().addClass('done');
        } else if($(this).hasClass('done')) {
            $(this).remove();
        } else {
            $(this).addClass('hot');
        }
    })
});


function addToDo(todo) {
    var newToDo = $('<li>').text(todo);
    $('#todo_list').append(newToDo);
}
