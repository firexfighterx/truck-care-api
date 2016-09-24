import express from 'express';
import GroupsController from './GroupsController';
const router = express.Router();

router.get('/groups/active', GroupsController.getActiveTruckCareGroup);
export default router;
