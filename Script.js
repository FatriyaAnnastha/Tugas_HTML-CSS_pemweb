function tampilPesan(){
    alert("Terima kasih sudah mengunjungi website saya 😄");
}

function validasiForm(){
    let nama = document.getElementById("nama").value;
    let tanggal_lahir = document.getElementById("tanggal_lahir").value;
    let gender = document.getElementsByName("gender");
    let alamat = document.getElementById("alamat").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    if(nama == ""){
        alert("Nama tidak boleh kosong!");
        return false;
    }

    if(tanggal_lahir == ""){
        alert("Tanggal lahir harus diisi!");
        return false;
    }

    // cek gender
    let pilihGender = false;
    for(let i = 0; i < gender.length; i++){
        if(gender[i].checked){
            pilihGender = true;
        }
    }

    if(!pilihGender){
        alert("Pilih jenis kelamin!");
        return false;
    }

    if(alamat == ""){
        alert("Pilih alamat!");
        return false;
    }

    if(email == ""){
        alert("Email tidak boleh kosong!");
        return false;
    }

    if(email.indexOf("@") == -1){
        alert("Email harus mengandung @");
        return false;
    }

    if(pesan == ""){
        alert("Pesan tidak boleh kosong!");
        return false;
    }

    alert("Form berhasil dikirim!");
    return true;
}

document.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        let form = document.querySelector("form");

        e.preventDefault();

        if(validasiForm()){
            form.submit();
        }
    }
});