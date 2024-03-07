import { body } from "express-validator";
import { AgamaEnum, JenisKelaminEnum } from "../enum/Enum";

export const MahasiswaValidation = [
    body('nrp').exists().notEmpty(),
    body('nama_depan').exists().notEmpty(),
    body('nama_belakang').exists().notEmpty(),
    body('jenis_kelamin').exists().notEmpty().custom(val => {
        if(!JenisKelaminEnum.includes(val)) {
            throw new Error("invalid enum jenis_kelamin, must be : ['LAKI_LAKI', 'PEREMPUAN']")
        }
        return true
    }),
    body('agama').exists().notEmpty().custom(val => {
        if(!AgamaEnum.includes(val)) {
            throw new Error("invalid enum agama, must be : ['ISLAM', 'KRISTEN', 'HINDU']")
        }
        return true
    }),
    body('umur').exists().notEmpty().isInt(),
    body('tinggi_badan').exists().notEmpty(),
    body('gol_darah').exists().notEmpty(),
    body('alamat').exists().notEmpty(),
    body('hobi').exists().notEmpty(),
    body('email').exists().notEmpty().isEmail(),
    body('no_telpon').exists().notEmpty(),
]