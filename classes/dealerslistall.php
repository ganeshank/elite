<?php 
  include('connection.php');
 
  $sql="select * from dealers";
 
  $result = mysqli_query($con, $sql);

  
  if( $result!=''){                     
                /*foreach ($result as $dealerslist) {
                    if($dealerslist->logo){
                       $logo = base_url().'upload/'.$dealerslist->logo;
                    }
                    else{
                       $logo = base_url().'upload/no-image.png';
                    }
                    $reaponce[] = array(
                        'dealerid' => $row['dealerid'],
                        'name' => $row['name'],
                        //'logo' => $row['logo']
                    );  
                }*/
                //$resp["status"] = SUCCESS_STATUS;
                //$resp["code"] = APISUCCESSCODE;
               

                  $dealerarr= array();
				  while ($row = mysqli_fetch_array($result)) {
				  	$logo = base_url().'upload/'.$row['logo'];

				  	echo $row['dealerid'];

				 	 $dealers_list = array('dealerid' =>$row['dealerid'],'name' =>$row['name'], 'logo' => $logo);
				 	 array_push($dealerarr, $dealers_list);
				  }
                
                $resp["messages"] =  $dealerarr;

                echo json_encode($resp);
                exit();
            }else{
                $resp["status"] = "failed";
                $resp["code"] = "200";
                $resp["messages"] = 'invalid userid';
                echo json_encode($resp);
                exit();         
            }

?>