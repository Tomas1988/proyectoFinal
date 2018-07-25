var root = 'http://localhost:8080';
let idusuario = localStorage.getItem('idusuario')
var token = localStorage.getItem('token');
$.ajax({
    url: root + '/users/'+idusuario,
    headers: {'Authorization' : 'Bearer '+ token},
    method: 'GET'
}).then(function(data) {
        $('#usuario').val(data.name)
        $('#correo').val(data.email)
        document.getElementById('usuario').innerHTML = data.name
        document.getElementById('correo').innerHTML = data.email
});	




$(document).ready(function(){
	//var root = 'https://jsonplaceholder.typicode.com';
	var root = 'localhost:8080';
	
	var token = localStorage.getItem('token');

	
	//if (Token != null){
	//	token = JSON.parse(token);
	//}
	
	//var urlParams = new URLSearchParams(window.location.search);
    //var idUsuario=urlParams.get('idUsuario');
    //console.log(idUsuario);
	//var listaUsuarios=[];
	
	//var lista = localStorage.getItem('users');
	//if(lista!=null){
    //    listaUsuarios= JSON.parse(lista);
        
	//}
	
	//var objUsuario=listaUsuarios[idUsuario];
	
	//$("#usuario").html(objUsuario["username"]);
	//$("#nombre").html(objUsuario["name"]);
	//$("#correo").html(objUsuario["email"]);
	//$("#telefono").html(objUsuario["phone"]);
	//$("#website").html(objUsuario["website"]);
	
	/*var objDireccion=objUsuario["address"];
	var objCompania=objUsuario["company"];
	
	$("#direccion").html(objDireccion["street"]+' '+objDireccion["suite"]+', '+objDireccion["city"]+
	', Codigo Postal : '+objDireccion["zipcode"]);
	$("#compania").html(objCompania["name"]);
    */

   $("#logout").click(() => {
    var token = window.localStorage.getItem("token"); 

        LoginApi.logout(token)
        .then(function(data){
        window.localStorage.removeItem("token")
        window.location="login.html"
        })
        .catch(err => console.log(err))
        });
    
	
})