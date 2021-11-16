<?php
    try{
        $search = $_GET['search'];
        $offset = ($_GET['page']-1)*5;
        $db = new PDO('sqlite:../../DB/database.sqlite3');
        $data = $db->query("select * from lembaga limit $offset, 5;")->fetchAll();
        if(count($data)!=0){
            http_response_code(200);
            echo(json_encode(
                [
                    "code"=>200,
                    "pesan"=>"info vaksin ada",
                    "data"=>$data
                ]
            ));
        }
        else{
            http_response_code(400);
            echo(json_encode(
                [
                    "code"=>400,
                    "pesan"=>"info vaksin tidak ada"
                ]
            ));
        }
    }catch (PDOException $e){
        echo $e->getMessage();
    }
?>