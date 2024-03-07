import express, { Router } from "express";
import { PendidikanController } from "../controller/PendidikanController";
import { PendidikanValidation } from "../validation/PendidikanValidation";

export const PendidikanRoute: Router = express.Router();

PendidikanRoute.get('/', PendidikanController.getAllPendidikan)
PendidikanRoute.get('/:id', PendidikanController.getPendidikanById)
PendidikanRoute.post('/', PendidikanValidation, PendidikanController.createPendidikan)
PendidikanRoute.patch('/:id', PendidikanValidation, PendidikanController.updatePendidikan)
PendidikanRoute.delete('/:id', PendidikanController.deletePendidikan)