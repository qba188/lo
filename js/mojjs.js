var list = document.querySelectorAll('input[type=checkbox]');


//sprawdzenie wartosci pol input
function isChecked (){
	for (var i = 0; i < list.length; i++) {
  		var listchecked = list[i].checked;
		console.log(listchecked);
	}	
}


//zwraca do tablicy wartosc pol input
function makeArray2() {

    var arr2 = [];

    for(var i = 0; i < list.length; i++) {

        arr2.push(list[i].checked);

    }

    return arr2;

}

var names = makeArray2();
console.log(names);
	
	for (var j = 0; j < names.length; j++){

		if(names[j] = "false")
		{
			console.log("if stat");
		}
		else
		{
			console.log("else stat");
		}
	}



