var LoginApi = (function(){


//TODO: BASE URL
var baseUrl = "http://localhost:8080";
var PATH = "/login";
var PATH_Register = "/register";
var PATH_logout = "/logout";
var PATH_post ="/post";

return {

	login: function(email, password){

           
		   
		   return new Promise(function(resolve, reject){
           var ld = { 
	    		
	        	email: email,
	        	password : password
	    }


	    $.ajax({  
	    	        method: 'POST',
					data: JSON.stringify(ld),   //Estos son los datos convertidos a formato json que seran enviados
				    //dataType: 'application/json',   //Tipo de datos que se va a mandar
				    url: baseUrl+PATH,    //Esta es la url donde ira la informacion
				        //Que verbose http usaremos
				    //contentType: 'application/json; charset=utf-8',    //El tipo de datos que retornada la peticion..
				    success: function (data) {        //Aqio entra cuando la peticion se hizo bie
						resolve(data);
				    },
				    error: function(error){
				    reject(error);
				    }
				    });

           //return procesosLogin;

	});

	   
},
register: function(email, password, name){

           
		   
	return new Promise(function(resolve, reject){
	var ld = { 
		 
		 email: email,
		 password : password,
		 name: name
 }


 $.ajax({  
			 method: 'POST',
			 data: JSON.stringify(ld),   //Estos son los datos convertidos a formato json que seran enviados
			 //dataType: 'application/json',   //Tipo de datos que se va a mandar
			 url: baseUrl+PATH_Register,    //Esta es la url donde ira la informacion
				 //Que verbose http usaremos
			 //contentType: 'application/json; charset=utf-8',    //El tipo de datos que retornada la peticion..
			 success: function (data) {        //Aqio entra cuando la peticion se hizo bie
				 resolve(data);
			 },
			 error: function(error){
			 reject(error);
			 }
			 });

	//return procesosLogin;

});
},

logout: function(token){

    return new Promise(function(resolve, reject){
	

 $.ajax({  
			 method: 'DELETE',
			// Authorization: 'Bearer '+ token,
			 headers: {'Authorization' : 'Bearer '+ token},   //Estos son los datos convertidos a formato json que seran enviados
			 //dataType: 'application/json',   //Tipo de datos que se va a mandar
			 url: baseUrl+PATH_logout,    //Esta es la url donde ira la informacion
				 //Que verbose http usaremos
			 //contentType: 'application/json; charset=utf-8',    //El tipo de datos que retornada la peticion..
			 success: function (data) {        //Aqio entra cuando la peticion se hizo bie
				 resolve(data);
			 },
			 error: function(error){
			 reject(error);
			 }
			
			 });
			

			});

},
post: function(token){

    return new Promise(function(resolve, reject){
	

 $.ajax({  
			 method: 'GET',
			 url: baseUrl+PATH_post,
			// Authorization: 'Bearer '+ token,
			 headers: {'Authorization' : 'Bearer '+ token},   //Estos son los datos convertidos a formato json que seran enviados
			 //dataType: 'application/json',   //Tipo de datos que se va a mandar
			     //Esta es la url donde ira la informacion
				 //Que verbose http usaremos
			 //contentType: 'application/json; charset=utf-8',    //El tipo de datos que retornada la peticion..
			 success: function (data) {        //Aqio entra cuando la peticion se hizo bie
				$('#itemList').tmpl(data).appendTo('#content');
			 },
			 error: function(error){
			 reject(error);
			 }
			
			 });
			

			});

}
}
})();