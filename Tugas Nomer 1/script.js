function kirim(){
    let username = document.getElementById("inputUsername").value;
    let password = document.getElementById("inputPassword").value;
    

    if (username == "" || password == ""){
        alert("Mohon lengkapi data diatas")
    } else {
        cek = confirm("Apakah data diatas sudah benar?")
        if (cek == true ){
            swal("LOGIN BERHASIL", "Data Anda Sudah Tersimpan");
        } else {
            swal("LOGIN DIBATALAKAN","Anda telah membatalkan Login");
        }
    }
}

const tombol = document.getElementById("tombol");
tombol.addEventListener("click", kirim)

