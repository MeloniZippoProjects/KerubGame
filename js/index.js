/**
 * Created by Raff on 29/04/2017.
 */

var currentStage = 8;

var stagesNumber = 13;

function clickActiveArea()
{
    if(++currentStage <= stagesNumber)
        loadStage(currentStage);
}

$().ready(function() {
    $(activeAreaSelector).click(clickActiveArea);
    loadStage(currentStage);
});

