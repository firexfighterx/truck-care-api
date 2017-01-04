import express from 'express';
import PerformTruckCareController from './PerformTruckCareController';
const router = express.Router();

router.post('/perform/truckcare', PerformTruckCareController.performTruckCare);
export default router;