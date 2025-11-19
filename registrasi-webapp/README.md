# Aplikasi Registrasi Web

Aplikasi web sederhana yang dibuat dengan Express.js dan terhubung ke database PostgreSQL.

## Struktur Folder

```
.
├── public/
├── src/
│   ├── config/
│   │   └── db.js         # Konfigurasi koneksi database
│   ├── controllers/      # Logika bisnis (request handler)
│   ├── models/           # Model data (interaksi database)
│   ├── routes/
│   │   └── index.js      # Definisi rute API
│   └── views/            # Halaman/template (jika menggunakan view engine)
├── .env.example          # Contoh file environment variables
├── .gitignore            # File dan folder yang diabaikan Git
├── index.js              # File utama aplikasi
├── package.json          # Informasi proyek dan dependensi
└── README.md             # Dokumentasi proyek
```

## Prasyarat

- [Node.js](https://nodejs.org/) (versi 18 atau lebih baru)
- [Docker](https://www.docker.com/) (opsional, untuk database)
- [PostgreSQL](https://www.postgresql.org/) (jika tidak menggunakan Docker)

## Instalasi

1.  **Clone repositori ini:**

    ```bash
    git clone <URL_REPOSITORI>
    cd registrasi-webapp
    ```

2.  **Install dependensi:**

    ```bash
    npm install
    ```

3.  **Konfigurasi Environment Variables:**

    - Salin file `.env.example` menjadi `.env`.
      ```bash
      cp .env.example .env
      ```
    - Buka file `.env`. Jika Anda menggunakan Docker, konfigurasi default seharusnya sudah sesuai. Jika Anda menggunakan instalasi PostgreSQL lokal, sesuaikan dengan konfigurasi Anda.

4.  **Setup Database (Pilih salah satu)**

    ### Opsi 1: Menggunakan Docker (Direkomendasikan)
    
    Pastikan Docker sudah terinstall dan berjalan di sistem Anda. Cukup jalankan perintah berikut:

    ```bash
    docker-compose up -d
    ```
    
    Perintah ini akan membuat dan menjalankan container PostgreSQL di background. Database `registrasi_db` akan dibuat secara otomatis.

    ### Opsi 2: Instalasi PostgreSQL Lokal
    
    - Pastikan server PostgreSQL Anda berjalan.
    - Buat database baru secara manual sesuai dengan nama yang Anda masukkan di file `.env` (contoh: `registrasi_db`).

## Menjalankan Aplikasi

### Mode Pengembangan (Development)

Mode ini menggunakan `nodemon` yang akan secara otomatis me-restart server setiap kali ada perubahan pada file.

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`.

### Mode Produksi (Production)

```bash
npm start
```

## Endpoint API

- `GET /`: Menampilkan pesan selamat datang.
- `GET /test-db`: Menguji koneksi ke database dan mengembalikan waktu server database saat ini.
