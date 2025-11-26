import { createStudent } from "../models/studentModel.js";

export async function showForm(req, res) {
  res.render("students/form", {
    title: "Form Pendaftaran Siswa"
  });
}

export async function submitForm(req, res) {
  try {
    const { full_name, gender, birth_date, phone, address } = req.body;

    // Minimal validation
    if (!full_name || !gender) {
      return res.status(400).render("students/form", {
        title: "Form Pendaftaran Siswa",
        error: "Nama lengkap dan jenis kelamin wajib diisi!",
        form: req.body
      });
    }

    const newStudent = await createStudent({
      full_name,
      gender,
      birth_date,
      phone,
      address
    });

    res.render("students/form", {
      title: "Form Pendaftaran Siswa",
      success: "Data berhasil disimpan!",
      newStudent,
    });

  } catch (err) {
    console.error(err);
    res.status(500).render("students/form", {
      title: "Form Pendaftaran Siswa",
      error: "Terjadi kesalahan server."
    });
  }
}
