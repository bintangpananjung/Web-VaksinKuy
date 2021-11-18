// function makeid(length) {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * 
//  charactersLength));
//    }
//    return result;
// }
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
        console.log('yes')
        document.getElementById('nama-v').innerHTML ="Nama Lembaga : " + res.data.nama
        document.getElementById('jenis-v').innerHTML ="Jenis Vaksin : " + res.data.jenis
        document.getElementById('tanggal-v').innerHTML ="Tanggal Pelaksanaan" + res.data.tanggal
        document.getElementById('syarat-v').innerHTML ="Syarat-syarat : " + res.data.syarat
        document.getElementById('alamat-v').innerHTML = "Alamat Vaksinasi : " +res.data.alamat
        document.getElementById('kuota-v').innerHTML = "Kuota Total : " +res.data.kuota
        document.getElementById('sisa-v').innerHTML = "Kuota Tersisa : " + (res.data.kuota - res.data.pendaftar)
    }
})



document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault()
    document.getElementsByClassName('konfirmasi')[0].style.display = 'flex';
    let nama = document.getElementsByName('nama')[0].value
    let nik = document.getElementsByName('nik')[0].value
    let tempat = document.getElementsByName('tempat')[0].value
    let tanggal = document.getElementsByName('tanggal')[0].value
    let alamat = document.getElementsByName('alamat')[0].value
    let foto = document.getElementById('foto').files[0]
    let formdata = new FormData()
    formdata.append('foto',foto)
    formdata.append('nama',nama)
    formdata.append('nik',nik)
    formdata.append('tempat',tempat)
    formdata.append('tanggal',tanggal)
    formdata.append('alamat',alamat)

    // let tiket = makeid(10)
    document.getElementById('ya').addEventListener('click', function(a){
        // window.location.href = `tiket.php?nama=${nama}&nik=${nik}&tiket=${tiket}`
        fetch(`PHP/BE/daftarbackend.php`,{
            method: "POST",
            body:formdata
        }).then(res=>res.json())
        .then(res=>{
            if(res.code===200){                    
                window.location.href = `tiket.php?IDpendaftaran=${res.IDpendaftaran}`
            }
            else{
                console.log("gagal")
            }                
        })        
    })
    document.getElementById('belum').addEventListener('click', function(e){
        document.getElementsByClassName('konfirmasi')[0].style.display = 'none';
    })

    
})