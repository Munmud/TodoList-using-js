var totalItem = 0;
var inputon = false;

$("#addButton").on("click", function () {
    if (inputon == false) {
        $(".allList").before('<div class="input-group"><input type="text" class="form-control" id="givenInput"></div>');
    }
    else {
        $(".input-group").remove();
    }
    inputon = inputon == false ? true : false;

    $("#givenInput").keypress(function (event) {
        if (event.which === 13) {
            var input = $("#givenInput").val();
            if (input != "") {
                // add new div 
                addToDo(input);
                $("#givenInput").val("");
            }
        }
    });
});

function addToDo(input) {
    totalItem++;
    $(".allList").append('<div class="listItem" ' + 'id="listNum' + totalItem + '"><div class="deleteButton"><i class="fas fa-trash-alt"></i></div><div class="textItem">' + input + '</div></div>');


    $(".textItem").on("click", function () {
        $(this).toggleClass('ketedao');
    });
    $(".deleteButton").on("click", function () {
        $(this).parent().remove();
    });


    // list-item mouseOver
    $(".listItem").on("mouseover", function () {
        $(this).find(".deleteButton").css("display", "block");
    });
    $(".listItem").on("mouseleave", function () {
        $(this).find(".deleteButton").css("display", "none");
    });

    //textItem


}
