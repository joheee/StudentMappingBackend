import { body } from "express-validator";

export const PendidikanValidation = [
    body('nama_instansi').exists().notEmpty(),
    body('jurusan').exists().notEmpty(),
    body('tahun_masuk').exists().notEmpty().isInt(),
    body('tahun_lulus').exists().notEmpty().isInt(),
    body('nomor_ijazah').exists().notEmpty(),
    body('id_mahasiswa').exists().notEmpty().isInt(),
]