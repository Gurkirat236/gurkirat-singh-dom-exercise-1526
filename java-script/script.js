/*Task 1*/

//1
let tagLine = document.getElementById('tag-line');

//2
let elements = document.querySelectorAll('.bg-main-content h2');

//3
let collect = tagLine.innerHTML;
collect = collect + `\n-------------------------\n`;		//or collect = collect + `\n-------------------------\n`;

//4
for(let i = 0; i < elements.length; i++){
	collect = collect + elements[i].innerHTML + "\n";
}

//5
alert(collect);


//Task 2
let allDivs = document.querySelectorAll('.bg-main-content .box');

let collectTwo = allDivs[12].innerText;
alert(collectTwo);


