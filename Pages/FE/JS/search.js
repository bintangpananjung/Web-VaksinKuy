document.getElementById('form').addEventListener('submit',e=>{
    e.preventDefault()
    var kota = document.getElementsByName('kota')[0].value
    var jenis = document.getElementsByName('jenis')[0].value
    var awal = document.getElementsByName('mulai')[0].value
    var akhir = document.getElementsByName('sampai')[0].value
    fetch(`PHP/BE/getinfo.php?kota=${kota}&jenis=${jenis}&awal=${awal}&akhir=${akhir}&page=${page}`)
    .then(res=>res.json())
    .then(res=>{
        window.location.href = `info.php?kota=${kota}&jenis=${jenis}&awal=${awal}&akhir=${akhir}&page=${page}`
        if(res.code === 200){            
            var text = ""
            res.data.forEach((item,index)=>{        
                text = text.concat(`<div class="content">
                            <img src="img/hospital.png" alt="">                
                            <div class="sub-content">
                                <p>${item.lembaga}</p>
                                <div class="sub-detail">
                                    <p id="sub1">${item.alamatlembaga}</p>
                                    <p id="sub2">Jenis Vaksin : ${item.jenis}</p>
                                </div>
                                <div class="sub-detail">
                                    <p id="sub1">Jumlah Kuota : ${item.kuota}</p>
                                    <p id="sub2">Kuota Tersedia : ${item.kuota-item.pendaftar}</p>                        
                                </div>                
                                <div class="sub-detail">                        
                                    <p id="sub1">Syarat : ${item.syarat}</p>
                                    <p id="sub2">Tanggal : ${item.tanggal}</p>
                                </div>                
                            </div>
                            <a href="daftar.php?IDlembaga=${item.IDlembaga}">DAFTAR</a>
                        </div>`)                    
            })
            document.getElementsByClassName('main-content')[0].innerHTML = text
        }
    })
})