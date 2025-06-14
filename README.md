<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title> CopyKuy -Copy Shop Keren </title>
  <link rel="stylesheet" href="style.css">
  <script defer src="script.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
  <header>
    <nav class="navbar">
      <div class="logo">📄 CopyKuy</div>
      <ul>
        <li><a href="#home">Beranda</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#order">Pesanan</a></li>
      </ul>
    </nav>
    <section class="hero" id="home">
      <h1>CopyKuy: Nikmati Layanan Copy & Print Kekinian!</h1>
      <p>Layanan cetak warna, hitam putih, jilid, dan banyak lagi!</p>
      <a href="#menu" class="btn">Lihat Menu</a>
    </section>
  </header>

  <main>
    <section class="menu-section" id="menu">
      <h2>Menu Layanan</h2>
      <div class="menu-grid">
        <div class="menu-item">
          <img src="https://source.unsplash.com/300x200/?printer" alt="Print Hitam Putih">
          <h3>Print Hitam Putih</h3>
          <p>Rp500 / lembar</p>
          <button onclick="addToCart('Print Hitam Putih', 500)">Pesan</button>
        </div>
        <div class="menu-item">
          <img src="https://source.unsplash.com/300x200/?color-printer" alt="Print Warna">
          <h3>Print Warna</h3>
          <p>Rp2.000 / lembar</p>
          <button onclick="addToCart('Print Warna', 2000)">Pesan</button>
        </div>
        <div class="menu-item">
          <img src="https://source.unsplash.com/300x200/?binding" alt="Jilid Spiral">
          <h3>Jilid Spiral</h3>
          <p>Rp5.000 / buku</p>
          <button onclick="addToCart('Jilid Spiral', 5000)">Pesan</button>
        </div>
        <div class="menu-item">
          <img src="https://source.unsplash.com/300x200/?scanning-documents" alt="Scan Dokumen">
          <h3>Scan Dokumen</h3>
          <p>Rp1.000 / lembar</p>
          <button onclick="addToCart('Scan Dokumen', 1000)">Pesan</button>
        </div>
      </div>
    </section>

    <section class="order-section" id="order">
      <h2>Pesanan Anda</h2>
      <div id="cart"></div>
      <button class="btn checkout-btn" onclick="checkout()">Bayar Sekarang</button>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 CopyKuy. Didesain dengan ❤️ dan warna.</p>
  </footer>
</body>
</html>
