# WORLD CONDITION — Global Data Observatory

Website responsif untuk melihat data publik mengenai kondisi dunia. Fokusnya informasi, sumber, periode data, dan metodologi—bukan animasi dekoratif.

## File
Semua file berada dalam satu folder:
- `index.html` — struktur halaman
- `style.css` — semua styling responsif
- `app.js` — API, pencarian, filter, grafik, kurs mata uang
- `README.md` — panduan

Tidak membutuhkan gambar tambahan untuk berjalan. Desain menggunakan CSS, sehingga tidak ada file gambar wajib untuk ditambahkan.

## Menjalankan
1. Unggah semua file ke root repository GitHub.
2. Buka Settings → Pages → Deploy from a branch → pilih `main` dan `/ (root)`.
3. Buka URL GitHub Pages. Untuk lokal, jalankan lewat Live Server/HTTP, bukan `file://`.
4. Internet dibutuhkan untuk mengambil data API.

## Data yang terhubung
- **World Bank API:** populasi, emisi CO₂ per kapita, PDB per kapita. Umumnya tahunan dan bisa memiliki jeda.
- **USGS GeoJSON:** kejadian gempa global selama 24 jam terakhir.
- **Frankfurter API:** kurs referensi, bukan kurs transaksi real-time bank.
- Jam lokal: waktu perangkat, bukan observasi ilmiah.

## Indikator yang belum terhubung
Penebangan hutan, kebakaran, es kutub, penyakit, kematian/kelahiran, kriminalitas, bullying, pendidikan, WNI di luar negeri, utang negara, pekerja, programmer full-stack, hacker, dan perusahaan IT ditandai belum tersedia atau memerlukan dataset khusus. Tidak ada angka palsu yang ditampilkan.

Sumber lanjutan:
- World Bank: https://data.worldbank.org/
- USGS: https://earthquake.usgs.gov/earthquakes/feed/
- Open-Meteo: https://open-meteo.com/
- WHO: https://www.who.int/data
- NASA FIRMS: https://firms.modaps.eosdis.nasa.gov/
- UNESCO UIS: https://uis.unesco.org/
- UNODC Data Portal: https://dataunodc.un.org/
- NASA Earthdata/GIBS: https://www.earthdata.nasa.gov/
- Frankfurter: https://www.frankfurter.app/

## Akurasi
"Real-time" bukan standar yang sama untuk semua indikator. Sumber memiliki jeda, cakupan, definisi, dan revisi berbeda. Setiap angka publikasi sebaiknya memiliki satuan, wilayah, tanggal/periode, dan sumber. Jangan menyebut estimasi tahunan sebagai penghitung langsung setiap detik.

## Aset gambar
Tidak ada gambar wajib. Jika ingin menambahkan gambar editorial nanti, nama yang disarankan: `earth-hero.webp`, `forest-cover.webp`, `satellite-fire.webp`, `polar-ice.webp`. Saat ini website tidak membutuhkan gambar-gambar tersebut.
