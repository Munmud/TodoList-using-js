var totalItem = 0;
var inputon = true;


$("#addButton").on("click", function () {
    if (inputon == false) {
        $(".allList").before('<div class="input-group"><input type="text" class="form-control" id="givenInput" placeholder="Add new todo"></div>');
    }
    else {
        $(".input-group").remove();
    }
    inputon = inputon == false ? true : false;
});

$(".mainContent").on("keypress" ,"#givenInput" ,function (event) {
    if (event.which === 13) {
        var input = $("#givenInput").val();
        if (input != "") {
            // add new div 
            addToDo(input);
            $("#givenInput").val("");
        }
    }
} ) ;

function addToDo(input) {
    totalItem++;
    $("ul").append('<li class="textItem"> <span class="deleteButton"><i class="fas fa-trash"></i></span>'+ input + '</li>') ;


}

$("ul").on("click", "li" ,function () {
    $(this).toggleClass('ketedao');
});

$("ul").on( "click" , "span" , function (event) {
    $(this).parent().remove();
} ) ;

