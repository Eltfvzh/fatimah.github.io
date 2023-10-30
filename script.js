let tombol = document.getElementById("tombol");
let h1 = document.getElementById("h1");
let h4 = document.getElementById("h4");
let p = document.getElementById("p");
let lanjut = document.getElementById("lanjut");
let lanjut1 = document.getElementById("lanjut1");

tombol.addEventListener("click", function(){
    h1.innerHTML = "ada pesan buat kamu :)";
    lanjut.innerHTML = "lanjut?";
    tombol.style.display = "none";

    lanjut.addEventListener("click", function(){
        lanjut.style.display = "none";
        tombol.style.display = "none";
        h1.style.display = "none";
        p.innerHTML = "Kamu tuh lucu banget sii apalagi pas senyum hehe... cuma kamu yang bisa buat aku senyum senyum sendiri di kelas kamu itu penyemangat sekolah bagi aku, ngeliat kamu sekilas aja udh bikin aku seneng tau, aku salting terus setiap ngeliat kamu, saking manisnya";
        lanjut1.innerHTML = "lanjut lagi?";

        lanjut1.addEventListener("click", function(){
            lanjut.style.display = "none";
            tombol.style.display = "none";
            h1.style.display = "none";
            p.style.display = "none";
            lanjut1.style.display = "none";
            h4.innerHTML = "Hei fatimah disini aku cuma mau ngungkapin perasaan aku, masalah aku diterima atau ngak itu tergantung kamunya, aku juga ngak bakal berharap lebih kok, kalo kamu risih bilang aja ya, BTW i have crush on you.. , aku nyatain ini biar hati aku lega aja karna udah ngungkapin perasaaan ini ke kamu, kalau semisalnya kamu udah punya pacar maaf yaa, karna udah confess ke kamu, segitu aja ya.. ku tunggu"

        })
    })
})
