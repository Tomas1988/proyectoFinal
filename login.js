

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
function addComment(){
	//var root = 'https://jsonplaceholder.typicode.com';
	var root = 'http://localhost:8080';
	
	var urlParams = new URLSearchParams(window.location.search);
	var idPostSeleccionado=urlParams.get('idPost');
	
	var nombre=$("#tituloComentario").val();
	var comentario=$("#detalleComentario").val();
	

	var dbToken = localStorage.getItem('token');
	var token;
	
	if (dbToken != null){
		token = JSON.parse(dbToken);
	}
	
	
	var coment={
		postId: parseInt(token),
		titulo:titulo,
		body:comentario
	}
	 console.log(coment);
	 
	$.ajax({
		type: 'POST',
		url: root + '/comments?token='+token,
		data: JSON.stringify(coment),
		success: function(data){
			console.log(data);
			window.location.href="comment.html?idPost="+idPostSeleccionado
		}
	});
	
	//alert(titulo+' ' +comentario);
}

window.onload =function(){
//Validar si existe el token, si existe mandarlo al index.
var token = window.localStorage.getItem("token");

if (token !== null) {
 // validar que este activo
 window.location = "index.html";
};


  $("#btnLogin").click(function(){
    login();
  });

  $("#btnRegister").click(function(){
    register();
  });


}