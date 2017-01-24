import express from 'express';
import Validator from './PerformTruckCareValidator';
import Controller from './PerformTruckCareController';
const router = express.Router();

let performTruckCareMethods = [
    Validator.validateBodyParams,
    Validator.isRequestValid,
    Controller.performTruckCare
];

router.post('/perform/truckcare', performTruckCareMethods);
export default router;