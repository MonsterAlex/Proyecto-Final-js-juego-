$("#iniciar_Juego").click(function()
{
    alert("hola");
});

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