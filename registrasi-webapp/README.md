# Aplikasi Registrasi Web

Aplikasi web sederhana yang dibuat dengan Express.js, Handlebars, Tailwind CSS v4, dan terhubung ke database PostgreSQL.

## Struktur Folder

```
.
├── migrations/           # File migrasi database
├── public/
│   └── css/
│       └── tailwind.css  # File CSS hasil generate Tailwind
├── src/
│   ├── config/
│   │   └── db.js         # Konfigurasi koneksi database
│   ├── controllers/      # Logika bisnis (request handler)
│   ├── models/           # Model data (interaksi database)
│   ├── routes/
│   │   └── index.js      # Definisi rute aplikasi
│   ├── static-src/
│   │   └── tailwind-input.css  # Input file untuk Tailwind CSS
│   ├── views/            # Template Handlebars
│   │   ├── layouts/
│   │   │   └── main.hbs  # Layout utama
│   │   ├── partials/
│   │   │   └── navbar.hbs # Komponen navbar
│   │   └── home.hbs      # Halaman home
│   └── app.js            # Konfigurasi Express app
├── .env.example          # Contoh file environment variables
├── .gitignore            # File dan folder yang diabaikan Git
├── docker-compose.yml    # Konfigurasi Docker untuk PostgreSQL
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

## Migrasi Database

Proyek ini menggunakan `node-pg-migrate` untuk mengelola skema database.

### Membuat Migrasi Baru

Untuk membuat file migrasi baru, jalankan perintah berikut. Ganti `nama_migrasi_anda` dengan nama yang deskriptif.

```bash
npm run migrate create -- --name nama_migrasi_anda
```

### Menjalankan Migrasi

Untuk menjalankan migrasi database:

```bash
npm run migrate
```

## Tailwind CSS

Proyek ini menggunakan **Tailwind CSS v4** dengan konfigurasi baru yang lebih sederhana.

### Build CSS untuk Produksi

```bash
npm run build:css
```

### Watch Mode untuk Development

Untuk otomatis rebuild CSS saat ada perubahan:

```bash
npm run dev:css
```

**Catatan:** Tailwind v4 tidak lagi memerlukan `tailwind.config.js` atau `postcss.config.js`. Konfigurasi dilakukan langsung di file `src/static-src/tailwind-input.css` menggunakan directive `@source`.

## Menjalankan Aplikasi

### Mode Pengembangan (Development)

Mode ini menggunakan `nodemon` yang akan secara otomatis me-restart server setiap kali ada perubahan pada file.

**Terminal 1 - Build CSS (watch mode):**
```bash
npm run dev:css
```

**Terminal 2 - Jalankan server:**
```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`.

**Tips:** Gunakan `concurrently` untuk menjalankan kedua perintah sekaligus dalam satu terminal:
```bash
npx concurrently "npm run dev:css" "npm run dev"
```

### Mode Produksi (Production)

1. Build CSS terlebih dahulu:
   ```bash
   npm run build:css
   ```

2. Jalankan aplikasi:
   ```bash
   npm start
   ```

## Halaman

- `GET /`: Halaman utama aplikasi dengan Tailwind CSS styling
