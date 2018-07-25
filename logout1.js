function logout(){
    //Conseguir el token.
    var token = window.localStorage.getItem("token");

    //Si el token no existe, manda el usario a una pagina de error.
    if (token == null) {
        window.location = "error.html";
        return;
    }
    
    LoginApi.logout(token)
    .then(function(data){
       window.localStorage.removeItem("token")
       window.location="login.html"
        })
   .catch(err => console.log(err))
    
}

window.onload =function(){
    //Conseguir el token.
    var token = window.localStorage.getItem("token");
    
    //si el token no existe, manda el usario al login
     if (token == null) {
      window.location = "login.html";
      return;
    }
    
      $("#logout").click(function(){
        logout();
      });
}