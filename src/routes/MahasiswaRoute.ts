import express, { Router } from 'express';
import { MahasiswaController } from '../controller/MahasiswaController';
import { MahasiswaValidation } from '../validation/MahasiswaValidation';

export const MahasiswaRoute: Router = express.Router();

MahasiswaRoute.get('/', MahasiswaController.getAllMahasiswa)
MahasiswaRoute.get('/:id', MahasiswaController.getMahasiswaById)

MahasiswaRoute.post('/', MahasiswaValidation, MahasiswaController.createMahasiswa)
MahasiswaRoute.patch('/:id', MahasiswaValidation, MahasiswaController.updateMahasiswa)
MahasiswaRoute.delete('/:id', MahasiswaController.deleteMahasiswa)