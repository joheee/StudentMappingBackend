import { body } from "express-validator";
import { KeahlianEnum } from "../enum/Enum";

export const KeahlianValidation = [
    body('tingkat_keahlian').exists().notEmpty().custom(val => {
        if(!KeahlianEnum.includes(val)) {
            throw new Error("invalid enum jenis_kelamin, must be : ['ONE','TWO','THREE','FOUR','FIVE','SIX']")
        }
        return true
    }),
    body('id_mahasiswa').exists().notEmpty()
]