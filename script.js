const nomorWA = "62881012555755";

function bukaPesan() {

    const namaInput = document.getElementById("nama");
    const nama = namaInput.value.trim();
    const error = document.getElementById("error");

    if (nama === "") {
        error.textContent = "Tulis nama kamu dulu ya 🥺";
        return;
    }

    document.getElementById("namaTampil").textContent = nama;

    document.getElementById("halamanAwal").classList.add("hidden");

    document.getElementById("halamanPesan").classList.remove("hidden");
}

function jawabIya() {

    const nama = document.getElementById("nama").value;

    const pesan =
        "Hai Fakhri ❤️\n\n" +
        "Aku " + nama + " sudah membaca pesan kamu sampai selesai.\n\n" +
        "Jawabanku adalah IYA ❤️\n\n" +
        "Makasih sudah berani jujur sama aku.";

    bukaWhatsApp(pesan);
}

function jawabKenal() {

    const nama = document.getElementById("nama").value;

    const pesan =
        "Hai Fakhri ❤️\n\n" +
        "Aku " + nama + " sudah membaca pesan kamu.\n\n" +
        "Maaf tapi aku maunya kita temenan😊";

    bukaWhatsApp(pesan);
}

function bukaWhatsApp(pesan) {

    const link =
        "whatsapp://send?phone=" +
        nomorWA +
        "&text=" +
        encodeURIComponent(pesan);

    window.location.href = link;
}