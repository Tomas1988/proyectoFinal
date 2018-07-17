

function login () {
	var email=$('#email').val();
  var password = $("#password").val();

  if (email !== "" || password !== ""){
  LoginApi.login(email, password)
    .then(function(response){
      console.log("Successfully: ", response);
      var token =response.token 
      window.localStorage.setItem("token", token);
      window.location= "index.html";
      //TODO: Registrat el token en local storage
      //TODO: Debemos redireccionar al index
    })
    .catch(function(error){
    console.log("Error : ", error);
    });
  }
  else{
    window.location = "login.html";
  }
 
}

function register () {
  var name = $('#name').val();
	var email=$('#email').val();
  var password = $("#password").val();
  var password2 = $("#password2").val();

if (password != password2){
  alert("Las contrasenas son diferentes.");
  return;
}

LoginApi.register(email, password, name)
  .then(function(response){
    console.log("Successfully: ", response);
    login();
    //var token =response.token 
    //window.localStorage.setItem("token", token);
    //window.location= "index.html";
    //TODO: Registrat el token en local storage
    //TODO: Debemos redireccionar al index
  })
  .catch(function(error){
    alert("Error: Intentelo Again");
   console.log("Error : ", error);
  });
  
  
 
}

window.onload =function(){
//Validar si existe el token, si existe mandarlo al index.
var token = window.localStorage.getItem("token");

//if (token !== null) {
  //validar que este activo
  //window.location = "index.html";
//}

  $("#btnLogin").click(function(){
    login();
  });

  $("#btnRegister").click(function(){
    register();
  });


}