var a = '';
var num = [];
var ans;

let result = ""

let length = 0

// All the numbers and operators input will be stored in an array "num" 
function sendNum(digit){
	num.push(digit);
	if(num.length != 1){
		a = '';
		document.getElementById('screen').innerHTML = a;// clearing the screen.
	}

	for(i=0; i<num.length ; i++){

		a = a + num[i];	// concatenate the elements of the array "num" into a single string, which will be displayed on the screen
		
	}
document.getElementById('screen').innerHTML = a;	// displaying the concatenated string
}
// When user presses "=", function "clearScr()" is called
function equalTo(){
	document.getElementById('screen').innerHTML = '';

	ans = eval(a);	
    result = a + " = " + ans
	document.getElementById('screen').innerHTML =result;	// result display
    length += 1
    addlist(result, length)

	while(num.length > 0){
    	num.pop();				// emptying the array "num"
	}

	num.push(ans.toString()); //adding the result to the array "num"
}
// When user presses "AC", function "clearScr()" is called

function clearScr(){
	document.getElementById('screen').innerHTML = '';
	while(num.length > 0){
    	num.pop();				// emptying the array "num"
	}
	a ='';

}

function emptyList() {
	length = 0
	$('#ulList').empty();
}

$(document).ready(function() {
	$("#ac").click(function() {
		clearScr()
	})

	$("#ac").dblclick(function() {
		emptyList()
	})
})

let ulEl = document.getElementById("ulList");


function addlist(each, id) {
    let listEl = document.createElement("li");
    listEl.classList.add("eachHistory")
    listEl.textContent =length + ")  "  + each
    listEl.id = id
    ulEl.appendChild(listEl)
}




