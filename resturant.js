function fetchData(){
	xhr= new XMLHttpRequest();
	var data;
	xhr.onreadystatechange = function() {
	   if (this.readyState == 4 && this.status == 200) {
	   data=JSON.parse(this.responseText);
	   //console.log(this.responseText);
	   display(data.restaurants);    
		   }
	};
	xhr.open("GET","https://developers.zomato.com/api/v2.1/search");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("user-key", "3a783c71742fb49fadb39150de8c56be");
	xhr.send();
	}
	
	function searchData()
	{
	var loc=document.getElementById('location').value;
	xhr= new XMLHttpRequest();
	var data;
	xhr.onreadystatechange = function() {
	   if (this.readyState == 4 && this.status == 200) {
	   data=JSON.parse(this.responseText);
	   findLocationDetails(data.location_suggestions[0].entity_type,data.location_suggestions[0].entity_id)  
			}
	};
	xhr.open("GET","https://developers.zomato.com/api/v2.1/locations?query="+loc);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("user-key", "3a783c71742fb49fadb39150de8c56be");
	xhr.send();
	
	}
	
	function findLocationDetails(type,id)
	{
	xhr= new XMLHttpRequest();
	var data;
	xhr.onreadystatechange = function() {
	   if (this.readyState == 4 && this.status == 200) {
	   data=JSON.parse(this.responseText);
	   //console.log(this.responseText);
	   display(data.best_rated_restaurant);
			}
	};
	xhr.open("GET","https://developers.zomato.com/api/v2.1/location_details?entity_id="+id+"&entity_type="+type);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("user-key", "3a783c71742fb49fadb39150de8c56be");
	xhr.send();
	}
	
	function display(data)
	{
	var divMain= document.getElementById("resDetails");
		var child = divMain.lastElementChild;  
		while (child) {
			divMain.removeChild(child);
			child = divMain.lastElementChild;
		}
	
	for(i=0;i<data.length;i++)
	{
	var res_name=data[i].restaurant.name;
	var res_img=data[i].restaurant.thumb;
	var res_cuisines=data[i].restaurant.cuisines;
	var res_add=data[i].restaurant.location.address+", "+data[i].restaurant.location.city;
	var res_url=data[i].restaurant.url;
	
	var divRes= document.createElement("div");
	divRes.setAttribute("class","card");
	divRes.setAttribute("style","background-color:black;border:2px white solid;height:auto;width: 30vw;");
	divRes.setAttribute("id",i+1);
	
	
	var nameRes = document.createElement("h2");
	nameRes.setAttribute("class","card-header");
	nameRes.setAttribute("style","background-color:black;color:white;font-size:2vw;");
	nameRes.innerHTML=res_name;
	divRes.appendChild(nameRes);
	
	var imgRes = document.createElement("img");
	imgRes.setAttribute("src",res_img);
	imgRes.setAttribute("style","height:auto;width:100%");
	divRes.appendChild(imgRes);
	
	document.createElement("div").setAttribute("class","card-body");
	
	var lineBreak = document.createElement("br");
	divRes.appendChild(lineBreak);
	
	var cusRes = document.createElement("span");
	cusRes.setAttribute("class","card-text");
	cusRes.innerHTML=res_cuisines;
	cusRes.setAttribute("style","font-family:Verdana;font-size:1vw;background-color:black;margin-left:0.5vw;color:white");
	divRes.appendChild(cusRes);
	
	var lineBreak = document.createElement("br");
	divRes.appendChild(lineBreak);

	var addRes = document.createElement("span");
	addRes.innerHTML="Location :- "+res_add;
	addRes.setAttribute("class","card-text");
	addRes.setAttribute("style","font-family:Verdana;font-size:1vw;background-color:black;margin-left:0.5vw;color:white");
	divRes.appendChild(addRes);
	
	var lineBreak = document.createElement("br");
	divRes.appendChild(lineBreak);
	
	var urlRes = document.createElement("a");
	urlRes.setAttribute("href",res_url);
	urlRes.setAttribute("target","_blank");
	urlRes.innerHTML = "For more Info!";
	divRes.appendChild(urlRes);
	
	divMain.appendChild(divRes);
	
	var lineBreak = document.createElement("br");
	divMain.appendChild(lineBreak);
	   }
	}