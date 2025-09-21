document.getElementById('DataJiwa').addEventListener('submit', function (e) {
  e.preventDefault();

  const tahunLahir = parseInt(document.getElementById('tanggal').value);
  const t = parseInt(document.getElementById('tanggungan').value);
  const tahunSekarang = 2025;
  const u = tahunSekarang - tahunLahir;
  let m = 0; 
  if (u <= 30) m = 0.002; 
  else if (u <= 50) m = 0.004; 
  else m = 0.01; 

  const premi = m * t;

  document.getElementById('hasil-premi').innerText =
  `Nama: ${document.getElementById('nama').value}
Umur: ${u} tahun
Tarif premi: ${(m * 100).toFixed(1)}%
Besar pertanggungan: Rp${t.toLocaleString('id-ID')}
Premi bulanan: Rp${premi.toLocaleString('id-ID')}`;
});


document.getElementById("btnCheckout").addEventListener("click", () => {
  const detail = document.getElementById("hasil-premi").innerText;
  if (!detail || detail.includes("hasil-premi")) {
    alert("isi dulu!");
    return;
  }
  const checkoutTemp = JSON.parse(sessionStorage.getItem("checkoutTemp")) || [];
  checkoutTemp.push({ jenis: "Asuransi Jiwa", detail });
 sessionStorage.setItem("checkoutTemp", JSON.stringify(checkoutTemp));
  window.location.href = "checkout.html";
});


document.getElementById("btnBack").addEventListener("click", () => {
  window.location.href = "main.html";
});
