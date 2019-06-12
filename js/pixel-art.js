
  
  var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];


//Variables que yo cree.
var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var $IndicadorDeColor = $("#indicador-de-color");
var estaClickeado = false;
var cuadraditos = [];

//Funcion para crear la paleta.
var crearPaleta = function(){ 
  for(var i=0; i<nombreColores.length; i++){ 
    var coloresIndividuales = document.createElement("div"); 
    coloresIndividuales.className = "color-paleta";
    coloresIndividuales.style.backgroundColor = nombreColores[i]; 
    paleta.appendChild(coloresIndividuales);
   }
 };

function crearGrilla (){ 
  for(var i=0; i<1750; i++){
    var pixelesIndividuales = document.createElement("div");
    pixelesIndividuales.className = "pixel-a-pintar";
    grillaPixeles.appendChild(pixelesIndividuales);
    cuadraditos.push(i);
  }
} 

//Siempre tiene que ir dentro de esto (son casos especificios los que no)
$(document).ready(function() {

  $(".color-paleta").click(function(){
    var colorElegido = $(this).css("background-color");
   $IndicadorDeColor.css("background-color", colorElegido);
  });

  
  $(".pixel-a-pintar").click(function(){
    var colorIndicador = $IndicadorDeColor.css("background-color");
    $(this).css("background-color",colorIndicador);
  });
  
  //En ambos casos tome el selector HTML debido a qque si solo seleccionaba los pixeles a colorear, cuando realizaba el "mousedown" o el "mouseup" fuera de este rectangulo, la acción no era registrada por el sistema. 
  $("html").mousedown(function(){
    estaClickeado = true;
    //console.log("esta cliqueado");
  });
  $("html").mouseup(function(){
    estaClickeado = false;
    //console.log("no esta cliqueado");
  });

  $(".pixel-a-pintar").hover(function(){
    if(estaClickeado===true){
      //console.log("Hola");
      var colorIndicador = $IndicadorDeColor.css("background-color");
      $(this).css("background-color",colorIndicador)}
    });

  $("#borrar").click(function(){
   $(".pixel-a-pintar").animate({ "backgroundColor":"#fefefe"},4000);
  });
  
  $("#batman").click(function(){
    var superheroe = batman;
    cargarSuperheroe(superheroe);
  });
  $("#wonder").click(function(){
    var superheroe = wonder;
    cargarSuperheroe(superheroe);
  });
  $("#flash").click(function(){
    var superheroe= flash;
    cargarSuperheroe(superheroe);
  });
  $("#invisible").click(function(){
    var superheroe = invisible;
    cargarSuperheroe(superheroe);
  });

  $("#guardar").click(function(){
    guardarPixelArt();
  })
});


/*Probar si JQuery funca.
$(document).ready(function() {
   alert("jQuery esta funcionando !!");
 }); */

	
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    var colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    $IndicadorDeColor.css("background-color", colorActual);

  })
);

//Llamar funciones. 
crearPaleta();
crearGrilla();

