// Data Cerita
const ceritaDatabase = {
  Teknologi: [
    "Kamu menjadi Chief AI Engineer di {daerah}, menciptakan robot yang menjunjung {nilai}!",
    "Startup-mu di bidang EdTech menjadi unicorn pertama dari {daerah}!"
  ],
  Lingkungan: [
    "Kamu memimpin gerakan reboisasi di {daerah}, menyelamatkan 1 juta pohon!",
    "Penemu bio-plastic dari {daerah} yang mengguncang dunia!"
  ]
};

// Event Listener Form
document.getElementById("formMasaDepan").addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Ambil nilai input
  const provinsi = document.getElementById("provinsi").value;
  
  // Generate cerita acak
  const minat = document.getElementById("minat").value;
  const cerita = ceritaDatabase[minat][Math.floor(Math.random() * ceritaDatabase[minat].length)];
  
  // Tampilkan hasil
  document.getElementById("namaDaerah").textContent = provinsi;
  document.getElementById("ceritaMasaDepan").textContent = cerita
    .replace("{daerah}", provinsi)
    .replace("{nilai}", "gotong royong"); // Ganti dengan input nilai budaya
  
  document.getElementById("formMasaDepan").classList.add("hidden");
  document.getElementById("hasilSimulasi").classList.remove("hidden");
});

// Fungsi Ulangi
function ulangi() {
  document.getElementById("formMasaDepan").reset();
  document.getElementById("formMasaDepan").classList.remove("hidden");
  document.getElementById("hasilSimulasi").classList.add("hidden");
}
