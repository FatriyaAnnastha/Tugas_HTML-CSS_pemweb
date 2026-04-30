<?php
include 'koneksi.php';

$nama = $_POST['nama'];
$tanggal_lahir = $_POST['tanggal_lahir'];
$gender = $_POST['gender'];
$kota = $_POST['kota'];
$email = $_POST['email'];
$pesan = $_POST['pesan'];

$query = "INSERT INTO kontak 
(nama, tanggal_lahir, gender, kota, email, pesan) 
VALUES 
('$nama','$tanggal_lahir','$gender','$kota','$email','$pesan')";

if (mysqli_query($conn, $query)) {
    echo "Data berhasil disimpan!";
} else {
    echo "Error: " . mysqli_error($conn);
}
?>