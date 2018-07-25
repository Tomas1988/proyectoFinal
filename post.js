function addPost(){
	
	var root = 'http://localhost:8080';
	var titulo=$("#titulo").val();
	var comentario=$("#comentario").val();
	

	
	var token = localStorage.getItem('token');
	
	
	
	
	var post={
		title:titulo,
		body:comentario
	}
	console.log(post)
	
	$.ajax({
		type: 'POST',
		url: root + '/post',
		headers: {'Authorization' : 'Bearer '+ token},
		data: JSON.stringify(post),
		success: function(data){
			console.log(data);
			window.location.href="post2.html"
		}
	});
	
	//alert(titulo+' ' +comentario);
}





function addComentario(){
	//var root = 'https://jsonplaceholder.typicode.com';
	var root = 'http://localhost:8080';
	
	var urlParams = new URLSearchParams(window.location.search);
	var idPost = localStorage.getItem('idPost')
	
	var titulo=$("#tituloComentario").val();
	//var correo=$("#correoComentario").val();
	var comentario=$("#detalleComentario").val();
	

    var token = localStorage.getItem('token');
    console.log(token)
	
	
	//if (dbToken != null){
	//	token = JSON.parse(dbToken);
	//}
	
	
	var coment={
		postId: parseInt(idPost),
		titulo:titulo,
	
		body:comentario
	}
	 console.log(coment);
	 
	$.ajax({
		type: 'POST',
        url: "http://localhost:8080/post/"+idPost+"/comment",
        headers: {'Authorization' : 'Bearer '+ token},
		data: JSON.stringify(coment),
		success: function(data){
			console.log(data);
			window.location.href="comment.html?idPost="+idPost
		}
	});
	
	//alert(titulo+' ' +comentario);
}

/*
function cerrarSesion(){
	//var root = 'https://jsonplaceholder.typicode.com';
	var root = 'http://localhost:8080';
	

	var dbToken = localStorage.getItem('token');
	var strtoken;
	
	if (dbToken != null){
		strtoken = JSON.parse(dbToken);
	}
	
	var objLogout={token:strtoken};
	 
	$.ajax({
		type: 'POST',
		url: root + '/logout',
		data: JSON.stringify(objLogout),
		success: function(data){
			console.log(data);
			window.location.href="registroUsuario.html";
		}
	});
	
	//alert(titulo+' ' +comentario);
}
*/
$(document).ready(function(){
	$("#guardar").click(function(){
		addPost();
	});
	
	
	$("#guardarComentario").click(function(){
		addComentario();
	});
	

})
