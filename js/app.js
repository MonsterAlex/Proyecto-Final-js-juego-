//Texto Cambiando de Color //
var textocolor = document.getElementById('titulo_Juego');

function color_uno() 
{
    textocolor.style.color='#DCFF0E';
    setTimeout('color_dos()', 1500);
}

function color_dos() 
{
    textocolor.style.color='white';
    setTimeout('color_uno()', 1500);
}
color_uno()

//Funcion de Random
function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

///Obtener Dulce
function giveCandyArrays(arrayType, index) 
{
	var candyCol1 = $('.col-1').children();
	var candyCol2 = $('.col-2').children();
	var candyCol3 = $('.col-3').children();
	var candyCol4 = $('.col-4').children();
	var candyCol5 = $('.col-5').children();
	var candyCol6 = $('.col-6').children();
	var candyCol7 = $('.col-7').children();

	var candyColumns = $([candyCol1, candyCol2, candyCol3, candyCol4, candyCol5, candyCol6, candyCol7]);

	if (typeof index === 'number') 
    {
        var candyRow = $([candyCol1.eq(index), candyCol2.eq(index), candyCol3.eq(index), candyCol4.eq(index), candyCol5.eq(index), candyCol6.eq(index),candyCol7.eq(index)]);
	} 
    else 
    {
		index = '';
	}

	if (arrayType === 'columns') 
    {
        return candyColumns;
	} 
    else if (arrayType === 'rows' && index !== '') 
    {
        return candyRow;
	}
}

///// Fila de Dulces
function candyRows(index) 
{
    var candyRow = giveCandyArrays('rows', index);
	return candyRow;
}

////Columna de Dulces
function candyColumns(index) 
{
    var candyColumn = giveCandyArrays('columns');
	return candyColumn[index];
}
