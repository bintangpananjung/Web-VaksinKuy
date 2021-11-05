<?php

    $nama = $_POST['nama'];
    $kode = $_POST['kode'];
    $jenis = $_POST['jenis'];
    $tanggal = $_POST['tanggal'];
    $syarat = $_POST['syarat'];
    $alamat = $_POST['alamat'];
    $kuota = $_POST['kuota'];
    // var_dump($_POST);

    
    try{
        $db = new PDO('sqlite:../../DB/database.sqlite3');
        $lastID = $db->query("select max(IDlembaga) as lastID from lembaga")->fetchAll()[0]['lastID'] + 1;
        // kode pendaftaran        
        $dir = "../../img/penyedia/";
        $namafoto = $_FILES["foto"]["name"];
        $tmp =explode(".",$namafoto);
        $ext = end($tmp);        
        $foto = "{$dir}{$lastID}.{$ext}";
        move_uploaded_file($_FILES["foto"]["tmp_name"],$foto);
        $db->exec("insert into lembaga(nama, kode, jenis, tanggal, syarat, alamat, kuota, dokumen) values('$nama','$kode','$jenis','$tanggal','$syarat','$alamat','$kuota','$foto');");
        http_response_code(200);
        echo(json_encode(
            [
                "code"=> 200,
                "pesan"=> "unggah informasi berhasil",
                "IDlembaga"=> $lastID
            ]
        ));
    }
    catch (PDOException $e){
        echo $e->getMessage();
    }
    
?>