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

document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault()
    document.getElementsByClassName('konfirmasi')[0].style.display = 'flex';
    let nama = document.getElementsByName('nama')[0].value
    let kode = document.getElementsByName('kode')[0].value
    let jenis = document.getElementsByName('jenis')[0].value.toLowerCase()
    let tanggal = document.getElementsByName('tanggal')[0].value
    let syarat = document.getElementsByName('syarat')[0].value
    let alamat = document.getElementsByName('alamat')[0].value
    let kuota = document.getElementsByName('kuota')[0].value
    let foto = document.getElementById('foto').files[0]
    let formdata = new FormData()
    formdata.append('foto',foto)
    formdata.append('nama',nama)
    formdata.append('kode',kode)
    formdata.append('jenis',jenis)
    formdata.append('tanggal',tanggal)
    formdata.append('syarat',syarat)
    formdata.append('alamat',alamat)
    formdata.append('kuota',kuota)

    document.getElementById('ya').addEventListener('click', function(a){
        fetch(`PHP/BE/unggahbackend.php`,{
            method: "POST",
            body:formdata
        }).then(res=>res.json())
        .then(res=>{
            if(res.code===200){                    
                window.location.href = `datavaksin.php?IDlembaga=${res.IDlembaga}`
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