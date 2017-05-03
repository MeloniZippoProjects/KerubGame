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

var componentNames = //12 components
    [
        'Motore, trasmissione, cambio',
        'Aspirazione',
        'Scarico',
        'Radiatore',
        'Sospensione, Portamozzi, Mozzi',
        'Seduta',
        'Volante',
        'Pedaliera',
        'Carene',
        'Ali posteriori',
        'Ali frontali',
        'Ruote'
    ];

var componentDescriptions = //description for components
    [
        //Motore
        "Questo è il telaio di Kerub X, la nostra vettura. " +
        "Da solo però non muoversi, ha bisogno di qualcosa " +
        "che possa dargli la spinta...",
        //Aspirazione
        "Abbiamo aggiunto il motore, cambio e la trasmissione. " +
        "Però il motore ha bisogno di aspirare aria dall'esterno. " +
        "Bisogna aggiungerci un Plenum",
        //Scarico
        "L'aria che entra ha bisogno anche di uscire... " +
        "Attenzione: questo pezzo non è posizionato dove " +
        "solitamente si trova nelle automobili convenzionali!",
        //Radiatore
        "Il motore raggiunge temperature molto elevate. " +
        "Per fare in modo che non fonda c'è bisogno di un circuito " +
        "idraulico per raffreddarlo. Aiutino, anche questo pezzo, " +
        "come lo scarico precedente, non è posizionato lì " +
        "dove solitamente si trova nelle automobili convenzionali.",
        //Sospensioni
        "Ora che tutta la zona motore è completata bisogna trovare " +
        "il modo per tenerla \"sospesa\" dal terreno",
        //Seduta
        "Bene, ma il pilota dovrà pure sedersi da qualche parte.....",
        //Volante
        "....e dovrà avere uno strumento per decidere " +
        "la direzione in cui muoversi....",
        //Pedaliera
        " ...ed avere la possibilità di " +
        "accelerare e frenare a piacimento.",
        //Carene
        "Bene. Ora Kerub X è quasi pronta. è il momento di vestirla!",
        //Ali posteriori
        "Aggiungiamo qualcosa che faccia tenere attaccate" +
        " al terreno le ruote di trazione",
        //Ali Frontali
        "...e quelle folli per aumentare il carico complessivo.",
        //Ruote
        "uhmmm, forse ci manca un ultima cosa...",
        //Fine
        "Ed ecco a voi Kerub X!!!"
    ];

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

var components = [//component name, comp number, comp desc, active area coordinates, radius
    new Component(componentNames[0], 1, componentDescriptions[0], [ [0.39, 0.52], [0, 0] ], [75, 0]),
    new Component(componentNames[1], 2, componentDescriptions[1], [ [0.39, 0.385] , [0, 0] ], [55, 0]),
    new Component(componentNames[2], 3, componentDescriptions[2], [ [0.39, 0.65] , [0, 0] ], [65, 0]),
    new Component(componentNames[3], 4, componentDescriptions[3], [ [0.34, 0.40] , [0, 0] ], [30, 0]),  //Multipoint
    new Component(componentNames[4], 5, componentDescriptions[4], [ [0.60, 0.65] , [0, 0] ], [110, 0]),  //Multipoint
    new Component(componentNames[5], 6, componentDescriptions[5], [ [0.48, 0.56] , [0, 0] ], [110, 0]),
    new Component(componentNames[6], 7, componentDescriptions[6], [ [0.55, 0.56] , [0, 0] ], [50, 0]),
    new Component(componentNames[7], 8, componentDescriptions[7], [ [0.67, 0.72] , [0, 0] ], [50, 0]),
    new Component(componentNames[8], 9, componentDescriptions[8], [ [0.55, 0.6] , [0, 0] ], [100, 0]),
    new Component(componentNames[9], 10, componentDescriptions[9], [ [0.3, 0.3] , [0, 0] ], [90, 0]),
    new Component(componentNames[10], 11, componentDescriptions[10], [ [0.7, 0.72] , [0, 0] ], [75, 0]),
    new Component(componentNames[11], 12, componentDescriptions[11], [ [0.51, 0.75] , [0, 0] ], [50, 0]) //multipoint
];

function finish()
{
    $(componentImgSelector).hide();
    $(componentNameSelector).text('Abbiamo finito!');
    $(componentDescriptionSelector).text(componentDescriptions[12]);
    $(activeAreaSelector).hide();
}

function loadComponent(componentNumber)
{
    console.log("loading component " + componentNumber);

    var imgNode = $(componentImgSelector)[0];
    var nameNode = $(componentNameSelector);
    var descriptionNode = $(componentDescriptionSelector);

    if(componentNumber < 13)
    {
        var component = components[componentNumber - 1];

        imgNode.src = componentsDir + componentPrefix + componentNumber + componentSuffix;

        nameNode.text(component.name);

        descriptionNode.text(component.description);
    }
    else
    {
        finish();
    }
    return component;
}
