var stageImgSelector = "#stage-img";
var stagesDir = "./img/stages/";
var stageImgPrefix = "stage";
var stageImgExtension = ".png";
var mainActiveAreaSelector = "#main-active-area";
var secondaryActiveAreaSelector = "#secondary-active-area";

function getRelativeCoords(coords, radius)
{
    var centerX = coords[0];
    var centerY = coords[1];

    var stageImg = $(stageImgSelector)[0];
    var relativeX = centerX*stageImg.clientWidth - radius;
    var relativeY = centerY*stageImg.clientHeight - radius;

    return [relativeX, relativeY];
}

function placeArea(activeAreaSelector, absoluteCoords, radius)
{
    var activeArea = $(activeAreaSelector);
    console.log(activeArea);

    if(radius > 0) {
        var relativeCoords = getRelativeCoords(absoluteCoords, radius);

        activeArea.css('left', relativeCoords[0] + "px");
        activeArea.css('top', relativeCoords[1] + "px");

        activeArea.css('width', radius * 2 + "px");
        activeArea.css('height', radius * 2 + "px");
        activeArea.css('border-radius', radius + "px");
		activeArea.css('display', 'block');
    }
    else {
        activeArea.css('display', 'none');
    }
}

function preloadStageImages(){
    for(var stageNumber = 1; stageNumber <= 13; stageNumber++) {
        (new Image()).src = stagesDir + stageImgPrefix + stageNumber + stageImgExtension;
    }
}

function loadStage(stageNumber)
{
    console.log("loading stage " + stageNumber);
    var imgNode = $(stageImgSelector)[0];
    imgNode.src = stagesDir + stageImgPrefix + stageNumber + stageImgExtension;

    component = loadComponent(stageNumber);

     $(imgNode).ready(
         function() {
             placeArea(mainActiveAreaSelector, component.coords[0], component.radius[0]);
             placeArea(secondaryActiveAreaSelector, component.coords[1], component.radius[1]);
		
		 //FDR
		if(stageNumber == 1 ){
		    var x = document.getElementById("main-active-area").id;
		    x.setAttribute("style", "left: 233,88 px;");
		}
		 
         });
}
