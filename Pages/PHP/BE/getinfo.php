<?php
    try{
        $kota = $_GET['kota'];
        $jenis = $_GET['jenis'];
        $awal = $_GET['awal'];
        $akhir = $_GET['akhir'];
        $offset = ((int)$_GET['page']-1)*5;
        $db = new PDO('sqlite:../../DB/database.sqlite3');
        $data = $db->query("select * from lembaga where lower(jenis) like '%$jenis%' and lower(alamat) like '%$kota%' and tanggal <= '$akhir' and tanggal >= '$awal' limit $offset, 5;")->fetchAll();
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