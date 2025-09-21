document.getElementById('formKesehatan').addEventListener('submit', function (e) {
  e.preventDefault();

  const tahunLahir = parseInt(document.getElementById('tahun').value);
  if (isNaN(tahunLahir)) {
    alert("Tolong isi tahun lahir!");
    return;
  }

  const tahunSekarang = 2025;
  const usia = tahunSekarang - tahunLahir;

  const k1 = parseInt(document.getElementById('merokok').value);
  const k2 = parseInt(document.getElementById('hipertensi').value);
  const k3 = parseInt(document.getElementById('diabetes').value);

  const P = 2000000;
  let m = 0;

  if (usia <= 20) m = 0.1;
  else if (usia <= 35) m = 0.2;
  else if (usia <= 50) m = 0.25;
  else m = 0.3;

  const totalPremi = P + (m * P) + (k1 * 0.5 * P) + (k2 * 0.4 * P) + (k3 * 0.5 * P);


  document.getElementById('hasil-premi').innerHTML =
    `Usia: ${usia} tahun <br>
     Premi yang harus dibayar: <strong>Rp${totalPremi.toLocaleString('id-ID')}</strong>`;
});


document.getElementById("btnCheckout").addEventListener("click", () => {
  const detail = document.getElementById("hasil-premi").innerText;
  if (!detail) {
    alert("isi dulu!");
    return;
  }
  const checkoutTemp = JSON.parse(sessionStorage.getItem("checkoutTemp")) || [];
  checkoutTemp.push({ jenis: "Asuransi Kesehatan", detail });
  sessionStorage.setItem("checkoutTemp", JSON.stringify(checkoutTemp));
  window.location.href = "checkout.html";
});

document.getElementById("btnBack").addEventListener("click", () => {
  window.location.href = "main.html";
});
