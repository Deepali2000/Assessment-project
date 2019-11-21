function load(){

var xmlhttp,x, txt = "",txt1 = "";
var th1=document.createElement("img");

var obj = { "table":"drinks", "limit":10 };
var dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() 
{
    if (this.readyState == 2 && this.status == 200) {
         // divMain.innerHTML = "FETCHING THE DATA";
         alert('PLEASE W8 ... checking u8 internet connection');
      }
  if (this.readyState == 4 && this.status == 200) 
  {
   var myObj=JSON.parse(this.responseText);
   txt +="<div class=\"cocktails heading2\" id=\"demo6\">"
    for(x in myObj.drinks)
        {
         txt += myObj.drinks[x].strDrink + "<br>";
         th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>";
         th1.setAttribute("style","width:500px;height:400px;")+"<br>";

         txt1 = "1." + myObj.drinks[x].strIngredient1 + "<br>";
         txt1 += "2." + myObj.drinks[x].strIngredient2 + "<br>";
        }

        document.getElementById("demo").innerHTML = txt;
        var myImageDiv = document.querySelector('#demo6');
        myImageDiv.appendChild(th1);
        document.getElementById("demo1").innerHTML = txt1;
       

    txt +="</div>";
  }
};

xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/random.php", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);
}

