let url_str = window.location.href;

let url = new URL(url_str);
let search_params = url.searchParams;

const ID = search_params.get('IDpendaftaran')
fetch('PHP/BE/gettiket.php',{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        IDpendaftaran :ID
    })
}).then(res=>res.json())
.then(res=>{
    if(res.code===200){
        document.getElementById('nama').innerHTML ='Nama Lengkap : ' + res.data.nama
        document.getElementById('nik').innerHTML ='NIK : ' + res.data.nik
        document.getElementById('tiket').innerHTML ='Kode Pendaftaran : ' + res.data.tiket
        document.getElementById('lembaga').innerHTML = 'Tempat Vaksin : ' + res.data.lembaga
    }
    
})

