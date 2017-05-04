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
        "Questo è il telaio di Kerub X, la nostra ultima monoposto. " +
        "Come primo passo, aggiungere il motore, il cambio e la trasmissione",
        //Aspirazione
        "Il motore ha bisogno di aspirare aria dall'esterno per la combustione. " +
        "Procuriamogli un polmone, il 'Plenum'",
        //Scarico
        "L'aria, dopo la combustione, deve essere espulsa dallo scarico. " +
        "Indizio: questo componente non è collocato nella sua posizione usuale",
        //Radiatore
        "Poiché il motore raggiunge temperature molto elevate, " +
        "è necessario un circuito idraulico di raffreddamento. Indizio: anche questo pezzo, " +
        "come il precedente, ha una posizione inusuale",
        //Sospensioni
        "La zona motore è completata. È necessario adesso passare all'assetto del veicolo.",
        //Seduta
        "Ottimo! Ma il pilota dovrà pur sedersi da qualche parte...",
        //Volante
        "... e dovrà avere uno strumento per decidere " +
        "la direzione in cui andare...",
        //Pedaliera
        " ... ed avere la possibilità di " +
        "accelerare e frenare a piacimento.",
        //Carene
        "Bene. Ora Kerub X è quasi pronta. È il momento di pensare all'aerodinamica",
        //Ali posteriori
        "Le ali posteriori sono necessarie per mantenere l'aderenza al terreno, soprattutto alle alte velocità...",
        //Ali Frontali
        "...insieme a quelle frontali",
        //Ruote
        "Anche la qualità dei pneumatici è fondamentale per gareggiare",
        //Fine
        "L'assemblaggio è completato, ecco a voi Kerub X!"
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
    new Component(componentNames[3], 4, componentDescriptions[3], [ [0.34, 0.40] , [0.5, 0.5] ], [30, 30]),  //Multipoint
    new Component(componentNames[4], 5, componentDescriptions[4], [ [0.60, 0.65] , [0.3, 0.5] ], [110, 70]),  //Multipoint
    new Component(componentNames[5], 6, componentDescriptions[5], [ [0.48, 0.56] , [0, 0] ], [110, 0]),
    new Component(componentNames[6], 7, componentDescriptions[6], [ [0.55, 0.56] , [0, 0] ], [50, 0]),
    new Component(componentNames[7], 8, componentDescriptions[7], [ [0.67, 0.72] , [0, 0] ], [50, 0]),
    new Component(componentNames[8], 9, componentDescriptions[8], [ [0.55, 0.6] , [0, 0] ], [100, 0]),
    new Component(componentNames[9], 10, componentDescriptions[9], [ [0.3, 0.3] , [0, 0] ], [90, 0]),
    new Component(componentNames[10], 11, componentDescriptions[10], [ [0.7, 0.72] , [0, 0] ], [75, 0]),
    new Component(componentNames[11], 12, componentDescriptions[11], [ [0.51, 0.75] , [0.27, 0.57] ], [50, 50]) //multipoint
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
