<?php
    $_POST = json_decode(file_get_contents("php://input"), true);
    if(isset($_POST['IDlembaga'])){
        try{
            $ID = $_POST['IDlembaga'];
            $db = new PDO('sqlite:../../DB/database.sqlite3');
            $data = $db->query("select * from lembaga where IDlembaga=$ID;")->fetchAll();
            if(count($data)!=0){
                http_response_code(200);
                echo(json_encode(
                    [
                        "code"=>200,
                        "pesan"=>"data ada",
                        "data"=>[
                            "nama"=>$data[0]['nama'],
                            "kode"=>$data[0]['kode'],
                            "jenis"=>$data[0]['jenis'],
                            "syarat"=>$data[0]['syarat'],
                            "tanggal"=>$data[0]['tanggal'],
                            "alamat"=>$data[0]['alamat'],
                            "kuota"=>$data[0]['kuota'],
                            "pendaftar"=>$data[0]['pendaftar']
                        ]
                    ]
                ));
            }
            else{
                http_response_code(400);
                echo(json_encode(
                    [
                        "code"=>400,
                        "pesan"=>"data vaksin tidak ada"
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