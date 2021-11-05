<?php
    function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    $nama = $_POST['nama'];
    $nik = $_POST['nik'];
    $tempat = $_POST['tempat'];
    $tanggal = $_POST['tanggal'];
    $alamat = $_POST['alamat'];
    // var_dump($_POST);
    $tiket = generateRandomString(10);
    
    try{
        $db = new PDO('sqlite:../../DB/database.sqlite3');
        $lastID = $db->query("select max(IDpendaftaran) as lastID from pendaftaran")->fetchAll()[0]['lastID'] + 1;
        // kode pendaftaran
        $tiket = "{$tiket}-{$lastID}";
        $dir = "../../img/pendaftaran/";
        $namafoto = $_FILES["foto"]["name"];
        $tmp =explode(".",$namafoto);
        $ext = end($tmp);        
        $foto = "{$dir}{$tiket}.{$ext}";
        move_uploaded_file($_FILES["foto"]["tmp_name"],$foto);
        $db->exec("insert into pendaftaran(nama, nik, tempatlahir, tanggallahir, alamat, foto, tiket) values('$nama','$nik','$tempat','$tanggal','$alamat','$foto','$tiket');");
        http_response_code(200);
        echo(json_encode(
            [
                "code"=> 200,
                "pesan"=> "pendaftaran berhasil",
                "IDpendaftaran"=> $lastID
            ]
        ));
    }
    catch (PDOException $e){
        echo $e->getMessage();
    }
    
?>