/**
 * Created by enric on 30/04/2017.
 */


var stageImgSelector = "#stage-img";
var stagesDir = "./img/stages/";
var stageImgPrefix = "stage";
var stageImgExtension = ".png";
var activeAreaSelector = "#active-area";

function getRelativeCoords(coords, radius)
{
    var centerX = coords[0];
    var centerY = coords[1];

    var stageImg = $(stageImgSelector)[0];
    var relativeX = centerX*stageImg.clientWidth - radius;
    var relativeY = centerY*stageImg.clientHeight - radius;

    return [relativeX, relativeY];
}

function placeArea(component)
{
    var activeArea = $(activeAreaSelector);

    console.log(component.coords, component.radius);
    var coords = getRelativeCoords(component.coords, component.radius);

    activeArea.css('left', coords[0] + "px");
    activeArea.css('top', coords[1] + "px");

    activeArea.css('width', component.radius*2 + "px");
    activeArea.css('height', component.radius*2 + "px");
    activeArea.css('border-radius', component.radius + "px");
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
