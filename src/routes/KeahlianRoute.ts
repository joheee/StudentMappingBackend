import express, { Router } from 'express';
import { KeahlianController } from '../controller/KeahlianController';
import { KeahlianValidation } from '../validation/KeahlianValidation';

export const KeahlianRoute: Router = express.Router();

KeahlianRoute.get('/', KeahlianController.getAllKeahlian)
KeahlianRoute.get('/:id', KeahlianController.getKeahlianById)

KeahlianRoute.post('/', KeahlianValidation, KeahlianController.createKeahlian)
KeahlianRoute.patch('/:id', KeahlianValidation, KeahlianController.updateKeahlian)
KeahlianRoute.delete('/:id', KeahlianController.deleteKeahlian)