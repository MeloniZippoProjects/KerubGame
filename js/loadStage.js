/**
 * Created by enric on 30/04/2017.
 */


var stageImgSelector = "#stage-img";
var stagesDir = "./img/stages/";
var stageImgPrefix = "stage";
var stageImgExtension = ".png";
var activeAreaSelector = "#active-area";
var activeAreaRadius = 20;

function getRelativeCoords(coords)
{
    var x = coords[0];
    var y = coords[1];

    var stageImg = $(stageImgSelector)[0];
    xNew = x*stageImg.width - activeAreaRadius;
    yNew = y*stageImg.height - activeAreaRadius;

    return [xNew, yNew];
}

function placeArea(component)
{
    var activeArea = $(activeAreaSelector);


    console.log(component.coords);
    var coords = getRelativeCoords(component.coords);

    activeArea.css('left', coords[0] + "px");
    activeArea.css('top', coords[1] + "px");
}

function loadStage(stageNumber)
{
    console.log("loading stage " + stageNumber);
    var imgNode = $(stageImgSelector)[0];
    imgNode.src = stagesDir + stageImgPrefix + stageNumber + stageImgExtension;

    //TODO - show new component
    component = loadComponent(stageNumber);

    //TODO - active areas creation
    $(imgNode).ready(placeArea.bind(imgNode,component));
}
