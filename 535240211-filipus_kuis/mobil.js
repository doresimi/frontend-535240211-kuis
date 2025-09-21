document.getElementById('Data-Mobil').addEventListener('submit', function(e) {
  e.preventDefault();

  const harga = parseFloat(document.getElementById('harga').value);
  const tahun = parseInt(document.getElementById('tahun').value);
  const tahunSekarang = 2025;
  const umur = tahunSekarang - tahun;

  let premi = 0;
  if (umur <= 3) premi = 0.025 * harga;
  else if (umur >= 3 && umur <= 5 && harga < 200000000) premi = 0.04 * harga;
  else if (umur > 3 && umur <= 5 && harga >= 200000000) premi = 0.03 * harga;
  else premi = 0.05 * harga;

  document.getElementById('total-biaya').innerText =
    `Umur mobil: ${umur} tahun
Perkiraan premi tahunan: Rp${premi.toLocaleString('id-ID')}`;
});

document.getElementById("btnCheckout").addEventListener("click", () => {
  const detail = document.getElementById("total-biaya").innerText;
  if (!detail || detail.includes("total-biaya")) {
    alert("isi dulu");
    return;
  }
  const checkoutTemp = JSON.parse(sessionStorage.getItem("checkoutTemp")) || [];
  checkoutTemp.push({ jenis: "Asuransi Mobil", detail });
 sessionStorage.setItem("checkoutTemp", JSON.stringify(checkoutTemp));
  window.location.href = "checkout.html";
});

document.getElementById("btnBack").addEventListener("click", () => {
  window.location.href = "main.html";
});