

$("#login-click").click(function(){
	alert("click");
	/*var username = $("#user").val();
	var password = $("#pass").val();

	if(username==""){
		alert("Username can not be empty");
	}else if(password==""){
		alert("Password can not be empty");
	}else{
		// login check
		$.ajax({
            url:'http://localhost/phonegap/api/Userall/logincheck',
            data:{ username: username, password: password },
            type:"POST",
            success:function(data){
                console.log(data);
                if (typeof data == 'object'){
                    var parsed_data = data;
                }
                else {
                    var parsed_data = $.parseJSON(data);

                }
                if(parsed_data.status == "Validuser"){
                    if (typeof(Storage) != "undefined") {
                        localStorage.setItem("cookies_user_name", parsed_data.username);
                        window.location.href="listing.html";
                    }
                }
                else{
                    alert("Username/Password is wrong");
                }
            },
            error:function(data){ 
                $('#msg_eloginerror').show();
            }
        
        });
	}*/
});