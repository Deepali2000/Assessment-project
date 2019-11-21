function fetchData(){
	xhr= new XMLHttpRequest();
	var data;
	xhr.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
		    data=JSON.parse(this.responseText);
             console.log(this.responseText);
		
	       }
       };
	
	xhr.open("GET","https://developers.zomato.com/api/v2.1/locations?query=delhi");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("user-key", "3a783c71742fb49fadb39150de8c56be");
	xhr.send();


}