function hitungNilaiAkhir(tugas, uts, uas){
    return (0.3 * tugas) + (0.3 * uts) + (0.4 * uas);
}

function tentukanGrade(nilai){
    if(nilai >= 85){
        return "A";
    }else if(nilai >= 75){
        return "B";
    }else if(nilai >= 65){
        return "C";
    }else if(nilai >= 50){
        return "D";
    }else{
        return "E";
    }
}

function tentukanStatus(nilai){
    return nilai >= 60 ? "Lulus" : "Tidak Lulus";
}
    let data_mahasiswa=[];
function hitungNilai(){

    let nama = document.getElementById("nama").value;
    let nim = document.getElementById("nim").value;

    let tugas = parseFloat(document.getElementById("tugas").value);
    let uts = parseFloat(document.getElementById("uts").value);
    let uas = parseFloat(document.getElementById("uas").value);

    let nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
    let grade = tentukanGrade(nilaiAkhir);
    let status = tentukanStatus(nilaiAkhir);

    data_mahasiswa.push({
        nama,
        nim,
        tugas,
        uts,
        uas,
        nilaiAkhir,
        grade,
        status
    });
    let tabel = document.getElementById("dataTabel");

tabel.innerHTML = "";

data_mahasiswa.forEach(mhs => {
    tabel.innerHTML += `
        <tr>
            <td>${mhs.nama}</td>
            <td>${mhs.nim}</td>
            <td>${mhs.nilaiAkhir.toFixed(2)}</td>
            <td>${mhs.grade}</td>
            <td>${mhs.status}</td>
        </tr>
    `;
});

    console.log(data_mahasiswa);

    document.getElementById("outNama").innerText = nama;
    document.getElementById("outNim").innerText = nim;
    document.getElementById("outNilai").innerText = nilaiAkhir.toFixed(2);
    document.getElementById("outGrade").innerText = grade;

    let statusElement = document.getElementById("outStatus");

    statusElement.innerText = status;

    if(status === "Lulus"){
        statusElement.className = "lulus";
    }else{
        statusElement.className = "tidak";
    }

    document.getElementById("hasil").style.display = "block";


}

