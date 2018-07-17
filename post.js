post=JSON.parse(localStorage.post);

    var myTemplate = "<li>title: ${title}<br/>body: ${body}<br/></li>";
$.template("contactLi", myTemplate);

$.tmpl( "contactLi", post ).appendTo( "#guests" );