import express from 'express';
import TruckListController from './TruckListController';
const router = express.Router();

router.get('/trucks/all', TruckListController.getAllTrucks);
export default router;
