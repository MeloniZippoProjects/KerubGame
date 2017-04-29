/**
 * Created by Raff on 29/04/2017.
 */

var components = [ "FrontWing", "GruppoRuota", "RearWing", "seduta", "sidepod", "volante"];

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
