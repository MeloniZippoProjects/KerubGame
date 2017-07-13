var currentStage = 1;

var stagesNumber = 13;

function clickActiveArea()
{
    if(++currentStage <= stagesNumber)
        loadStage(currentStage);
}

$().ready(function() {
    preloadComponentImages();
    preloadStageImages()

    $(".active-area").click(clickActiveArea);
    $(stageImgSelector).ready(loadStage.bind(this, currentStage));
});
