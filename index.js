$(document).ready(function () {
    $("#nama_1").click(function () {
        confirm("Kamu Memilih Novi Firda, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Novi Firda");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_1").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_2").click(function () {
        confirm("Kamu Memilih Gina Silvia, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Gina Silvia");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_2").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_3").click(function () {
        confirm("Kamu Memilih Rosa Rosiana, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Rosa Rosiana");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_3").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_4").click(function () {
        confirm("Kamu Memilih Mifta Almaripat, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Mifta Almaripat");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_4").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_5").click(function () {
        confirm("Kamu Memilih Devita Fitri, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Devita Fitri");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_5").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_1").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Klayan");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_1").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_2").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Talun");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_2").innerHTML = nama;
        }
    });
});


$(document).ready(function () {
    $("#alamat_3").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Majasem");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_3").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_4").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Perum");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_4").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_5").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Palimanan");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_5").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $(".hapus").click(function () {
        alert('Sorry Lu gk diajak tau!!')
    });
});