import express from 'express';
import GroupsController from './GroupsController';
const router = express.Router();

router.get('/group/active', GroupsController.getActiveTruckCareGroup);
export default router;
