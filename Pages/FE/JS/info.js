let url_str = window.location.href;

let url = new URL(url_str);
let search_params = url.searchParams;

const page = search_params.get('page')
const kota = search_params.get('kota')
const jenis = search_params.get('jenis')
var awal = search_params.get('awal')
var akhir = search_params.get('akhir')

if(awal==''){
    awal = '1971-01-01'
}
if(akhir==''){
    akhir= '3000-12-12'
}

fetch(`PHP/BE/getinfo.php?kota=${kota}&jenis=${jenis}&awal=${awal}&akhir=${akhir}&page=${page}`)
.then(res=>res.json())
.then(res=>{
    if(res.code === 200){
        var text = ""
        res.data.forEach((item,index)=>{        
            text = text.concat(`<div class="content">
                        <img src="img/hospital.png" alt="">                
                        <div class="sub-content">
                            <p>${item.nama}</p>
                            <div class="sub-detail">
                                <p>${item.alamat}</p>
                                <p>Jenis Vaksin : ${item.jenis}</p>
                            </div>
                            <div class="sub-detail">
                                <p>Jumlah Kuota : ${item.kuota}</p>
                                <p>Kuota Tersedia : ${item.kuota-item.pendaftar}</p>                        
                            </div>                
                            <div class="sub-detail">                        
                                <p>Syarat : ${item.syarat}</p>
                                <p>Tanggal : ${item.tanggal}</p>
                            </div>                
                        </div>
                        <a href="daftar.php?IDlembaga=${item.IDlembaga}">DAFTAR</a>
                    </div>`)                    
        })
        document.getElementsByClassName('main-content')[0].innerHTML = text
    }
})