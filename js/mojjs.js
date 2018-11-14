var list = document.querySelectorAll('input[type=checkbox]'),
	isInScore = 0,
	dIsInScore = 0,
	names = makeArray2();



//zwraca do tablicy wartosc pol input
function makeArray2() {

    var arr2 = [];

    for(var i = 0; i < list.length; i++) {

        arr2.push(list[i].checked);

    }

    return arr2;

}
//spr warunków, wywołanie odpowiedniej funkcji
function checkList(){
	
	for (var j = 0; j < names.length; j++){

		if(!names[j]){
			
			absentScore();
			
		}
		else{
			
			presentScore();
			
		}
	}
}

//zwiększenie wartosci nieobecnych
function absentScore(){
	isInScore+=1;
	document.getElementById("nieObecni").innerHTML="Nieobecni" + "" + ":" + isInScore;
}

//zwiększenie wartosci obecnych
function presentScore(){
	dIsInScore+=1;
	document.getElementById("obecni").innerHTML="Obecni" + "" + ":" + dIsInScore;
}

function clear(){
	
	isInScore = 0;
	dIsInScore = 0;
		
}
function arrayy(){
	
	makeArray2();
		
}
function wyn(){
	
	checkList();
		
}