<?php
    $_POST = json_decode(file_get_contents("php://input"), true);
    if(isset($_POST['IDpendaftaran'])){
        try{
            $ID = (int)$_POST['IDpendaftaran'];
            $db = new PDO('sqlite:../../DB/database.sqlite3');
            $data = $db->query("select * from pendaftaran natural join lembaga where IDpendaftaran=$ID;")->fetchAll();            
            if(count($data)!=0){
                http_response_code(200);
                echo(json_encode(
                    [
                        "code"=>200,
                        "pesan"=>"tiket ada",
                        "data"=>[
                            "nama"=>$data[0]['nama'],
                            "nik"=>$data[0]['nik'],
                            "tiket"=>$data[0]['tiket'],
                            "lembaga"=>$data[0]['lembaga']
                        ]
                    ]
                ));
            }
            else{
                http_response_code(400);
                echo(json_encode(
                    [
                        "code"=>400,
                        "pesan"=>"tiket tidak ada"
                    ]
                ));
            }
        }catch (PDOException $e){
            echo $e->getMessage();
        }
    }
    else{
        http_response_code(400);
        echo(json_encode(
            [
                "code"=>400,
                "pesan"=>"id tidak valid"
            ]
        ));
    }
?>