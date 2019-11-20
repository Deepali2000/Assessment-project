function fetchData(){
	xhr= new XMLHttpRequest();
	var data;
	xhr.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    data=JSON.parse(this.responseText);
	    for(i=0;i<data.restaurants.length;i++){
		    document.getElementById('res_img').src=data.categories[i].restaurant.thumb;
		    document.getElementById('res_name').innerHTML=data.categories[i].restaurant.name;
		    document.getElementById('res_id').innerHTML=data.categories[i].restaurant.id;
		    document.getElementById('res_url').href=data.restaurants[i].restaurant.url;
		    document.getElementById('res_url').innerHTML="Click for more information!!";
		}
	  }
	};
	xhr.open("GET","https://www.themealdb.com/api/json/v1/1/categories.php");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("user-key", "3a783c71742fb49fadb39150de8c56be");
	xhr.send();
}