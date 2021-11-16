let url_str = window.location.href;

let url = new URL(url_str);
let search_params = url.searchParams;

const page = search_params.get('page')
const search = search_params.get('search')

fetch(`PHP/BE/getinfo.php?search=${search}&page=${page}`)
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