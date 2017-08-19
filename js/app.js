//Texto Cambiando de Color //
var textocolor = document.getElementById('titulo_Juego');

function color_uno() 
{
    textocolor.style.color='#DCFF0E';
    setTimeout('color_dos()', 2000);
}

function color_dos() 
{
    textocolor.style.color='#FF0040';
    setTimeout('color_tres()', 2000);
}

function color_tres() 
{
    textocolor.style.color='#F5A9A9';
    setTimeout('color_cuatro()', 2000);
}

function color_cuatro() 
{
    textocolor.style.color='#2E9AFE';
    setTimeout('color_cinco()', 2000);
}

function color_cinco() 
{
    textocolor.style.color='#9AFE2E';
    setTimeout('color_uno()', 2000);
}

color_uno()

// Boton Para iniciar/Reiniciar el juego //

$(".btn-reinicio").click(function()
{
    alert("hola");
    Cuenta_Atras();
    
    $(".btn-reinicio").html('Reiniciar');
});

// Temporizador //

function Cuenta_Atras() 
{
    var Tiempo_Reloj = 5;
    var Temporizador = document.getElementById('timer');
    
    var intervalo = setInterval(function()
    {
        Tiempo_Reloj--; 
        Temporizador.innerHTML = Tiempo_Reloj;
        if(Tiempo_Reloj == 0)
        {
            $(".panel-tablero").hide(1500,'linear');
            $(".time").hide(1000,'linear');

            $(".score").css("width: 500px");
            $(".moves").css("width: 500px");
            
            $(".btn-reinicio").html('Iniciar');
        }
    }, 1000);
}

//Puntuacion//

function saveFinalScore() 
{
    localStorage.setItem(getFinalScoreDate(), getTotalScore());
    showBestScores();
    removeNoBestScores();
}
    
function showBestScores() 
{
    var bestScores = getBestScoreKeys();
    var bestScoresList = document.getElementById('score-text');
    if (bestScoresList) 
    {
        clearList(bestScoresList);
        
        for (var i=0; i < bestScores.length; i++) 
        {
            addListElement(bestScoresList, bestScores[i], i==0?'negrita':null);
            addListElement(bestScoresList, localStorage.getItem(bestScores[i]), i==0?'negrita':null);
        }
    }
}

function removeNoBestScores() 
{
    var scoresToRemove = [];
    var bestScoreKeys = getBestScoreKeys();
    
    for (var i=0; i < localStorage.length; i++) 
    {
        var key = localStorage.key(i);
        
        if (!bestScoreKeys.containsElement(key)) 
        {
            scoresToRemove.push(key);
        }
    }
    
    for (var j = 0; j < scoresToRemove.length; j++) 
    {
        var scoreToRemoveKey = scoresToRemove[j];
        localStorage.removeItem(scoreToRemoveKey);
    }
}