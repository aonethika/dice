
//player 1


var num = Math.random();
var n = (num*6)+1;
var randomNumber1 = Math.floor(n);


var randomImage1 = "./images/dice"+randomNumber1+".png";


image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);




//player2 

var randomNumber2 = Math.floor(((Math.random()*6)+1))


var randomImage2 = "./images/dice"+randomNumber2+".png";

image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);



if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins!!";
}


else if(randomNumber2> randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 wins!!";

}

else{
    document.querySelector("h1").innerHTML = "Draw";

}







