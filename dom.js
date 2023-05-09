let storedHTML= document.getElementById("para");


let htmlData= storedHTML.innerHTML;
let textData= storedHTML.innerText;
console.log(htmlData);
console.log(textData);

document.getElementById("name").innerHTML= '<span>shri</span>';
document.getElementById("age").innerHTML= '<span>22</span>';
document.getElementById("email").innerHTML= '<span>@intgmail.com</span>';


//apply style
document.body.style.fontFamily = 'AriL';
storedHTML.style.color = 'brown'

//create element and append
//element1
let imageElement = document.createElement('img');
imageElement.src = "download.jpg";
imageElement.height = 300;
imageElement.width = 300;

//element2
let diveElement = document.createElement('div');
diveElement.innerText = "KTM"

//Append created elements
//document.body.append(imageElement,diveElement);
//select ElementsByClassName and TagName
let ptags = document.getElementsByTagName('p');
let paraClass = document.getElementsByClassName('para');

ptags[1].innerText = "Hello guys";

function addrow(){
    let TableElement = document.getElementById('table');
    let row = TableElement.insertRow();
    let td1 = 
}
    