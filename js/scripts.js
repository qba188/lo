function sortall() {

var table = document.querySelector("#myTable"),
    ths = table.querySelectorAll("thead th"),
    trs = table.querySelectorAll("tbody tr");

function makeArray(nodeList) {

    var arr = [];

    for(var i = 0; i < nodeList.length; i++) {

        arr.push(nodeList[i]);

    }

    return arr;

}

function clearClassName(nodeList) {

    for(var i = 0; i < nodeList.length; i++) {

        nodeList[i].className = "";

    }

}

function sortBy(e) {

    var target = e.target,
        thsArr = makeArray(ths),
        trsArr = makeArray(trs),
        index = thsArr.indexOf(target),
        df = document.createDocumentFragment(),
        order = (target.className === "" || target.className === "desc") ? "asc" : "desc";

    clearClassName(ths);

    trsArr.sort(function(a, b) {

        var tdA = a.children[index].textContent,
            tdB = b.children[index].textContent;

        if(tdA < tdB) {
            return order === "asc" ? -1 : 1;
        } else if(tdA > tdB) {
            return order === "asc" ? 1 : -1;
        } else {
            return 0;
        }

    });

    trsArr.forEach(function(tr) {
        df.appendChild(tr);
    });

    target.className = order;
    table.querySelector("tbody").appendChild(df);

}

for(var i = 0; i < ths.length; i++) {

    ths[i].onclick = sortBy;

}

};

var list = document.getElementsByClassName("isIn"),
	isInScore = 0,
	dIsInScore = 0;

//zwraca do tablicy wartosc pol input
function makeArray2() {

     arr2 = [];

    for(var i = 0; i < list.length; i++) {

        arr2.push(list[i].checked);

    }

    return arr2;

}

//spr warunków, wywołanie odpowiedniej funkcji
function checkList(){
	
	for (var j = 0; j < arr2.length; j++){

		if(!arr2[j]){
			
			absentScore();
			document.getElementById("obecni").innerHTML="Obecni" + "" + ":" + dIsInScore;
			
		}
		
		else{
			
			presentScore();
			document.getElementById("nieObecni").innerHTML="Nieobecni" + "" + ":" + isInScore;
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



function reset(){
	
	isInScore=0;
	dIsInScore=0;

}

function wyn(){
	makeArray2();
	reset();
	checkList();
}

//nasluchuje klikniecia
function load (){
    var klikk = document.getElementsByClassName("isIn");
    for (var i=0;i<klikk.length;i++){
        klikk[i].addEventListener("click", wyn, false);
    }
}


//dodawanie pol

function insertBefore() {
	
	var cBox = document.createElement("input");
	cBox.className="isIn";
	cBox.type="checkbox";

	var tdBox = document.createElement("td");
	tdBox.innerHTML = document.getElementById("dataName").value;
	var newNode2 = document.createElement("td"); //tworzymy nowy nod z tekstem
    newNode2.innerText = document.getElementById("dataSname").value;;
	var newNode3 = document.createElement("td");
	newNode3.appendChild(cBox);
	
	
    var td = document.querySelectorAll("addP");
    var p = document.querySelector("#addP"); //pobieramy element <p>
    var strong = td.firstElementChild;//pobieramy pierwsze dziecko p czyli element <strong>
	
    var newNode = document.createElement("tr"); //tworzymy nowy nod z tekstem
    newNode.appendChild(tdBox);
	newNode.appendChild(newNode2);
	newNode.appendChild(newNode3);
	

	p.insertBefore(newNode, strong); //wstawiamy go przed <strong>
    load();
    sortall();
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#add").addEventListener("click", insertBefore);
});




