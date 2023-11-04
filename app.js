  
//  ----------- Question 1------------
 
var numb = (3.45214)
document.write("Number:"+ " " + numb ,"<br>")
 
numb = Math.round(3.45214)
document.write("Round of Value:"+ " " + numb,"<br>")

numb = Math.floor(3.45214)
document.write("Floor Value:"+ " " + numb,"<br>")

numb = Math.ceil(3.45214)
document.write("Ceil Value:"+ " " + numb,"<br>")
 
document.write("<br>","<br>")
 


//   ---------Question 2-----------
 
var numb2 = (-2.673)
document.write("Number:"+ " " + numb2 ,"<br>")
 
numb2 = Math.round(-2.673)
document.write("Round of Value:"+ " " + numb2,"<br>")

numb2 = Math.floor(-2.673)
document.write("Floor Value:"+ " " + numb2,"<br>")

numb2 = Math.ceil(-2.673)
document.write("Ceil Value:"+ " " + numb2,"<br>")
 


// //  ----------Question 3---------

var Rendnum = Math.ceil(Math.random()* 6)

document.write("Random Dice Value:" + Rendnum)



// //  ----------Question 4---------

var Rendnum = Math.ceil(Math.random()* 2)

if(Rendnum === 1){
    document.write(Rendnum , "<br>")
    document.write("Random Coin Value: Tails")    
}else{
    document.write(Rendnum , "<br>")
    document.write("Random Coin Value: Heads") 
}


// //  ----------Question 5---------

var Rendnum = Math.floor(Math.random()* 100)+ 1

document.write(Rendnum)


// //  ----------Question 6---------

var userdata = prompt("What is your weight");
var results = "";

for(var i = 0; i < userdata.length; i++){
    if (!isNaN(userdata[i]) || userdata + "."){
         results +=  userdata[i];
    }
}

if (results !== ""){
    document.write("The Weight of The User" +" "+ results + " "+  "kilograms.");
}else{
    document.write("Please Enter Your Right Weight");
}

 
 //   ----------Question 7--------

var secnum = 4;
var userinput = Number(prompt("Enter a number between 1 to 10"))

if(userinput === secnum){
   alert("Congrulate")
}else{
    alert("Sorry wrong number Please Try Again Leter")
} 


//   ------Question 8------

var userdata = Number(prompt("Enter Your Age"));
var date = new Date();
var crntyr = date.getFullYear()

birthyear = crntyr - userdata

document.write("Your Age is:" + userdata + "<br>")
document.write("Your BirtYear is:" + birthyear)

   
    //   ------Question 9------

var date = new Date();
var gtdate = date.getDate()

if(gtdate <=15){
   alert("First Fifteen Days of the Month")
}else{
    alert("Last Days of the Month")
}

  
  
