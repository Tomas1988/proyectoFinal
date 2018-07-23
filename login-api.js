var LoginApi = (function(){


//TODO: BASE URL
var baseUrl = "http://localhost:8080";
var PATH = "/login";
var PATH_Register = "/register";
var PATH_logout = "/logout";
var PATH_post ="/post";
var PATH_users="/users";
var PATH_postComment="/post/postId/comment"

var usuarios

var token = window.localStorage.getItem("token");

$.ajax({  
	method: 'GET',
	url: baseUrl+PATH_users,
   // Authorization: 'Bearer '+ token,
	headers: {'Authorization' : 'Bearer '+ token},   //Estos son los datos convertidos a formato json que seran enviados
	success: function (data) {        //Aqio entra cuando la peticion se hizo bie
	   usuarios  = data
	},
	error: function(error){
	reject(error);
	}
   
});

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
post: function(body, id, title, userId){

    return new Promise(function(resolve, reject){
		var ld = { 
		 
			body: body,
			id : id,
			title: title,
			userId: userId
	}
          
 $.ajax({  
			 method: 'GET',
			 url: baseUrl+PATH_post,
			// Authorization: 'Bearer '+ token,
			 headers: {'Authorization' : 'Bearer '+ token},   //Estos son los datos convertidos a formato json que seran enviados
			 //dataType: 'application/json',   //Tipo de datos que se va a mandar
			     //Esta es la url donde ira la informacion
				 //Que verbose http usaremos
			 //contentType: 'application/json; charset=utf-8',    //El tipo de datos que retornada la peticion..
			 //data: JSON.stringify(ld),
			 success: function (data) {        //Aqio entra cuando la peticion se hizo bie
				var _data = data

				for (let index = 0; index < _data.length; index++) {
					for (let indexc = 0; indexc < usuarios.length; indexc++) {
						if (_data[index]['userId'] == usuarios[indexc]['id']){
							_data[index]['userId']= usuarios[indexc]['email']
						}
					}				
				}
				

				console.log(_data[0]['userId'])
				console.log(usuarios[0]['id'])

				console.log(typeof(_data))
				console.log(typeof(usuarios))


				$('#itemList').tmpl(data).appendTo('#content');
			 },
			 error: function(error){
			 reject(error);
			 }
			
			 });
			

			});

},

post_comment: function(token,post){
		$.ajax({  
					method: 'GET',
					url: baseUrl+"/post/"+post+"/comment",
					// Authorization: 'Bearer '+ token,
					headers: {'Authorization' : 'Bearer '+ token},   //Estos son los datos convertidos a formato json que seran enviados
					//dataType: 'application/json',   //Tipo de datos que se va a mandar
						//Esta es la url donde ira la informacion
						//Que verbose http usaremos
					//contentType: 'application/json; charset=utf-8',    //El tipo de datos que retornada la peticion..
					success: function (data) {        //Aqio entra cuando la peticion se hizo bie
						//resolve(data)
						console.log(data)
						return data
					},
					error: function(error){
					//sreject(error);
						console.log(error)
					}
					
					});
					
		}
}
})();