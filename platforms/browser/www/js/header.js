
$(document).ready(function(){
    if (typeof(Storage) != "undefined") {
              var userId = localStorage.getItem("cookies_user_id");
              $.ajax({
                url:'https://elite-dealers.com/api/notify_count.php',
                data:{user_id: userId},
                dataType:'json',
                type:"post",
                beforeSend: function(){
                    /*$('#dealer-list').html('<div style="margin-top:150px;color:#000;font-family:monospace;font-size:27px;"><i class="fa fa-circle-o-notch fa-spin"></i> loading...</div>')*/
                },
                success:function(xhr){ 
                   //console.log("all user success");
                    var parsed_data;
                    if (typeof xhr == 'object'){
                        parsed_data = xhr;
                    }
                    else {
                        parsed_data = $.parseJSON(xhr);
                    }
                    //console.log(xhr.messages);
                    $(".bell").html(xhr.messages);
                },
                error:function(data){
                    alert("Server Error.");
                }    
            });

          }

          $(".logout").click(function(){
               //alert("123444");
               window.localStorage.clear();
               window.location.href="index.html";
          });

});







