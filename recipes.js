/* Data resep awal TINGGSFOOD. Waktu dan takaran adalah panduan resep rumahan. */
window.initialRecipes = [
  {
    id: "nasi-goreng", name: "Nasi Goreng Rumahan", category: "Menu Utama", author: "TINGGSFOOD",
    time: 20, servings: 2, difficulty: "Mudah",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    description: "Nasi goreng sederhana dengan bumbu harum, cocok untuk sarapan atau makan malam praktis.",
    ingredients: ["2 piring nasi putih dingin", "2 butir telur", "2 siung bawang putih, cincang", "2 sdm kecap manis", "1 batang daun bawang, iris", "1 sdm minyak", "Garam dan merica secukupnya"],
    steps: ["Panaskan minyak di wajan, lalu tumis bawang putih hingga harum.", "Masukkan telur dan orak-arik hingga matang.", "Tambahkan nasi putih, kecap manis, garam, dan merica. Aduk hingga merata.", "Masukkan daun bawang, aduk sebentar, lalu sajikan selagi hangat."]
  },
  {
    id: "ayam-kecap", name: "Ayam Kecap Bawang", category: "Menu Utama", author: "TINGGSFOOD",
    time: 35, servings: 3, difficulty: "Mudah",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    description: "Potongan ayam dengan saus kecap gurih-manis dan aroma bawang yang menggugah selera.",
    ingredients: ["400 g ayam, potong kecil", "4 sdm kecap manis", "3 siung bawang putih, cincang", "4 butir bawang merah, iris", "150 ml air", "1 sdm minyak", "Garam dan lada secukupnya"],
    steps: ["Panaskan minyak, tumis bawang merah dan bawang putih sampai harum.", "Masukkan ayam, aduk hingga permukaannya berubah warna.", "Tambahkan kecap, air, garam, dan lada.", "Masak dengan api kecil selama 20–25 menit hingga ayam matang dan saus mengental."]
  },
  {
    id: "sup-ayam", name: "Sup Ayam Sayuran", category: "Sup", author: "TINGGSFOOD",
    time: 40, servings: 4, difficulty: "Mudah",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    description: "Sup hangat berisi ayam, wortel, dan kentang dengan kuah ringan yang nyaman disantap.",
    ingredients: ["250 g ayam", "1 wortel, iris", "1 kentang, potong dadu", "1,2 liter air", "2 siung bawang putih, memarkan", "1 batang daun bawang", "Garam dan merica secukupnya"],
    steps: ["Rebus ayam dalam air hingga mulai matang, buang buih yang muncul.", "Masukkan bawang putih dan kentang, lalu masak selama 10 menit.", "Tambahkan wortel dan lanjutkan memasak hingga semua bahan empuk.", "Bumbui dengan garam dan merica. Tambahkan daun bawang sebelum disajikan."]
  },
  {
    id: "pasta-tomat", name: "Pasta Saus Tomat", category: "Pasta", author: "TINGGSFOOD",
    time: 25, servings: 2, difficulty: "Mudah",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
    description: "Pasta dengan saus tomat sederhana, bawang putih, dan sedikit keju untuk makan praktis.",
    ingredients: ["200 g pasta", "3 buah tomat matang, cincang", "2 siung bawang putih, cincang", "1 sdm minyak zaitun atau minyak sayur", "2 sdm keju parut (opsional)", "Garam, lada, dan oregano secukupnya"],
    steps: ["Rebus pasta mengikuti petunjuk kemasan, lalu tiriskan dan sisihkan sedikit air rebusannya.", "Panaskan minyak dan tumis bawang putih hingga harum.", "Masukkan tomat, garam, lada, dan oregano. Masak hingga tomat menjadi saus.", "Campurkan pasta ke dalam saus. Tambahkan sedikit air rebusan jika terlalu kental, lalu sajikan dengan keju."]
  },
  {
    id: "tumis-kangkung", name: "Tumis Kangkung Bawang", category: "Sayuran", author: "TINGGSFOOD",
    time: 15, servings: 2, difficulty: "Mudah",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    description: "Lauk sayuran cepat dengan bawang putih dan cabai, pas sebagai pendamping nasi hangat.",
    ingredients: ["1 ikat kangkung, siangi dan cuci", "3 siung bawang putih, iris", "2 cabai merah, iris (opsional)", "1 sdm saus tiram (opsional)", "2 sdm minyak", "Garam secukupnya"],
    steps: ["Panaskan minyak, lalu tumis bawang putih dan cabai hingga harum.", "Masukkan kangkung dan aduk dengan api besar.", "Tambahkan saus tiram dan sedikit garam.", "Masak 2–4 menit hingga layu tetapi masih hijau, lalu sajikan."]
  },
  {
    id: "perkedel-kentang", name: "Perkedel Kentang", category: "Camilan", author: "TINGGSFOOD",
    time: 35, servings: 4, difficulty: "Menengah",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80",
    description: "Perkedel kentang lembut dengan bumbu sederhana, cocok sebagai lauk atau camilan.",
    ingredients: ["400 g kentang", "2 siung bawang putih", "1 batang seledri, iris", "1 butir telur, kocok", "Garam dan merica secukupnya", "Minyak untuk menggoreng"],
    steps: ["Kupas kentang, potong, lalu goreng atau kukus sampai empuk.", "Haluskan kentang bersama bawang putih, garam, dan merica.", "Campurkan seledri, bentuk menjadi bulatan pipih.", "Celupkan ke telur kocok lalu goreng dengan api sedang hingga keemasan dan matang."]
  },
  {
    id: "telur-balado", name: "Telur Balado Sederhana", category: "Menu Utama", author: "TINGGSFOOD",
    time: 25, servings: 3, difficulty: "Mudah",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80",
    description: "Telur rebus berselimut sambal merah sederhana untuk menu rumahan yang kaya rasa.",
    ingredients: ["4 butir telur", "5 cabai merah", "4 butir bawang merah", "2 siung bawang putih", "1 buah tomat", "2 sdm minyak", "Garam dan sedikit gula"],
    steps: ["Rebus telur hingga matang, dinginkan, lalu kupas.", "Haluskan cabai, bawang merah, bawang putih, dan tomat.", "Tumis bumbu halus hingga matang dan harum.", "Bumbui dengan garam dan sedikit gula, masukkan telur, lalu aduk perlahan hingga terbalut sambal."]
  },
  {
    id: "bubur-ayam", name: "Bubur Ayam Praktis", category: "Sarapan", author: "TINGGSFOOD",
    time: 45, servings: 3, difficulty: "Mudah",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    description: "Bubur nasi lembut yang bisa diberi suwiran ayam dan daun bawang sebagai pelengkap.",
    ingredients: ["200 g nasi putih", "900 ml air atau kaldu", "150 g ayam matang, suwir", "1 siung bawang putih, memarkan", "1 batang daun bawang, iris", "Garam dan merica secukupnya"],
    steps: ["Masukkan nasi, air atau kaldu, dan bawang putih ke panci.", "Masak dengan api kecil sambil sesekali diaduk sampai nasi melunak dan mengental.", "Tambahkan air bila perlu agar bubur mencapai kekentalan yang diinginkan.", "Bumbui, lalu sajikan dengan ayam suwir dan daun bawang."]
  },
  {
    id: "pisang-panggang", name: "Pisang Panggang Madu", category: "Camilan", author: "TINGGSFOOD",
    time: 12, servings: 2, difficulty: "Mudah",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
    description: "Pisang hangat dengan sentuhan madu, cocok untuk camilan manis tanpa banyak persiapan.",
    ingredients: ["2 buah pisang matang tetapi masih padat", "1 sdm margarin", "1–2 sdt madu", "Sejumput kayu manis (opsional)"],
    steps: ["Kupas pisang dan belah memanjang.", "Panaskan wajan antilengket dengan sedikit margarin.", "Panggang pisang selama 2–3 menit per sisi hingga kecokelatan.", "Sajikan dengan madu dan sedikit kayu manis jika suka."]
  },
  {
    id: "tahu-sayur", name: "Tumis Tahu Sayuran", category: "Sayuran", author: "TINGGSFOOD",
    time: 20, servings: 2, difficulty: "Mudah",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    description: "Tahu dan sayuran ditumis dengan bumbu gurih, fleksibel untuk memanfaatkan stok kulkas.",
    ingredients: ["250 g tahu putih, potong dadu", "1 wortel, iris tipis", "100 g buncis, potong", "2 siung bawang putih, cincang", "1 sdm kecap asin", "1 sdm minyak", "100 ml air, garam dan lada secukupnya"],
    steps: ["Panaskan minyak, tumis bawang putih hingga harum.", "Masukkan tahu dan masak sampai permukaannya sedikit keemasan.", "Tambahkan wortel, buncis, kecap asin, dan air.", "Tutup wajan sebentar hingga sayuran matang. Koreksi rasa lalu sajikan."]
  }
];