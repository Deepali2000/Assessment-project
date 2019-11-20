xhr= new XMLHttpRequest();
xhr.open("GET","https://www.thecocktaildb.com/api/json/v1/1/search.php?s");
xhr.send();
var data;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    data=JSON.parse(this.response);
    document.getElementById("drink11").innerHTML=data.drinks[0].idDrink;
 	document.getElementById("drink12").innerHTML=data.drinks[0].strDrink;
 	document.getElementById("drink13").src=data.drinks[0].strDrinkThumb;
	document.getElementById("drink14").innerHTML=data.drinks[0].strCategory;
	document.getElementById("drink15").innerHTML=data.drinks[0].strAlcoholic;
	document.getElementById("drink16").innerHTML=data.drinks[0].strInstructions;

	document.getElementById("drink21").innerHTML=data.drinks[1].idDrink;
 	document.getElementById("drink22").innerHTML=data.drinks[1].strDrink;
 	document.getElementById("drink23").src=data.drinks[1].strDrinkThumb;
	document.getElementById("drink24").innerHTML=data.drinks[1].strCategory;
	document.getElementById("drink25").innerHTML=data.drinks[1].strAlcoholic;
	document.getElementById("drink26").innerHTML=data.drinks[1].strInstructions;

	document.getElementById("drink31").innerHTML=data.drinks[2].idDrink;
 	document.getElementById("drink32").innerHTML=data.drinks[2].strDrink;
 	document.getElementById("drink33").src=data.drinks[2].strDrinkThumb;
	document.getElementById("drink34").innerHTML=data.drinks[2].strCategory;
	document.getElementById("drink35").innerHTML=data.drinks[2].strAlcoholic;
	document.getElementById("drink36").innerHTML=data.drinks[2].strInstructions;

	document.getElementById("drink41").innerHTML=data.drinks[3].idDrink;
 	document.getElementById("drink42").innerHTML=data.drinks[3].strDrink;
 	document.getElementById("drink43").src=data.drinks[3].strDrinkThumb;
	document.getElementById("drink44").innerHTML=data.drinks[3].strCategory;
	document.getElementById("drink45").innerHTML=data.drinks[3].strAlcoholic;
	document.getElementById("drink46").innerHTML=data.drinks[3].strInstructions;

	document.getElementById("drink51").innerHTML=data.drinks[6].idDrink;
 	document.getElementById("drink52").innerHTML=data.drinks[6].strDrink;
 	document.getElementById("drink53").src=data.drinks[6].strDrinkThumb;
	document.getElementById("drink54").innerHTML=data.drinks[6].strCategory;
	document.getElementById("drink55").innerHTML=data.drinks[6].strAlcoholic;
	document.getElementById("drink56").innerHTML=data.drinks[6].strInstructions;

	document.getElementById("drink61").innerHTML=data.drinks[7].idDrink;
 	document.getElementById("drink62").innerHTML=data.drinks[7].strDrink;
 	document.getElementById("drink63").src=data.drinks[7].strDrinkThumb;
	document.getElementById("drink64").innerHTML=data.drinks[7].strCategory;
	document.getElementById("drink65").innerHTML=data.drinks[7].strAlcoholic;
	document.getElementById("drink66").innerHTML=data.drinks[7].strInstructions;

	document.getElementById("drink71").innerHTML=data.drinks[8].idDrink;
 	document.getElementById("drink72").innerHTML=data.drinks[8].strDrink;
 	document.getElementById("drink63").src=data.drinks[7].strDrinkThumb;
	document.getElementById("drink74").innerHTML=data.drinks[8].strCategory;
	document.getElementById("drink75").innerHTML=data.drinks[8].strAlcoholic;
	document.getElementById("drink76").innerHTML=data.drinks[8].strInstructions;

	document.getElementById("drink81").innerHTML=data.drinks[9].idDrink;
 	document.getElementById("drink82").innerHTML=data.drinks[9].strDrink;
 	//document.getElementById("drink63").innerHTML=data.drinks[7].strDrinkThumb;
	document.getElementById("drink84").innerHTML=data.drinks[9].strCategory;
	document.getElementById("drink85").innerHTML=data.drinks[9].strAlcoholic;
	document.getElementById("drink86").innerHTML=data.drinks[9].strInstructions;

	document.getElementById("drink91").innerHTML=data.drinks[10].idDrink;
 	document.getElementById("drink92").innerHTML=data.drinks[10].strDrink;
 	//document.getElementById("drink63").innerHTML=data.drinks[7].strDrinkThumb;
	document.getElementById("drink94").innerHTML=data.drinks[10].strCategory;
	document.getElementById("drink95").innerHTML=data.drinks[10].strAlcoholic;
	document.getElementById("drink96").innerHTML=data.drinks[10].strInstructions;

  }
};