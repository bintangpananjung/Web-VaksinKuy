let header = `<div class="header-wrap">
                <a class="logo" href="index.php">
                    <img src="img/suntik.png" alt="" id="logo1">
                    <p id="logo2">Vaksin</p>
                    <p id="logo3">Kuy</p>
                </a>
                <button id="navbar" onclick="opennavbar()"><img src="img/navbar.png" alt="" style="height: 30px; width: 30px;"></button>
                <div class="header-right">
                    <a id="info" href="info.php">Informasi Vaksin</a>
                    <a id="unggah" href="penyedia.php">Unggah Informasi</a>
                </div>                
            </div>`
document.getElementsByClassName('header')[0].innerHTML = header
document.getElementById('nav').innerHTML = `<a href="#" class="info">Informasi Vaksin</a>
                                            <a href="#" class="unggah">Unggah Informasi</a>`

function opennavbar(){
    var x = document.getElementById('nav')
    x.classList.toggle('navbar')
    
}