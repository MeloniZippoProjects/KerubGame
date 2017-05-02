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

function Component(name, number, description, coords)
{
    this.name = name;
    this.number = number;
    this.description = description;
    this.coords = coords;
}


var components = [
    new Component('Gruppo Ruota', 1, '...', [0.5, 0.5]),
    new Component('Pedaliera', 2, '...', [0.3, 0.3])
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
