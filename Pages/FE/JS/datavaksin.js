let url_str = window.location.href;

let url = new URL(url_str);
let search_params = url.searchParams;

const ID = search_params.get('IDlembaga')
fetch('PHP/BE/getdatavaksin.php',{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        IDlembaga :ID
    })
}).then(res=>res.json())
.then(res=>{
    if(res.code===200){
        document.getElementById('nama').innerHTML ='Nama Lengkap = ' + res.data.nama
        document.getElementById('kode').innerHTML ='Kode Lembaga = ' + res.data.kode
        document.getElementById('jenisvaksin').innerHTML ='Jenis Vaksin = ' + res.data.jenis
        document.getElementById('tanggal').innerHTML ='Tanggal Vaksin = ' + res.data.tanggal
        document.getElementById('syarat').innerHTML ='Syarat Vaksin = ' + res.data.syarat
        document.getElementById('alamat').innerHTML ='Alamat Vaksin = ' + res.data.alamat
        document.getElementById('kuota').innerHTML ='Kuota Vaksin = ' + res.data.kuota
    }
    else{
        window.location.href = "daftar.php"
    }
})

