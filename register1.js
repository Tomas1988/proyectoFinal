var LoginApi = (function(){


    //TODO: BASE URL
    var baseUrl = "http://localhost:8080"
    var PATH = "/register";
    
    return {
    
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
                        url: baseUrl+PATH,    //Esta es la url donde ira la informacion
                            //Que verbose http usaremos
                        //contentType: 'application/json; charset=utf-8',    //El tipo de datos que retornada la peticion..
                        success: function (data) {        //Aqio entra cuando la peticion se hizo bie
                            resolve(data);
                        },
                        error: function(error){
                        rejected(error);
                        }
                        });
    
               //return procesosLogin;
    
        });
           
    }
    }
    
    })();