
let apel = document.getElementById("apel")
let anggur = document.getElementById("anggur")
let jeruk = document.getElementById("jeruk")



apel.addEventListener("click", pilih.bind(this,"apel"))
anggur.addEventListener("click", pilih.bind(this,"anggur"))
jeruk.addEventListener("click", pilih.bind(this,"jeruk"))

function pilih(buah){
        if(buah == "apel"){
            swal("ANDA TELAH MEMBELI APEL", "Anda Bisa melihatnya di keranjang");
        } else if (buah == "anggur"){
            swal("ANDA TELAH MEMBELI ANGGUR", "Anda Bisa melihatnya di keranjang");
        } else if (buah == "jeruk"){
            swal("ANDA TELAH MEMBELI JERUK", "Anda Bisa melihatnya di keranjang");
        }
}