var n  = Math.floor( Math.random() * 6) + 1; 		//1-6

var randomDiceImages = "images/dice" + n + ".png";			

// var randomImageSource = "images/" + randomDiceImages;

var image1 = document.querySelectorAll("img")[0];
// The querySelectorAll() method returns all elements in the document that matches 
// a specified CSS selector(s), as a static NodeList object.

image1.setAttribute("src",randomDiceImages);
// element.setAttribute(attributename, attributevalue)



var n1 = Math.floor( Math.random() * 6) + 1;		//1-6

var randomDiceImage = "images/dice" + n1 + ".png";	//images/dice1-dice-6

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage) ;

if(n > n1)
{
	document.getElementsByTagName("h1")[0].innerHTML = "🔼Player 1 Wins!";
	/*or document.querySelector("h1")*/
}
else if (n < n1) 
{
	document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!🔼";
	/*or document.querySelector("h1")*/
}
else										//🔶🔶🔶🔶🔶🔶🔶
{
	document.querySelector("h1").innerHTML = "Draw";
	//  or document.getElementsByTagName("h1")[0]
}


//🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼









// 