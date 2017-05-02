/**
 * Created by Raff on 29/04/2017.
 */

//var components = [ "FrontWing", "GruppoRuota", "RearWing", "seduta", "sidepod", "volante"];

/*
function loadComponents() {
    var componentsDiv = $("#components")[0];

    for (var i = 0; i < components.length; i++)
    {
        var component = new Image;
        component.src = "./img/render/" + components[i] + ".png";
        $(component).addClass("component");
        component.title = components[i];
        componentsDiv.appendChild(component);
    }
}
*/

var componentNames = ['Gruppo ruota', 'Pedaliera', 'Ali posteriori', 'Seduta', 'Pancia Laterale', 'Volante', 'Ali frontali']; //TODO - Add components name with same order as images
var componentImgSelector = "#component-img";
var componentNameSelector = "#component-name";
var componentDescriptionSelector = "#component-description";
var componentsDir = "./img/components/";
var componentPrefix = "component";
var componentSuffix = ".png";

function Component(name, number, description, coords, radius)
{
    this.name = name;
    this.number = number;
    this.description = description;
    this.coords = coords;
    this.radius = radius;
}

var components = [
    new Component('Gruppo Ruota', 1, '...', [0.39, 0.52], 75),
    new Component('Pedaliera', 2, '...', [0.39, 0.385], 55),
    new Component('Boh qualcosa', 3, '...', [0.39, 0.65], 65),
    new Component('Boh qualcosa', 4, '...', [0.39, 0.65], 65),  //Multipoint
    new Component('Boh qualcosa', 5, '...', [0.39, 0.65], 65),  //Multipoint
    new Component('Boh qualcosa', 6, '...', [0.48, 0.56], 110),
    new Component('Boh qualcosa', 6, '...', [0.55, 0.56], 50),
    new Component('Boh qualcosa', 6, '...', [0.67, 0.72], 50)


];


function loadComponent(componentNumber)
{
    console.log("loading component " + componentNumber);
    var component = components[componentNumber-1];

    var imgNode = $(componentImgSelector)[0];
    imgNode.src = componentsDir + componentPrefix + componentNumber + componentSuffix;

    var nameNode = $(componentNameSelector);
    nameNode.text(component.name);

    var descriptionNode = $(componentDescriptionSelector);
    descriptionNode.text(component.description);

    return component;
}
