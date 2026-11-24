# TINGGSFOOD

Website resep makanan responsif dengan desain minimalis biru, putih, dan hitam.

## Struktur proyek

```text
tinggsfood-website/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── recipes.js
│   └── app.js
└── assets/
    └── images/
```

Folder `assets/images/` disediakan untuk gambar lokal jika ingin mengganti foto dari URL internet dengan file sendiri.

## Cara menjalankan

1. Ekstrak ZIP proyek.
2. Buka folder proyek di VS Code.
3. Jalankan `index.html` menggunakan Live Server, atau buka langsung di browser.
4. Pastikan koneksi internet tersedia untuk font dan foto awal yang menggunakan URL Unsplash.

## Fungsi file

- `index.html`: struktur halaman, navigasi, hero banner, daftar resep, modal detail, dan formulir tambah resep.
- `css/style.css`: tata letak, warna, komponen, responsivitas, serta tema terang/gelap.
- `js/recipes.js`: data awal 10 resep, termasuk bahan dan langkah memasak.
- `js/app.js`: pencarian, filter kategori, detail resep, favorit, tema, unggah foto, dan penyimpanan lokal.
- `assets/images/`: tempat gambar lokal milik proyek.

## Fitur

- 10 resep awal.
- Pencarian berdasarkan nama, deskripsi, kategori, dan bahan.
- Filter kategori.
- Detail resep dengan bahan dan langkah memasak.
- Formulir untuk menambah resep beserta gambar.
- Mode terang/gelap.
- Favorit resep (disimpan bersama data resep).
- Penyimpanan memakai `localStorage`.

## Catatan penyimpanan

Data hanya tersimpan di browser dan perangkat yang digunakan. Menghapus data situs/browser dapat menghapus koleksi lokal. Foto yang diunggah disimpan sebagai data gambar di `localStorage`; gunakan foto kecil agar kuota penyimpanan browser tidak cepat penuh. Website ini belum memakai database, akun pengguna, atau sinkronisasi antarperangkat.

## Catatan foto

Foto resep awal menggunakan URL gambar Unsplash sebagai placeholder visual. Untuk publikasi, periksa lisensi dan kesesuaian setiap gambar, atau ganti dengan foto sendiri. Jika foto internet tidak tampil, fitur lain tetap berjalan.
