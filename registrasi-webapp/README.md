# Aplikasi Registrasi Web

Aplikasi web untuk mengelola data pendaftaran siswa. Dibangun dengan Express.js, Handlebars, Tailwind CSS v4, dan PostgreSQL sebagai database.

## Fitur Aplikasi

- **Form Pendaftaran Siswa**: Input data pendaftar baru dengan validasi
- **Daftar Pendaftar**: Menampilkan semua data pendaftar dalam bentuk tabel
- **Styling Modern**: Menggunakan Tailwind CSS v4 untuk tampilan responsif
- **Database Management**: Sistem migrasi database dengan node-pg-migrate

## Teknologi yang Digunakan

- **Backend**: Express.js v5
- **Template Engine**: Handlebars (express-handlebars)
- **CSS Framework**: Tailwind CSS v4
- **Database**: PostgreSQL 17
- **Date Handling**: Day.js
- **Environment Variables**: dotenv
- **Development Tools**: nodemon, concurrently

## Struktur Folder

```
.
├── migrations/           # File migrasi database
│   └── 001_skema_awal.sql
├── public/
│   └── css/
│       └── tailwind.css  # File CSS hasil generate Tailwind
├── src/
│   ├── config/
│   │   └── db.js         # Konfigurasi koneksi database
│   ├── controllers/
│   │   └── studentController.js  # Logika pendaftaran siswa
│   ├── models/
│   │   └── studentModel.js       # Model data siswa
│   ├── routes/
│   │   ├── index.js              # Route halaman utama
│   │   └── studentRoutes.js      # Route fitur siswa
│   ├── static-src/
│   │   └── tailwind-input.css    # Input file untuk Tailwind CSS
│   ├── views/            # Template Handlebars
│   │   ├── layouts/
│   │   │   └── main.hbs          # Layout utama
│   │   ├── partials/
│   │   │   └── navbar.hbs        # Komponen navbar
│   │   ├── students/
│   │   │   ├── form.hbs          # Form pendaftaran
│   │   │   └── list.hbs          # Daftar pendaftar
│   │   └── home.hbs              # Halaman home
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

    Salin file `.env.example` menjadi `.env`:
    ```bash
    cp .env.example .env
    ```
    
    Isi file `.env` (konfigurasi default sudah sesuai dengan Docker setup):
    ```env
    PORT=3000
    DB_USER=postgres
    DB_HOST=localhost
    DB_DATABASE=registrasi_db
    DB_PASSWORD=password
    DB_PORT=5432
    ```

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

Proyek ini sudah menyertakan file migrasi `001_skema_awal.sql` yang akan membuat tabel `students` dengan struktur:
- `id` (BIGSERIAL PRIMARY KEY)
- `full_name` (VARCHAR 150) - Nama lengkap siswa
- `gender` (CHAR 1) - Jenis kelamin (L/M)
- `birth_date` (DATE) - Tanggal lahir
- `phone` (VARCHAR 20) - Nomor telepon
- `address` (TEXT) - Alamat lengkap

### Menjalankan Migrasi

Setelah database berjalan, jalankan migrasi untuk membuat tabel:

```bash
npx node-pg-migrate up
```

Untuk rollback migrasi:

```bash
npx node-pg-migrate down
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

## Penggunaan Aplikasi

Setelah aplikasi berjalan, buka browser dan akses `http://localhost:3000`.

### Halaman dan Fitur

#### 1. Halaman Utama (`/`)
- Landing page aplikasi
- Menampilkan navigasi ke fitur-fitur aplikasi

#### 2. Form Pendaftaran Siswa (`/students/register`)
Fitur untuk mendaftarkan siswa baru dengan mengisi:
- **Nama Lengkap** (wajib diisi)
- **Jenis Kelamin** (wajib diisi): Pilih Laki-laki (L) atau Perempuan (M)
- **Tanggal Lahir** (opsional): Format date picker
- **Nomor Telepon** (opsional)
- **Alamat** (opsional): Text area untuk alamat lengkap

**Cara Menggunakan:**
1. Akses halaman `/students/register`
2. Isi form dengan data siswa
3. Klik tombol "Simpan"
4. Sistem akan menampilkan pesan sukses jika data berhasil disimpan
5. Jika ada error validasi (nama atau gender kosong), akan muncul pesan error

**Validasi:**
- Nama lengkap dan jenis kelamin wajib diisi
- Jika validasi gagal, form akan menampilkan error dan data yang sudah diisi tetap ada

#### 3. Daftar Pendaftar (`/students/list`)
Menampilkan semua data siswa yang sudah terdaftar dalam bentuk tabel dengan kolom:
- ID
- Nama Lengkap
- Gender (L/M)
- Tanggal Lahir (format Indonesia dengan Day.js)
- Nomor Telepon
- Alamat

**Fitur:**
- Tabel responsif dengan hover effect
- Jika belum ada data, akan menampilkan pesan "Belum ada data pendaftar"
- Tanggal lahir diformat otomatis menggunakan helper Handlebars

## Endpoint API

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/` | Halaman utama |
| GET | `/students/register` | Menampilkan form pendaftaran |
| POST | `/students/register` | Menyimpan data pendaftar baru |
| GET | `/students/list` | Menampilkan daftar semua pendaftar |

## Tips Pengembangan

1. **Hot Reload CSS**: Gunakan `npm run dev:css` di terminal terpisah saat development agar perubahan CSS langsung terlihat

2. **Database Management**: 
   - Gunakan `docker-compose down` untuk menghentikan database
   - Data tersimpan di folder `db-registrasi/` dan akan tetap ada meskipun container dihapus

3. **Debugging**: 
   - Error akan ditampilkan di console terminal
   - Browser console juga menampilkan error JavaScript jika ada

4. **Testing Form**:
   - Coba submit form tanpa mengisi field wajib untuk melihat validasi
   - Test dengan berbagai input untuk memastikan data tersimpan dengan benar
