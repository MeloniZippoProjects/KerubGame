/**
 * Created by Raff on 29/04/2017.
 */

var currentStage = 1;

var stagesNumber = 13;

function clickActiveArea()
{
    if(++currentStage <= stagesNumber)
        loadStage(currentStage);
}

$().ready(function() {
    $(".active-area").click(clickActiveArea);

    $(stageImgSelector).ready(loadStage.bind(this, currentStage));
});

