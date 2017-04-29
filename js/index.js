/**
 * Created by Raff on 29/04/2017.
 */

$().ready(function() {
    loadComponents();
    $( ".component" ).draggable({
        helper: "clone",
        appendTo: $("body"),
        start: function(event, ui) {
            console.log($(this));
            $(this).css("z-index", 1000);
        }
    });

    $("#dropHere").droppable({
        drop: function(event, ui) {
            alert("dio porco");
        }
    });
});